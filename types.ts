export enum Step {
  Welcome = 'WELCOME',
  RespondentInfo = 'RESPONDENT_INFO',
  JobCraftingIntro = 'JOB_CRAFTING_INTRO',
  JobCrafting = 'JOB_CRAFTING',
  AiImplementationIntro = 'AI_IMPLEMENTATION_INTRO',
  AiImplementation = 'AI_IMPLEMENTATION',
  AiLiteracyIntro = 'AI_LITERACY_INTRO',
  AiLiteracy = 'AI_LITERACY',
  PerformanceBasedIntro = 'PERFORMANCE_BASED_INTRO',
  PerformanceBased = 'PERFORMANCE_BASED',
  Summary = 'SUMMARY'
}

export type LikertValue = 1 | 2 | 3 | 4 | 5;

export interface RespondentData {
  fullName: string;
  schoolName: string;
  regency: string;
  phoneNumber: string;
  subject: string;
  age: string;
  teachingExperience: string;
}

export interface Question {
  id: string;
  text: string;
  dimension?: string;
}

export interface ScenarioQuestion extends Question {
  title: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
}

export interface SurveyState {
  respondent: RespondentData;
  jobCraftingAnswers: Record<string, LikertValue>;
  aiImplementationAnswers: Record<string, LikertValue>;
  aiLiteracyAnswers: Record<string, LikertValue>;
  performanceAnswers: Record<string, any>; // Menggunakan any sementara agar tidak bentrok
}