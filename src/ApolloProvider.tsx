import { createState } from 'state-pool';
import { NotificationContext } from '@contexts/Notification/Notification.context';
import { ApolloProvider, ApolloClient, InMemoryCache, Observable, ApolloLink, HttpLink, from } from '@apollo/client';
import { PropsWithChildren, useContext, useMemo } from 'react';
import { getGraphqlErrorCode } from '@utils/graphql.ts';
import { onError } from '@apollo/client/link/error';
import '@mantine/core/styles.css';
import { nanoid } from 'nanoid';
import './App.scss';

interface RequestContext {
	requestId: string;
	loading: boolean;
	errorCode?: string;
}
const apolloRequestCtxState = createState<RequestContext | null>(null);

const middleware = new ApolloLink((operation, forward) => {
	const requestStartCtx = { requestId: nanoid(5), loading: true };
	operation.setContext(requestStartCtx);
	apolloRequestCtxState.setValue(requestStartCtx);
	return forward(operation);
});

const afterware = new ApolloLink((operation, forward) => {
	return new Observable((observer) => {
		const handle = forward(operation).subscribe({
			next: (result) => {
				observer.next(result);
			},
			error: (networkError) => {
				observer.error(networkError);
			},
			complete: () => {
				const { requestId, errorCode } = operation.getContext() as RequestContext;
				apolloRequestCtxState.setValue({ requestId, errorCode, loading: false });
				observer.complete();
			},
		});

		return () => {
			handle.unsubscribe();
		};
	});
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: from([
		onError((error) => {
			const { requestId } = error.operation.getContext() as RequestContext;
			const requestErrorCtx = {
				errorCode: getGraphqlErrorCode(error),
				loading: false,
				requestId,
			};
			error.operation.setContext(requestErrorCtx);
			apolloRequestCtxState.setValue(requestErrorCtx);
		}),
		middleware,
		afterware,
		new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_ENDPOINT }),
	]),
});

function ApolloClientProvider({ children }: PropsWithChildren) {
	const notificationState = useContext(NotificationContext).state;
	const [apolloRequest] = apolloRequestCtxState.useState();

	useMemo(() => {
		if (!apolloRequest) return;

		const {
			errorCode: requestErrorCode,
			loading: requestLoading,
			requestId,
		} = apolloRequest as { requestId: string; loading: boolean; errorCode: string };

		if (requestLoading) {
			notificationState.setNotification({ id: requestId, type: 'LOADING' });
		} else if (requestErrorCode) {
			notificationState.setNotification({ id: requestId, type: 'ERROR', errorCode: requestErrorCode });
		} else {
			notificationState.setNotification({ id: requestId, type: 'SUCCESS', errorCode: requestErrorCode });
		}
	}, [apolloRequest]);

	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloClientProvider;