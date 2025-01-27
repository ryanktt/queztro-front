import {
	QuestionMultipleChoice,
	QuestionSingleChoice,
	QuestionText,
	QuestionTrueOrFalse,
	QuestionnaireExam,
	QuestionnaireQuiz,
	QuestionnaireSurvey,
} from '@gened/graphql.ts';

export type QuestionnaireTypes = QuestionnaireExam | QuestionnaireSurvey | QuestionnaireQuiz;

export type QuestionTypes = QuestionMultipleChoice | QuestionSingleChoice | QuestionTrueOrFalse | QuestionText;

export type IUpsertQuestionnaireMethods =
	| {
			method: 'ADD';
			questionnaireProps?: QuestionnaireTypes;
	  }
	| {
			method: 'EDIT';
			questionnaireProps: QuestionnaireTypes;
	  };
