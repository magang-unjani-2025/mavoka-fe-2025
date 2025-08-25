export type School = {
  id: number | string;
  name: string;
  address: string;
  type?: string | null;   // "SMK Negeri" | "SMK Swasta" | dsb
  website?: string | null;
  logoUrl: string;
  slug?: string;
};
