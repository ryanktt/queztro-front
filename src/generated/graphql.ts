import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date; output: Date; }
};

export type Admin = SchemaBaseInterface & User & {
  __typename?: 'Admin';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: UserType;
  self: User;
  updatedAt: Scalars['DateTime']['output'];
};

export type Answer = {
  _id: Scalars['String']['output'];
  answeredAt?: Maybe<Scalars['DateTime']['output']>;
  correct?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['DateTime']['output'];
  question: Scalars['String']['output'];
  type: AnswerType;
  updatedAt: Scalars['DateTime']['output'];
};

export type AnswerDiscriminatorInput = {
  answerMultipleChoice?: InputMaybe<AnswerMultipleChoiceInput>;
  answerSingleChoice?: InputMaybe<AnswerSingleChoiceInput>;
  answerText?: InputMaybe<AnswerTextInput>;
  answerTrueOrFalse?: InputMaybe<AnswerTrueOrFalseInput>;
  type: AnswerType;
};

export type AnswerMultipleChoice = Answer & {
  __typename?: 'AnswerMultipleChoice';
  _id: Scalars['String']['output'];
  answeredAt?: Maybe<Scalars['DateTime']['output']>;
  correct?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['DateTime']['output'];
  options?: Maybe<Array<Scalars['String']['output']>>;
  question: Scalars['String']['output'];
  type: AnswerType;
  updatedAt: Scalars['DateTime']['output'];
};

export type AnswerMultipleChoiceInput = {
  answeredAt?: InputMaybe<Scalars['DateTime']['input']>;
  optionIds?: InputMaybe<Array<Scalars['String']['input']>>;
  questionId: Scalars['String']['input'];
  type: AnswerType;
};

export type AnswerSingleChoice = Answer & {
  __typename?: 'AnswerSingleChoice';
  _id: Scalars['String']['output'];
  answeredAt?: Maybe<Scalars['DateTime']['output']>;
  correct?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['DateTime']['output'];
  option?: Maybe<Scalars['String']['output']>;
  question: Scalars['String']['output'];
  type: AnswerType;
  updatedAt: Scalars['DateTime']['output'];
};

export type AnswerSingleChoiceInput = {
  answeredAt?: InputMaybe<Scalars['DateTime']['input']>;
  optionId?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['String']['input'];
  type: AnswerType;
};

export type AnswerText = Answer & {
  __typename?: 'AnswerText';
  _id: Scalars['String']['output'];
  answeredAt?: Maybe<Scalars['DateTime']['output']>;
  correct?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['DateTime']['output'];
  question: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
  type: AnswerType;
  updatedAt: Scalars['DateTime']['output'];
};

export type AnswerTextInput = {
  answeredAt?: InputMaybe<Scalars['DateTime']['input']>;
  questionId: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  type: AnswerType;
};

export type AnswerTrueOrFalse = Answer & {
  __typename?: 'AnswerTrueOrFalse';
  _id: Scalars['String']['output'];
  answeredAt?: Maybe<Scalars['DateTime']['output']>;
  correct?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['DateTime']['output'];
  option?: Maybe<Scalars['String']['output']>;
  question: Scalars['String']['output'];
  type: AnswerType;
  updatedAt: Scalars['DateTime']['output'];
};

export type AnswerTrueOrFalseInput = {
  answeredAt?: InputMaybe<Scalars['DateTime']['input']>;
  optionId?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['String']['input'];
  type: AnswerType;
};

export enum AnswerType {
  MultipleChoice = 'MULTIPLE_CHOICE',
  SingleChoice = 'SINGLE_CHOICE',
  Text = 'TEXT',
  TrueOrFalse = 'TRUE_OR_FALSE'
}

export type AuthResponse = {
  __typename?: 'AuthResponse';
  authToken: Scalars['String']['output'];
  session: Session;
  user: Admin;
};

export type DeleteQuestionnaireResponse = {
  __typename?: 'DeleteQuestionnaireResponse';
  status: Scalars['String']['output'];
};

