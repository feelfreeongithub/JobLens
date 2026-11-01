// Shared TypeScript types for the whole app.
// We'll store these in the database from Day 2.

export type SkillLevel = "beginner" | "intermediate" | "advanced";

export interface Skill {
  name: string; // e.g. "React"
  level: SkillLevel;
  years: number; // e.g. 3.5
}

export interface AnalysisResult {
  jobTitle: string;
  company: string;
  matchScore: number; // 0–100
  matchedSkills: string[];
  missingSkills: string[];
  summary: string;
}
