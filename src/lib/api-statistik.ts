import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
API_BASE_URL = `${API_BASE_URL}/api/statistik`;

export async function StatistikPerusahaan() {
  const res = await axios.get(`${API_BASE_URL}/perusahaan`);
  return res.data;
}

export async function StatistikLpk() {
  const res = await axios.get(`${API_BASE_URL}/lpk`);
  return res.data;
}

export async function StatistikSekolah() {
  const res = await axios.get(`${API_BASE_URL}/sekolah`);
  return res.data;
}

export async function StatistikSiswa() {
  const res = await axios.get(`${API_BASE_URL}/siswa`);
  return res.data;
}

export async function StatistikPerusahaanBulanan() {
  const res = await axios.get(`${API_BASE_URL}/bulanan/perusahaan`);
  return res.data;
}

export async function StatistikLpkBulanan() {
  const res = await axios.get(`${API_BASE_URL}/bulanan/lpk`);
  return res.data;
}

export async function StatistikSekolahBulanan() {
  const res = await axios.get(`${API_BASE_URL}/bulanan/sekolah`);
  return res.data;
}

export async function StatistikSiswaBulanan() {
  const res = await axios.get(`${API_BASE_URL}/bulanan/siswa`);
  return res.data;
}