export type LogOutResponse = {
  __typename?: 'LogOutResponse';
  session: Session;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminCreateQuestionnaireExam: QuestionnaireExam;
  adminCreateQuestionnaireQuiz: QuestionnaireQuiz;
  adminCreateQuestionnaireSurvey: QuestionnaireSurvey;
  adminDeleteQuestionnaire?: Maybe<DeleteQuestionnaireResponse>;
  adminUpdateQuestionnaireExam: QuestionnaireExam;
  adminUpdateQuestionnaireQuiz: QuestionnaireQuiz;
  adminUpdateQuestionnaireSurvey: QuestionnaireSurvey;
  publicSignIn: AuthResponse;
  publicSignOut: SignOutResponse;
  publicSignUp: AuthResponse;
  publicUpsertQuestionnaireResponse: PublicUpsertResponse;
  userlogOut: LogOutResponse;
};


export type MutationAdminCreateQuestionnaireExamArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  maxRetryAmount?: InputMaybe<Scalars['Float']['input']>;
  passingGradePercent?: InputMaybe<Scalars['Float']['input']>;
  questions: Array<QuestionDiscriminatorInput>;
  randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
  requireEmail?: InputMaybe<Scalars['Boolean']['input']>;
  requireName?: InputMaybe<Scalars['Boolean']['input']>;
  timeLimit?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
};


export type MutationAdminCreateQuestionnaireQuizArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  questions: Array<QuestionDiscriminatorInput>;
  requireEmail?: InputMaybe<Scalars['Boolean']['input']>;
  requireName?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};


export type MutationAdminCreateQuestionnaireSurveyArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  questions: Array<QuestionDiscriminatorInput>;
  requireEmail?: InputMaybe<Scalars['Boolean']['input']>;
  requireName?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};


export type MutationAdminDeleteQuestionnaireArgs = {
  questionnaireSharedId: Scalars['String']['input'];
};


export type MutationAdminUpdateQuestionnaireExamArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  maxRetryAmount?: InputMaybe<Scalars['Float']['input']>;
  passingGradePercent?: InputMaybe<Scalars['Float']['input']>;
  questionMethods?: InputMaybe<Array<QuestionMethodInput>>;
  questionnaireId: Scalars['String']['input'];
  randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
  requireEmail?: InputMaybe<Scalars['Boolean']['input']>;
  requireName?: InputMaybe<Scalars['Boolean']['input']>;
  timeLimit?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationAdminUpdateQuestionnaireQuizArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  questionMethods?: InputMaybe<Array<QuestionMethodInput>>;
  questionnaireId: Scalars['String']['input'];
  requireEmail?: InputMaybe<Scalars['Boolean']['input']>;
  requireName?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdminUpdateQuestionnaireSurveyArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  questionMethods?: InputMaybe<Array<QuestionMethodInput>>;
  questionnaireId: Scalars['String']['input'];
  requireEmail?: InputMaybe<Scalars['Boolean']['input']>;
  requireName?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPublicSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPublicSignUpArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPublicUpsertQuestionnaireResponseArgs = {
  answers: Array<AnswerDiscriminatorInput>;
  completedAt: Scalars['DateTime']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questionnaireId: Scalars['String']['input'];
  startedAt: Scalars['DateTime']['input'];
};

