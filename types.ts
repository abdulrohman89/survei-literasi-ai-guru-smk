// types.ts

// 1. Definisikan Tahapan Kuesioner
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

// 2. Skala Likert 1-5
export type LikertValue = 1 | 2 | 3 | 4 | 5;

// 3. Data Identitas Responden
export interface RespondentData {
  fullName: string;
  schoolName: string;
  regency: string;
  phoneNumber: string;
  subject: string;
  age: string;
  teachingExperience: string;
}

// 4. Struktur Soal Standar
export interface Question {
  id: string;
  text: string;
  dimension?: string;
}

// 5. Struktur Soal Skenario (Performance Test)
export interface ScenarioQuestion extends Question {
  title: string;
  options: { 
    id: string; 
    text: string; 
  }[];
  correctAnswer: string;
}

// 6. State Utama Aplikasi
export interface SurveyState {
  respondent: RespondentData;
  jobCraftingAnswers: Record<string, LikertValue>;
  aiImplementationAnswers: Record<string, LikertValue>;
  aiLiteracyAnswers: Record<string, LikertValue>;
  performanceAnswers: Record<string, {
    choice: string;
    confidence: number;
  }>;
}