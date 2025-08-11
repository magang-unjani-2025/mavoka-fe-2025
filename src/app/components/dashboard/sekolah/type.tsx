export type MonthKey =
  | "Jan" | "Feb" | "Mar" | "Apr" | "Mei" | "Jun" | "Jul" | "Agt" | "Sep" | "Okt" | "Nov" | "Des";

export type MonthlyStat = {
  month: MonthKey;
  aktif: number;         // Pemagang Aktif
  terkendala: number;    // Terkendala
  pelamarAktif: number;  // Pelamar Aktif
  terdaftar: number;     // Terdaftar
};

export type YearlyData = {
  year: number;
  points: MonthlyStat[];
};
