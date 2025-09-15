export type DayLog = {
id: string;
date: string; // ISO yyyy-mm-dd
title?: string;
content?: string;
photoUrl?: string;
};


export type WeekReport = {
id: string; // uuid
number: number; // Minggu ke-
logs: DayLog[];
status: 'ongoing' | 'done';
targetDays?: 5 | 6 | 7; // set saat selesai
coverPhotoUrl?: string; // foto entri terakhir (opsional)
};


export type ReportState = { weeks: WeekReport[] };