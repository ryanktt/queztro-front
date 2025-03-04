import {
	AnswerMultipleChoice,
	AnswerMultipleChoiceInput,
	AnswerSingleChoice,
	AnswerSingleChoiceInput,
	AnswerText,
	AnswerTextInput,
	AnswerTrueOrFalse,
	AnswerTrueOrFalseInput,
} from '@gened/graphql.ts';
import { IQuestionResponseProps } from './QuestionResponseForm.tsx';

export type AnswerTypes = AnswerMultipleChoice | AnswerSingleChoice | AnswerTrueOrFalse | AnswerText;

export type IAnswerInputTypes =
	| AnswerMultipleChoiceInput
	| AnswerTextInput
	| AnswerSingleChoiceInput
	| AnswerTrueOrFalseInput;

export interface IResponseFormProps {
	name: string;
	email: string;
	questionResponses: IQuestionResponseProps[];
	startedAt?: Date;
	completedAt?: Date;
}
