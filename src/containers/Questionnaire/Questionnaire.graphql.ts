import { gql } from '@apollo/client';

export const QUESTION_FRAGMENT = gql(`	
    fragment QuestionSingleChoiceFragment on QuestionSingleChoice {
        _id
        type
        showCorrectAnswer
        title
        weight
        required
        description
        options {
            _id
            title
            correct
            feedbackAfterSubmit
        }
        wrongAnswerFeedback
        rightAnswerFeedback
        randomizeOptions
        
    }
    fragment QuestionMultipleChoiceFragment on QuestionMultipleChoice {
        _id
        type
        showCorrectAnswer
        title
        weight
        required
        description
        options {
            _id
            title
            correct
            feedbackAfterSubmit
        }
        wrongAnswerFeedback
        rightAnswerFeedback
        randomizeOptions
        
    }
    fragment QuestionTrueOrFalseFragment on QuestionTrueOrFalse {
        _id
        type
        showCorrectAnswer
        title
        weight
        required
        description
        options {
            _id
            title
            correct
            feedbackAfterSubmit
        }
        wrongAnswerFeedback
        rightAnswerFeedback
    }
    fragment QuestionTextFragment on QuestionText {
        _id
        type
        showCorrectAnswer
        title
        weight
        required
        description
        feedbackAfterSubmit
    }
    
`);

export const SURVEY_FRAGMENT = gql(`
    fragment SurveyFragment on QuestionnaireSurvey {
        _id
        sharedId
        type
        requireEmail
        requireName
        title
        description
        active
        questions {
            type
            ... on QuestionSingleChoice {
                ...QuestionSingleChoiceFragment
            }
            ... on QuestionMultipleChoice {
                ...QuestionMultipleChoiceFragment
            }
            ... on QuestionTrueOrFalse {
                ...QuestionTrueOrFalseFragment
            }
            ... on QuestionText {
                ...QuestionTextFragment
            }
        }
        createdAt
        updatedAt
    }
`);

export const QUIZ_FRAGMENT = gql(`
    fragment QuizFragment on QuestionnaireQuiz {
        _id
        sharedId
        type
        requireEmail
        requireName
        title
        description
        active
        questions {
            ... on QuestionSingleChoice {
                ...QuestionSingleChoiceFragment
            }
            ... on QuestionMultipleChoice {
                ...QuestionMultipleChoiceFragment
            }
            ... on QuestionTrueOrFalse {
                ...QuestionTrueOrFalseFragment
            }
            ... on QuestionText {
                ...QuestionTextFragment
            }
        }
        createdAt
        updatedAt
    }
`);

export const EXAM_FRAGMENT = gql(`
    fragment ExamFragment  on QuestionnaireExam {
        _id
        sharedId
        type
        requireEmail
        requireName
        title
        description
        active
        questions {
            ... on QuestionSingleChoice {
                ...QuestionSingleChoiceFragment
            }
            ... on QuestionMultipleChoice {
                ...QuestionMultipleChoiceFragment
            }
            ... on QuestionTrueOrFalse {
                ...QuestionTrueOrFalseFragment
            }
            ... on QuestionText {
                ...QuestionTextFragment
            }
        }
        createdAt
        updatedAt
        timeLimit
        maxRetryAmount
        randomizeQuestions
    }
`);

export const DELETE_QUESTIONNAIRES = gql(`
	mutation DeleteQuestionnaire(
		$questionnaireSharedId: String!
	) {
		adminDeleteQuestionnaire(
			questionnaireSharedId: $questionnaireSharedId
		) {
			status	
		}
	}
`);
