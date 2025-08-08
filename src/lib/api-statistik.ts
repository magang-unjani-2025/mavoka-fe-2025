import axios from "axios";
const BASE_URL = "http://localhost:8000/api/statistik";

export async function StatistikPerusahaan() {
  const res = await axios.get(`${BASE_URL}/perusahaan`);
  return res.data;
}

export async function StatistikLpk() {
  const res = await axios.get(`${BASE_URL}/lpk`);
  return res.data;
}

export async function StatistikSekolah() {
  const res = await axios.get(`${BASE_URL}/sekolah`);
  return res.data;
}

export async function StatistikSiswa() {
  const res = await axios.get(`${BASE_URL}/siswa`);
  return res.data;
}

export async function StatistikPerusahaanBulanan() {
  const res = await axios.get(`${BASE_URL}/bulanan/perusahaan`);
  return res.data;
}

export async function StatistikLpkBulanan() {
  const res = await axios.get(`${BASE_URL}/bulanan/lpk`);
  return res.data;
}

export async function StatistikSekolahBulanan() {
  const res = await axios.get(`${BASE_URL}/bulanan/sekolah`);
  return res.data;
}

export async function StatistikSiswaBulanan() {
  const res = await axios.get(`${BASE_URL}/bulanan/siswa`);
  return res.data;
}