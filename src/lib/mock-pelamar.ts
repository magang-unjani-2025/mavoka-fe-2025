"use client";
import { useEffect, useMemo, useState } from "react";
import type {
  Applicant,
  ApplicantStatus,
  InterviewPayload,
  Position,
} from "@/types/pelamar";

/* =========================
   Toggle sumber data
   (ubah ke true saat endpoint BE siap)
========================= */
const USE_API = process.env.NEXT_PUBLIC_USE_API === "true";

/* =========================
   MOCK DATA (sementara)
========================= */
let _positions: Position[] = [
  { id: "p1", name: "administrasi perkantoran" },
  { id: "p2", name: "desain grafis" },
  { id: "p3", name: "front-end developer" },
];

let _applicants: Applicant[] = Array.from({ length: 37 }).map((_, i) => ({
  id: String(i + 1),
  nama: i % 3 === 0 ? "lisa mariana" : i % 3 === 1 ? "budi setiawan" : "siti amalia",
  posisiId: _positions[i % _positions.length].id,
  posisi: _positions[i % _positions.length].name,
  asalSekolah: "SMKN 1 YOGYAKARTA",
  jurusan: "otomatisasi dan tata kelola perkantoran",
  email: (i % 3 === 0 ? "lisa" : i % 3 === 1 ? "budi" : "siti") + "@gmail.com",
  cvUrl: "/files/sample-cv.pdf",
  transkripUrl: "/files/sample-transkrip.pdf",
  status: (["lamar", "wawancara", "diterima", "ditolak"] as ApplicantStatus[])[i % 4],
}));
const _interviewNotes: Record<string, InterviewPayload> = {};

const mock = {
  async getPositions(): Promise<Position[]> {
    return JSON.parse(JSON.stringify(_positions));
  },
  async getApplicants(): Promise<Applicant[]> {
    return JSON.parse(JSON.stringify(_applicants));
  },
  async updateStatus(id: string, status: ApplicantStatus): Promise<Applicant | null> {
    const i = _applicants.findIndex((a) => a.id === id);
    if (i === -1) return null;
    _applicants[i].status = status;
    return JSON.parse(JSON.stringify(_applicants[i]));
  },
  async scheduleInterview(id: string, payload: InterviewPayload): Promise<Applicant | null> {
    const updated = await mock.updateStatus(id, "wawancara");
    if (!updated) return null;
    _interviewNotes[id] = payload;
    return updated;
  },
};

/* =========================
   API adapter (isi endpoint BE kamu di sini)
   Contoh pakai fetch biar nol-dependency.
========================= */
const api = {
  async getPositions(): Promise<Position[]> {
    const r = await fetch("/api/positions", { credentials: "include" });
    if (!r.ok) throw new Error("Failed to fetch positions");
    return r.json();
  },
  async getApplicants(): Promise<Applicant[]> {
    const r = await fetch("/api/applicants", { credentials: "include" });
    if (!r.ok) throw new Error("Failed to fetch applicants");
    return r.json();
  },
  async updateStatus(id: string, status: ApplicantStatus): Promise<Applicant | null> {
    const r = await fetch(`/api/applicants/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ status }),
    });
    if (!r.ok) return null;
    return r.json();
  },
  async scheduleInterview(id: string, payload: InterviewPayload): Promise<Applicant | null> {
    const r = await fetch(`/api/applicants/${id}/interview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    });
    if (!r.ok) return null;
    return r.json();
  },
};

const ds = USE_API ? api : mock;

/* =========================
   Hook utama
========================= */
export function useApplicants() {
  const [allApplicants, setAllApplicants] = useState<Applicant[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);

  // filter & paging
  const [posisiId, setPosisiId] = useState("");
  const [status, setStatus] = useState<ApplicantStatus | "">("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const [pos, apps] = await Promise.all([ds.getPositions(), ds.getApplicants()]);
        setPositions(pos);
        setAllApplicants(apps);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(
    () => allApplicants.filter((a) => (!posisiId || a.posisiId === posisiId) && (!status || a.status === status)),
    [allApplicants, posisiId, status]
  );

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const pageSafe = Math.min(page, totalPages);
  const items = useMemo(() => {
    const start = (pageSafe - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, pageSafe, perPage]);

  async function onInterview(id: string, payload: InterviewPayload) {
    const updated = await ds.scheduleInterview(id, payload);
    if (updated) setAllApplicants((prev) => prev.map((a) => (a.id === id ? updated : a)));
  }
  async function onAccept(id: string) {
    const updated = await ds.updateStatus(id, "diterima");
    if (updated) setAllApplicants((prev) => prev.map((a) => (a.id === id ? updated : a)));
  }
  async function onReject(id: string) {
    const updated = await ds.updateStatus(id, "ditolak");
    if (updated) setAllApplicants((prev) => prev.map((a) => (a.id === id ? updated : a)));
  }

  return {
    loading,
    positions,
    items,
    total,
    page: pageSafe,
    perPage,
    totalPages,
    setPage,
    setPerPage,
    posisiId,
    status,
    setFilterPosisi: (id: string) => {
      setPosisiId(id);
      setPage(1);
    },
    setFilterStatus: (s: ApplicantStatus | "") => {
      setStatus(s);
      setPage(1);
    },
    onInterview,
    onAccept,
    onReject,
  };
}

// --- Helper untuk halaman detail ---
export async function fetchApplicantById(id: string) {
  // pakai data source yang sama (mock/API)
  const list = await (process.env.NEXT_PUBLIC_USE_API === "true" ? api.getApplicants() : mock.getApplicants());
  return list.find((a) => a.id === id) ?? null;
}

export async function updateApplicantStatus(id: string, status: ApplicantStatus) {
  const res = await (process.env.NEXT_PUBLIC_USE_API === "true"
    ? api.updateStatus(id, status)
    : mock.updateStatus(id, status));
  return res;
}

