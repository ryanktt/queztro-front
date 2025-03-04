import { IQuestionResponseProps } from '@components/Response/ResponseForm/QuestionResponseForm';
import { AnswerTypes, IResponseFormProps } from '@components/Response/ResponseForm/ResponseForm.interface';
import {
	AnswerDiscriminatorInput,
	AnswerType,
	QuestionType,
	RespondQuestionnaireMutationVariables,
	Response,
} from '@gened/graphql';
import { convertPropsToGqlVars } from '@utils/graphql';

export const buildAnswer = (responseProps: IQuestionResponseProps): AnswerDiscriminatorInput => {
	const type = responseProps.type as unknown as AnswerType;
	const discriminator: Partial<AnswerDiscriminatorInput> = { type };
	if (type === AnswerType.MultipleChoice) {
		discriminator.answerMultipleChoice = {
			optionIds: responseProps.selectedOptionIds,
			questionId: responseProps.questionId,
			answeredAt: responseProps.answeredAt,
			type,
		};
	}
	if (type === AnswerType.SingleChoice) {
		discriminator.answerSingleChoice = {
			optionId: responseProps.selectedOptionIds[0],
			questionId: responseProps.questionId,
			answeredAt: responseProps.answeredAt,
			type,
		};
	}
	if (type === AnswerType.TrueOrFalse) {
		discriminator.answerTrueOrFalse = {
			optionId: responseProps.selectedOptionIds[0],
			questionId: responseProps.questionId,
			answeredAt: responseProps.answeredAt,
			type,
		};
	}
	if (type === AnswerType.Text) {
		discriminator.answerText = {
			questionId: responseProps.questionId,
			answeredAt: responseProps.answeredAt,
			text: responseProps.text,
			type,
		};
	}
	return discriminator as AnswerDiscriminatorInput;
};

export const buildRespondQuestionnaireGqlVars = (
	{ email, name, questionResponses, startedAt, completedAt }: IResponseFormProps,
	questionnaireId: string,
): RespondQuestionnaireMutationVariables => {
	return convertPropsToGqlVars({
		name,
		email,
		questionnaireId,
		answers: questionResponses.map(buildAnswer),
		startedAt: startedAt as Date,
		completedAt: completedAt as Date,
	}) as RespondQuestionnaireMutationVariables;
};

export const buildResponseFormProps = (response?: Response): IResponseFormProps => {
	if (!response) {
		return {
			email: '',
			name: '',
			questionResponses: [],
			completedAt: new Date(),
			startedAt: new Date(),
		};
	}

	return {
		email: response.respondentName || '',
		name: response.respondentEmail || '',
		questionResponses: response.answers.map((answer: AnswerTypes) => {
			const selectedOptionIds: string[] = [];
			let text = '';
			if ('option' in answer && answer.option) selectedOptionIds.push(answer.option);
			if ('options' in answer && answer.options) selectedOptionIds.push(...answer.options);
			if ('text' in answer && answer.text) text = answer.text;
			return {
				type: answer.type as unknown as QuestionType,
				anweredAt: answer.answeredAt ? new Date(answer.answeredAt) : undefined,
				questionId: answer.question,
				selectedOptionIds,
				text,
			};
		}),
		completedAt: new Date(response.completedAt as Date),
		startedAt: new Date(response.startedAt),
	};
};
