
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
  dimension: string;
}

export interface ScenarioQuestion {
  id: string;
  title: string;
  text: string;
  options: {
    id: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export interface SurveyState {
  respondent: RespondentData;
  jobCraftingAnswers: Record<string, LikertValue>;
  aiImplementationAnswers: Record<string, LikertValue>;
  aiLiteracyAnswers: Record<string, LikertValue>;
  performanceAnswers: Record<string, { choice: 'A' | 'B' | 'C' | 'D'; confidence: number }>;
}

export enum Step {
  Welcome,
  RespondentInfo,
  JobCraftingIntro,
  JobCrafting,
  AiImplementationIntro,
  AiImplementation,
  AiLiteracyIntro,
  AiLiteracy,
  PerformanceBasedIntro,
  PerformanceBased,
  Summary
}
