/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { QuestionnaireTypes } from '@components/Questionnaire/Questionnaire.interface';
import { IResponseFormProps } from '@components/Response/ResponseForm/ResponseForm.interface';
import ResponseForm from '@components/Response/ResponseForm/ResponseForm.tsx';
import { buildQuestionnaireFormProps } from '@containers/Questionnaire/EditQuestionnaire/EditQuestionnaire.aux.ts';
import { GlobalContext } from '@contexts/Global/Global.context';
import { ILayoutBgColors } from '@contexts/Global/Global.types.ts';
import { usePublicFetchQuestionnaireSuspenseQuery, useRespondQuestionnaireMutation } from '@gened/graphql.ts';
import { Container } from '@mantine/core';
import '@mantine/core/styles.css';
import { IColorSchemes } from '@utils/color.ts';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { buildRespondQuestionnaireGqlVars } from './Response.aux.ts';

export default function RespondQuestionnaire() {
	const ctx = useContext(GlobalContext);
	const params = useParams() as { sharedId: string };

	const { data: fetchQuestRes } = usePublicFetchQuestionnaireSuspenseQuery({
		variables: { questionnaireSharedId: params.sharedId },
	});
	const [respondMutation, { data: respondData, reset: resetRespond }] = useRespondQuestionnaireMutation();
	const questionnaire = fetchQuestRes.publicFetchQuestionnaire as QuestionnaireTypes;
	const color = questionnaire.color || ('indigo' as IColorSchemes);
	const bgColor = (questionnaire.bgColor || color) as ILayoutBgColors;

	useEffect(() => {
		if (!respondData) return;
		resetRespond();
	}, [respondData]);

	useEffect(() => {
		ctx.state.setResponseBgColor(bgColor);
	}, [bgColor]);

	const handleRespondQuestionnaire = async (props: IResponseFormProps) => {
		const variables = buildRespondQuestionnaireGqlVars(props, questionnaire._id);
		await respondMutation({ variables });
	};

	return (
		<Container display="flex" mih={700} p={15} size="48rem">
			<ResponseForm
				colorScheme={color as IColorSchemes}
				questionnaireProps={buildQuestionnaireFormProps(questionnaire)}
				onSubmit={handleRespondQuestionnaire}
			/>
		</Container>
	);
}
