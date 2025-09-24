export type DayLog = {
id: string;
date: string; // ISO yyyy-mm-dd
title?: string;
content?: string;
photoUrl?: string;
};

export type CompanyGrade = {
  id: number;                 // 1..5 tetap
  name: string;               // "Aspek Teknis", dst.
  criteria?: string;          // multiline text (dipisah \n)
  score?: number;             // 0..100
};


export type WeekReport = {
  id: string;
  number: number;
  status: "ongoing" | "done";
  targetDays?: number;
  coverPhotoUrl?: string;
  companyEvaluation?: string;
  logs: any[];

  // NEW: nilai perusahaan per minggu (opsional)
  companyGrades?: CompanyGrade[];
};


export type ReportState = { weeks: WeekReport[] };