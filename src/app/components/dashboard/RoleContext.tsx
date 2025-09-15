"use client";
import { createContext, useContext } from "react";

type Role = "admin" | "perusahaan" | "lpk" | "sekolah" | "siswa";

const RoleContext = createContext<Role | null>(null);

export function RoleProvider({ role, children }: { role: Role; children: React.ReactNode }) {
  return <RoleContext.Provider value={role}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used inside RoleProvider");
  return ctx;
}
