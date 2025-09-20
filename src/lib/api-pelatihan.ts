// lib/api-pelatihan.ts
import axios, { AxiosInstance } from "axios";
import { PelatihanFormValues, Pelatihan, Batch } from "@/types/pelatihan";

const API_ROOT = `${process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000"}/api`;

function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("access_token"); // sesuai yg ada di localStorage
}

function client(): AxiosInstance {
  const token = getToken();
  return axios.create({
    baseURL: API_ROOT,
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}

type CreateOrUpdateOpts = { publish?: boolean };

// === helpers ===
function computeBatchStatus(b: { start?: string; end?: string }) {
  const end = b.end ? new Date(b.end) : null;
  if (end && end.getTime() < Date.now()) return "selesai";
  return "sedang_berjalan";
}

// FE -> BE payload
function toApiPayload(v: PelatihanFormValues, opts?: CreateOrUpdateOpts) {
  const capaianArr = (v.capaian || []).map((s) => s.trim()).filter(Boolean);
  const payload: any = {
    nama_pelatihan: v.namaPelatihan,
    deskripsi: v.deskripsi,
    kategori: v.kategori || null,
    capaian_pembelajaran: JSON.stringify(capaianArr),
    detail: null,
  };
  // KUNCI: tandai terpasang dengan history_batch = []
  if (opts?.publish === true) payload.history_batch = [];
  // kalau draft: JANGAN kirim history_batch sama sekali (biarkan null)
  return payload;
}


// BE row -> FE type
function fromApiRow(row: any): Pelatihan {
  // parse capaian
  let capaianStr = "";
  try {
    const parsed = JSON.parse(row.capaian_pembelajaran ?? "[]");
    capaianStr = Array.isArray(parsed) ? parsed.join("; ") : String(row.capaian_pembelajaran ?? "");
  } catch {
    capaianStr = String(row.capaian_pembelajaran ?? "");
  }

  // map batches (jika ada relasi)
  const batches: Batch[] = Array.isArray(row.batches)
    ? row.batches.map((b: any, i: number) => ({
        id: Number(b.id ?? i),
        name: b.name ?? b.nama ?? `Batch ${i + 1}`,
        start: b.start ?? b.mulai ?? b.start_date ?? null,
        end: b.end ?? b.selesai ?? b.end_date ?? null,
        status: computeBatchStatus({
          start: b.start ?? b.mulai ?? b.start_date,
          end: b.end ?? b.selesai ?? b.end_date,
        }),
      }))
    : [];

  return {
    id: Number(row.id),
    namaPelatihan: row.nama_pelatihan ?? "",
    deskripsi: row.deskripsi ?? "",
    kategori: row.kategori ?? "",
    capaian: capaianStr,
    batches,
    historyBatch: row.history_batch ?? null,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

// === endpoints ===
export async function createPelatihan(values: PelatihanFormValues, opts?: CreateOrUpdateOpts) {
  const payload = toApiPayload(values, opts);
  const { data } = await client().post(`/pelatihan/create`, payload);
  return data;
}

export async function getPelatihanSaya(): Promise<Pelatihan[]> {
  const { data } = await client().get(`/pelatihan/mine`);
  console.log("🔎 Raw response dari /pelatihan/mine:", data);

  const arr = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
  const mapped = arr.map(fromApiRow);
  console.log("✅ Hasil mapping ke Pelatihan[]:", mapped);

  return mapped;
}


export async function updatePelatihan(
  id: number,
  values: PelatihanFormValues,
  opts?: CreateOrUpdateOpts
) {
  const payload = toApiPayload(values, opts);
  const { data } = await client().put(`/pelatihan/update/${id}`, payload);
  return data;
}

export async function deletePelatihan(id: number) {
  const { data } = await client().delete(`/pelatihan/delete/${id}`);
  return data;
}