export type Option = {
  __typename?: 'Option';
  _id: Scalars['String']['output'];
  correct?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['DateTime']['output'];
  feedbackAfterSubmit?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OptionInput = {
  correct?: InputMaybe<Scalars['Boolean']['input']>;
  feedbackAfterSubmit?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type OptionMetrics = {
  __typename?: 'OptionMetrics';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  selectedCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PublicUpsertResponse = {
  __typename?: 'PublicUpsertResponse';
  authToken: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  adminFetchQuestionnaire?: Maybe<Questionnaire>;
  adminFetchQuestionnaires: Array<Questionnaire>;
  fetchAdmin?: Maybe<Admin>;
};


export type QueryAdminFetchQuestionnaireArgs = {
  latest?: InputMaybe<Scalars['Boolean']['input']>;
  questionnaireId?: InputMaybe<Scalars['String']['input']>;
  questionnaireSharedId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminFetchQuestionnairesArgs = {
  latest?: InputMaybe<Scalars['Boolean']['input']>;
  questionnaireIds?: InputMaybe<Array<Scalars['String']['input']>>;
  questionnaireSharedIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryFetchAdminArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Question = {
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  required: Scalars['Boolean']['output'];
  showCorrectAnswer: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type: QuestionType;
  updatedAt: Scalars['DateTime']['output'];
  weight?: Maybe<Scalars['Int']['output']>;
};

export type QuestionDiscriminatorInput = {
  questionMultipleChoice?: InputMaybe<QuestionMultipleChoiceInput>;
  questionSingleChoice?: InputMaybe<QuestionSingleChoiceInput>;
  questionText?: InputMaybe<QuestionTextInput>;
  questionTrueOrFalse?: InputMaybe<QuestionTrueOrFalseInput>;
  type: QuestionType;
};

export type QuestionMethodInput = {
  questionDiscriminator?: InputMaybe<QuestionDiscriminatorInput>;
  questionId?: InputMaybe<Scalars['String']['input']>;
  type: QuestionMethodType;
};

export enum QuestionMethodType {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type QuestionMetrics = {
  _id: Scalars['String']['output'];
  answerCount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  type: QuestionType;
  unansweredCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type QuestionMultipleChoice = Question & {
  __typename?: 'QuestionMultipleChoice';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  options: Array<Option>;
  randomizeOptions: Scalars['Boolean']['output'];
  required: Scalars['Boolean']['output'];
  rightAnswerFeedback?: Maybe<Scalars['String']['output']>;
  showCorrectAnswer: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type: QuestionType;
  updatedAt: Scalars['DateTime']['output'];
  weight?: Maybe<Scalars['Int']['output']>;
  wrongAnswerFeedback?: Maybe<Scalars['String']['output']>;
};

export type QuestionMultipleChoiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  options: Array<OptionInput>;
  randomizeOptions?: InputMaybe<Scalars['Boolean']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  rightAnswerFeedback?: InputMaybe<Scalars['String']['input']>;
  showCorrectAnswer?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type: QuestionType;
  weight?: InputMaybe<Scalars['Int']['input']>;
  wrongAnswerFeedback?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionMultipleChoiceMetrics = QuestionMetrics & {
  __typename?: 'QuestionMultipleChoiceMetrics';
  _id: Scalars['String']['output'];
  answerCount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  options: Array<OptionMetrics>;
  rightAnswerCount: Scalars['Int']['output'];
  type: QuestionType;
  unansweredCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  wrongAnswerCount: Scalars['Int']['output'];
};

export type QuestionSingleChoice = Question & {
  __typename?: 'QuestionSingleChoice';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  options: Array<Option>;
  randomizeOptions: Scalars['Boolean']['output'];
  required: Scalars['Boolean']['output'];
  rightAnswerFeedback?: Maybe<Scalars['String']['output']>;
  showCorrectAnswer: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type: QuestionType;
  updatedAt: Scalars['DateTime']['output'];
  weight?: Maybe<Scalars['Int']['output']>;
  wrongAnswerFeedback?: Maybe<Scalars['String']['output']>;
};

export type QuestionSingleChoiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  options: Array<OptionInput>;
  randomizeOptions?: InputMaybe<Scalars['Boolean']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  rightAnswerFeedback?: InputMaybe<Scalars['String']['input']>;
  showCorrectAnswer?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type: QuestionType;
  weight?: InputMaybe<Scalars['Int']['input']>;
  wrongAnswerFeedback?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionSingleChoiceMetrics = QuestionMetrics & {
  __typename?: 'QuestionSingleChoiceMetrics';
  _id: Scalars['String']['output'];
  answerCount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  options: Array<OptionMetrics>;
  rightAnswerCount: Scalars['Int']['output'];
  type: QuestionType;
  unansweredCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  wrongAnswerCount: Scalars['Int']['output'];
};

export type QuestionText = Question & {
  __typename?: 'QuestionText';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feedbackAfterSubmit?: Maybe<Scalars['String']['output']>;
  required: Scalars['Boolean']['output'];
  showCorrectAnswer: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type: QuestionType;
  updatedAt: Scalars['DateTime']['output'];
  weight?: Maybe<Scalars['Int']['output']>;
};

export type QuestionTextInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  feedbackAfterSubmit?: InputMaybe<Scalars['String']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  showCorrectAnswer?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type: QuestionType;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type QuestionTextMetrics = QuestionMetrics & {
  __typename?: 'QuestionTextMetrics';
  _id: Scalars['String']['output'];
  answerCount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  type: QuestionType;
  unansweredCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type QuestionTrueOrFalse = Question & {
  __typename?: 'QuestionTrueOrFalse';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  options: Array<Option>;
  required: Scalars['Boolean']['output'];
  rightAnswerFeedback?: Maybe<Scalars['String']['output']>;
  showCorrectAnswer: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type: QuestionType;
  updatedAt: Scalars['DateTime']['output'];
  weight?: Maybe<Scalars['Int']['output']>;
  wrongAnswerFeedback?: Maybe<Scalars['String']['output']>;
};

export type QuestionTrueOrFalseInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  options: Array<OptionInput>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  rightAnswerFeedback?: InputMaybe<Scalars['String']['input']>;
  showCorrectAnswer?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type: QuestionType;
  weight?: InputMaybe<Scalars['Int']['input']>;
  wrongAnswerFeedback?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionTrueOrFalseMetrics = QuestionMetrics & {
  __typename?: 'QuestionTrueOrFalseMetrics';
  _id: Scalars['String']['output'];
  answerCount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  options: Array<OptionMetrics>;
  rightAnswerCount: Scalars['Int']['output'];
  type: QuestionType;
  unansweredCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  wrongAnswerCount: Scalars['Int']['output'];
};

export enum QuestionType {
  MultipleChoice = 'MULTIPLE_CHOICE',
  SingleChoice = 'SINGLE_CHOICE',
  Text = 'TEXT',
  TrueOrFalse = 'TRUE_OR_FALSE'
}

export type Questionnaire = {
  _id: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  latest: Scalars['Boolean']['output'];
  metrics: QuestionnaireMetrics;
  questions: Array<Question>;
  requireEmail: Scalars['Boolean']['output'];
  requireName: Scalars['Boolean']['output'];
  sharedId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: QuestionnaireType;
  updatedAt: Scalars['DateTime']['output'];
  user: Admin;
};

export type QuestionnaireExam = Questionnaire & SchemaBaseInterface & {
  __typename?: 'QuestionnaireExam';
  _id: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  latest: Scalars['Boolean']['output'];
  maxRetryAmount?: Maybe<Scalars['Float']['output']>;
  metrics: QuestionnaireMetrics;
  passingGradePercent?: Maybe<Scalars['Float']['output']>;
  questions: Array<Question>;
  randomizeQuestions: Scalars['Boolean']['output'];
  requireEmail: Scalars['Boolean']['output'];
  requireName: Scalars['Boolean']['output'];
  sharedId: Scalars['String']['output'];
  timeLimit?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  type: QuestionnaireType;
  updatedAt: Scalars['DateTime']['output'];
  user: Admin;
};

export type QuestionnaireMetrics = {
  __typename?: 'QuestionnaireMetrics';
  _id: Scalars['String']['output'];
  avgAnswerTime: Scalars['Int']['output'];
  avgAttempCount: Scalars['Int']['output'];
  /** A JSON string of the questionnaire metrics map (by location) */
  byLocationMap?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  questionMetrics: Array<QuestionMetrics>;
  totalAnswerTime: Scalars['Int']['output'];
  totalAttemptCount: Scalars['Int']['output'];
  totalResponseCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type QuestionnaireQuiz = Questionnaire & SchemaBaseInterface & {
  __typename?: 'QuestionnaireQuiz';
  _id: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  latest: Scalars['Boolean']['output'];
  metrics: QuestionnaireMetrics;
  questions: Array<Question>;
  requireEmail: Scalars['Boolean']['output'];
  requireName: Scalars['Boolean']['output'];
  sharedId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: QuestionnaireType;
  updatedAt: Scalars['DateTime']['output'];
  user: Admin;
};

export type QuestionnaireSurvey = Questionnaire & SchemaBaseInterface & {
  __typename?: 'QuestionnaireSurvey';
  _id: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  latest: Scalars['Boolean']['output'];
  metrics: QuestionnaireMetrics;
  questions: Array<Question>;
  requireEmail: Scalars['Boolean']['output'];
  requireName: Scalars['Boolean']['output'];
  sharedId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: QuestionnaireType;
  updatedAt: Scalars['DateTime']['output'];
  user: Admin;
};

export enum QuestionnaireType {
  QuestionnaireExam = 'QuestionnaireExam',
  QuestionnaireQuiz = 'QuestionnaireQuiz',
  QuestionnaireSurvey = 'QuestionnaireSurvey'
}

export type Respondent = SchemaBaseInterface & User & {
  __typename?: 'Respondent';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  location?: Maybe<RespondentLocation>;
  name?: Maybe<Scalars['String']['output']>;
  questionnaire: Questionnaire;
  role: UserType;
  self: Respondent;
  updatedAt: Scalars['DateTime']['output'];
};

export type RespondentLocation = {
  __typename?: 'RespondentLocation';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  region: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
};

export type Response = {
  __typename?: 'Response';
  _id: Scalars['String']['output'];
  answers: Array<Answer>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  questionnaire: Questionnaire;
  respondent: Respondent;
  self: Response;
  startedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SchemaBaseInterface = {
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Session = {
  __typename?: 'Session';
  _id: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  ip: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userAgent: Scalars['String']['output'];
};

export type SignOutResponse = {
  __typename?: 'SignOutResponse';
  status: Scalars['String']['output'];
};

export type User = {
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  role: UserType;
  self: User;
  updatedAt: Scalars['DateTime']['output'];
};

export enum UserType {
  Admin = 'Admin',
  Respondent = 'Respondent',
  User = 'User'
}

export type SignUpMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', publicSignUp: { __typename?: 'AuthResponse', authToken: string, session: { __typename?: 'Session', _id: string, ip: string, active: boolean, userAgent: string, expiresAt: Date, updatedAt: Date, createdAt: Date }, user: { __typename?: 'Admin', _id: string, email: string, name: string, role: UserType, createdAt: Date, updatedAt: Date } } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', publicSignIn: { __typename?: 'AuthResponse', authToken: string, session: { __typename?: 'Session', _id: string, ip: string, active: boolean, userAgent: string, expiresAt: Date, updatedAt: Date, createdAt: Date }, user: { __typename?: 'Admin', _id: string, email: string, name: string, role: UserType, createdAt: Date, updatedAt: Date } } };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', publicSignOut: { __typename?: 'SignOutResponse', status: string } };

export type CreateSurveyMutationVariables = Exact<{
  title: Scalars['String']['input'];
  requireEmail: Scalars['Boolean']['input'];
  requireName: Scalars['Boolean']['input'];
  questions: Array<QuestionDiscriminatorInput> | QuestionDiscriminatorInput;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateSurveyMutation = { __typename?: 'Mutation', adminCreateQuestionnaireSurvey: { __typename?: 'QuestionnaireSurvey', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, questions: Array<{ __typename?: 'QuestionMultipleChoice', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> } };

export type UpdateSurveyMutationVariables = Exact<{
  questionnaireId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  questionMethods?: InputMaybe<Array<QuestionMethodInput> | QuestionMethodInput>;
  requireEmail?: InputMaybe<Scalars['Boolean']['input']>;
  requireName?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateSurveyMutation = { __typename?: 'Mutation', adminUpdateQuestionnaireSurvey: { __typename?: 'QuestionnaireSurvey', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, questions: Array<{ __typename?: 'QuestionMultipleChoice', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> } };

export type FetchQuestionnaireQueryVariables = Exact<{
  questionnaireId?: InputMaybe<Scalars['String']['input']>;
  questionnaireSharedId?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchQuestionnaireQuery = { __typename?: 'Query', adminFetchQuestionnaire?: { __typename?: 'QuestionnaireExam', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, timeLimit?: number | null, maxRetryAmount?: number | null, randomizeQuestions: boolean, questions: Array<{ __typename?: 'QuestionMultipleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> } | { __typename?: 'QuestionnaireQuiz', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, questions: Array<{ __typename?: 'QuestionMultipleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> } | { __typename?: 'QuestionnaireSurvey', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, questions: Array<{ __typename?: 'QuestionMultipleChoice', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> } | null };

export type QuestionSingleChoiceFragmentFragment = { __typename?: 'QuestionSingleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> };

export type QuestionMultipleChoiceFragmentFragment = { __typename?: 'QuestionMultipleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> };

export type QuestionTrueOrFalseFragmentFragment = { __typename?: 'QuestionTrueOrFalse', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> };

export type QuestionTextFragmentFragment = { __typename?: 'QuestionText', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null };

export type SurveyFragmentFragment = { __typename?: 'QuestionnaireSurvey', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, questions: Array<{ __typename?: 'QuestionMultipleChoice', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> };

export type QuizFragmentFragment = { __typename?: 'QuestionnaireQuiz', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, questions: Array<{ __typename?: 'QuestionMultipleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> };

export type ExamFragmentFragment = { __typename?: 'QuestionnaireExam', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, timeLimit?: number | null, maxRetryAmount?: number | null, randomizeQuestions: boolean, questions: Array<{ __typename?: 'QuestionMultipleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> };

export type DeleteQuestionnaireMutationVariables = Exact<{
  questionnaireSharedId: Scalars['String']['input'];
}>;


export type DeleteQuestionnaireMutation = { __typename?: 'Mutation', adminDeleteQuestionnaire?: { __typename?: 'DeleteQuestionnaireResponse', status: string } | null };

export type FetchQuestionnairesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchQuestionnairesQuery = { __typename?: 'Query', adminFetchQuestionnaires: Array<{ __typename?: 'QuestionnaireExam', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, timeLimit?: number | null, maxRetryAmount?: number | null, randomizeQuestions: boolean, questions: Array<{ __typename?: 'QuestionMultipleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> } | { __typename?: 'QuestionnaireQuiz', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, questions: Array<{ __typename?: 'QuestionMultipleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', _id: string, type: QuestionType, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> } | { __typename?: 'QuestionnaireSurvey', _id: string, sharedId: string, type: QuestionnaireType, requireEmail: boolean, requireName: boolean, title: string, description: string, active: boolean, createdAt: Date, updatedAt: Date, questions: Array<{ __typename?: 'QuestionMultipleChoice', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionSingleChoice', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, randomizeOptions: boolean, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> } | { __typename?: 'QuestionText', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, feedbackAfterSubmit?: string | null } | { __typename?: 'QuestionTrueOrFalse', type: QuestionType, _id: string, showCorrectAnswer: boolean, title?: string | null, weight?: number | null, required: boolean, description?: string | null, wrongAnswerFeedback?: string | null, rightAnswerFeedback?: string | null, options: Array<{ __typename?: 'Option', _id: string, title: string, correct?: boolean | null, feedbackAfterSubmit?: string | null }> }> }> };

export const QuestionSingleChoiceFragmentFragmentDoc = gql`
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
    `;
export const QuestionMultipleChoiceFragmentFragmentDoc = gql`
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
    `;
export const QuestionTrueOrFalseFragmentFragmentDoc = gql`
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
    `;
export const QuestionTextFragmentFragmentDoc = gql`
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
    `;
export const SurveyFragmentFragmentDoc = gql`
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
    ${QuestionSingleChoiceFragmentFragmentDoc}
${QuestionMultipleChoiceFragmentFragmentDoc}
${QuestionTrueOrFalseFragmentFragmentDoc}
${QuestionTextFragmentFragmentDoc}`;
export const QuizFragmentFragmentDoc = gql`
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
    ${QuestionSingleChoiceFragmentFragmentDoc}
${QuestionMultipleChoiceFragmentFragmentDoc}
${QuestionTrueOrFalseFragmentFragmentDoc}
${QuestionTextFragmentFragmentDoc}`;
export const ExamFragmentFragmentDoc = gql`
    fragment ExamFragment on QuestionnaireExam {
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
    ${QuestionSingleChoiceFragmentFragmentDoc}
${QuestionMultipleChoiceFragmentFragmentDoc}
${QuestionTrueOrFalseFragmentFragmentDoc}
${QuestionTextFragmentFragmentDoc}`;
export const SignUpDocument = gql`
    mutation SignUp($name: String!, $email: String!, $password: String!) {
  publicSignUp(name: $name, email: $email, password: $password) {
    authToken
    session {
      _id
      ip
      active
      userAgent
      expiresAt
      updatedAt
      createdAt
    }
    user {
      _id
      email
      name
      role
      createdAt
      updatedAt
    }
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  publicSignIn(email: $email, password: $password) {
    authToken
    session {
      _id
      ip
      active
      userAgent
      expiresAt
      updatedAt
      createdAt
    }
    user {
      _id
      email
      name
      role
      createdAt
      updatedAt
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
    mutation signOut {
  publicSignOut {
    status
  }
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const CreateSurveyDocument = gql`
    mutation CreateSurvey($title: String!, $requireEmail: Boolean!, $requireName: Boolean!, $questions: [QuestionDiscriminatorInput!]!, $description: String) {
  adminCreateQuestionnaireSurvey(
    title: $title
    requireEmail: $requireEmail
    requireName: $requireName
    questions: $questions
    description: $description
  ) {
    ...SurveyFragment
  }
}
    ${SurveyFragmentFragmentDoc}`;
export type CreateSurveyMutationFn = Apollo.MutationFunction<CreateSurveyMutation, CreateSurveyMutationVariables>;

/**
 * __useCreateSurveyMutation__
 *
 * To run a mutation, you first call `useCreateSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyMutation, { data, loading, error }] = useCreateSurveyMutation({
 *   variables: {
 *      title: // value for 'title'
 *      requireEmail: // value for 'requireEmail'
 *      requireName: // value for 'requireName'
 *      questions: // value for 'questions'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateSurveyMutation(baseOptions?: Apollo.MutationHookOptions<CreateSurveyMutation, CreateSurveyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSurveyMutation, CreateSurveyMutationVariables>(CreateSurveyDocument, options);
      }
export type CreateSurveyMutationHookResult = ReturnType<typeof useCreateSurveyMutation>;
export type CreateSurveyMutationResult = Apollo.MutationResult<CreateSurveyMutation>;
export type CreateSurveyMutationOptions = Apollo.BaseMutationOptions<CreateSurveyMutation, CreateSurveyMutationVariables>;
export const UpdateSurveyDocument = gql`
    mutation UpdateSurvey($questionnaireId: String!, $title: String, $questionMethods: [QuestionMethodInput!], $requireEmail: Boolean, $requireName: Boolean, $description: String) {
  adminUpdateQuestionnaireSurvey(
    questionnaireId: $questionnaireId
    title: $title
    questionMethods: $questionMethods
    requireEmail: $requireEmail
    requireName: $requireName
    description: $description
  ) {
    ...SurveyFragment
  }
}
    ${SurveyFragmentFragmentDoc}`;
export type UpdateSurveyMutationFn = Apollo.MutationFunction<UpdateSurveyMutation, UpdateSurveyMutationVariables>;

/**
 * __useUpdateSurveyMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyMutation, { data, loading, error }] = useUpdateSurveyMutation({
 *   variables: {
 *      questionnaireId: // value for 'questionnaireId'
 *      title: // value for 'title'
 *      questionMethods: // value for 'questionMethods'
 *      requireEmail: // value for 'requireEmail'
 *      requireName: // value for 'requireName'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateSurveyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSurveyMutation, UpdateSurveyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSurveyMutation, UpdateSurveyMutationVariables>(UpdateSurveyDocument, options);
      }
export type UpdateSurveyMutationHookResult = ReturnType<typeof useUpdateSurveyMutation>;
export type UpdateSurveyMutationResult = Apollo.MutationResult<UpdateSurveyMutation>;
export type UpdateSurveyMutationOptions = Apollo.BaseMutationOptions<UpdateSurveyMutation, UpdateSurveyMutationVariables>;
export const FetchQuestionnaireDocument = gql`
    query FetchQuestionnaire($questionnaireId: String, $questionnaireSharedId: String) {
  adminFetchQuestionnaire(
    questionnaireId: $questionnaireId
    questionnaireSharedId: $questionnaireSharedId
  ) {
    ... on QuestionnaireSurvey {
      ...SurveyFragment
    }
    ... on QuestionnaireExam {
      ...ExamFragment
    }
    ... on QuestionnaireQuiz {
      ...QuizFragment
    }
  }
}
    ${SurveyFragmentFragmentDoc}
${ExamFragmentFragmentDoc}
${QuizFragmentFragmentDoc}`;

/**
 * __useFetchQuestionnaireQuery__
 *
 * To run a query within a React component, call `useFetchQuestionnaireQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchQuestionnaireQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchQuestionnaireQuery({
 *   variables: {
 *      questionnaireId: // value for 'questionnaireId'
 *      questionnaireSharedId: // value for 'questionnaireSharedId'
 *   },
 * });
 */
export function useFetchQuestionnaireQuery(baseOptions?: Apollo.QueryHookOptions<FetchQuestionnaireQuery, FetchQuestionnaireQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchQuestionnaireQuery, FetchQuestionnaireQueryVariables>(FetchQuestionnaireDocument, options);
      }
export function useFetchQuestionnaireLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchQuestionnaireQuery, FetchQuestionnaireQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchQuestionnaireQuery, FetchQuestionnaireQueryVariables>(FetchQuestionnaireDocument, options);
        }
export function useFetchQuestionnaireSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchQuestionnaireQuery, FetchQuestionnaireQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchQuestionnaireQuery, FetchQuestionnaireQueryVariables>(FetchQuestionnaireDocument, options);
        }
export type FetchQuestionnaireQueryHookResult = ReturnType<typeof useFetchQuestionnaireQuery>;
export type FetchQuestionnaireLazyQueryHookResult = ReturnType<typeof useFetchQuestionnaireLazyQuery>;
export type FetchQuestionnaireSuspenseQueryHookResult = ReturnType<typeof useFetchQuestionnaireSuspenseQuery>;
export type FetchQuestionnaireQueryResult = Apollo.QueryResult<FetchQuestionnaireQuery, FetchQuestionnaireQueryVariables>;
export const DeleteQuestionnaireDocument = gql`
    mutation DeleteQuestionnaire($questionnaireSharedId: String!) {
  adminDeleteQuestionnaire(questionnaireSharedId: $questionnaireSharedId) {
    status
  }
}
    `;
export type DeleteQuestionnaireMutationFn = Apollo.MutationFunction<DeleteQuestionnaireMutation, DeleteQuestionnaireMutationVariables>;

/**
 * __useDeleteQuestionnaireMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionnaireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionnaireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionnaireMutation, { data, loading, error }] = useDeleteQuestionnaireMutation({
 *   variables: {
 *      questionnaireSharedId: // value for 'questionnaireSharedId'
 *   },
 * });
 */
export function useDeleteQuestionnaireMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionnaireMutation, DeleteQuestionnaireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionnaireMutation, DeleteQuestionnaireMutationVariables>(DeleteQuestionnaireDocument, options);
      }
export type DeleteQuestionnaireMutationHookResult = ReturnType<typeof useDeleteQuestionnaireMutation>;
export type DeleteQuestionnaireMutationResult = Apollo.MutationResult<DeleteQuestionnaireMutation>;
export type DeleteQuestionnaireMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionnaireMutation, DeleteQuestionnaireMutationVariables>;
export const FetchQuestionnairesDocument = gql`
    query FetchQuestionnaires {
  adminFetchQuestionnaires {
    ... on QuestionnaireSurvey {
      ...SurveyFragment
    }
    ... on QuestionnaireExam {
      ...ExamFragment
    }
    ... on QuestionnaireQuiz {
      ...QuizFragment
    }
  }
}
    ${SurveyFragmentFragmentDoc}
${ExamFragmentFragmentDoc}
${QuizFragmentFragmentDoc}`;

/**
 * __useFetchQuestionnairesQuery__
 *
 * To run a query within a React component, call `useFetchQuestionnairesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchQuestionnairesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchQuestionnairesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchQuestionnairesQuery(baseOptions?: Apollo.QueryHookOptions<FetchQuestionnairesQuery, FetchQuestionnairesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchQuestionnairesQuery, FetchQuestionnairesQueryVariables>(FetchQuestionnairesDocument, options);
      }
export function useFetchQuestionnairesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchQuestionnairesQuery, FetchQuestionnairesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchQuestionnairesQuery, FetchQuestionnairesQueryVariables>(FetchQuestionnairesDocument, options);
        }
export function useFetchQuestionnairesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchQuestionnairesQuery, FetchQuestionnairesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchQuestionnairesQuery, FetchQuestionnairesQueryVariables>(FetchQuestionnairesDocument, options);
        }
export type FetchQuestionnairesQueryHookResult = ReturnType<typeof useFetchQuestionnairesQuery>;
export type FetchQuestionnairesLazyQueryHookResult = ReturnType<typeof useFetchQuestionnairesLazyQuery>;
export type FetchQuestionnairesSuspenseQueryHookResult = ReturnType<typeof useFetchQuestionnairesSuspenseQuery>;
export type FetchQuestionnairesQueryResult = Apollo.QueryResult<FetchQuestionnairesQuery, FetchQuestionnairesQueryVariables>;