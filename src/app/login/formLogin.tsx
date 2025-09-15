"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/app/components/registrasi/input";
import Button from "@/app/components/registrasi/button";
import InputPassword from "@/app/components/registrasi/InputPassword";
import { login } from "@/lib/api-auth";
import { Login } from "@/types/user";

type Role = "siswa" | "sekolah" | "perusahaan" | "lpk" | "admin";

type FormValues = {
  username: string;
  password: string;
  role?: Exclude<Role, "admin">; // role dari select (bukan admin)
};

export default function FormLoginMultiRole({ fixedRole }: { fixedRole?: Role }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function redirectByRole(role: Role) {
    switch (role) {
      case "admin":
        return router.push("/dashboard-admin");
      case "siswa":
        return router.push("/dashboard-siswa");
      case "sekolah":
        return router.push("/dashboard-sekolah");
      case "perusahaan":
        return router.push("/dashboard-perusahaan");
      case "lpk":
        return router.push("/dashboard-lpk");
      default:
        return router.push("/");
    }
  }

  //const onSubmit = async (data: FormValues) => {
  //  // jika fixedRole ada → pakai itu; kalau tidak → pakai dari select
  //  const hintedRole: Role = (fixedRole ?? data.role) as Role;

  //  const payload: Login = {
  //    username: data.username,
  //    password: data.password,
  //    // tetap boleh kirim ke backend kalau kontrak API kamu butuh,
  //    // tapi **server** yang harus memutuskan role final
  //    role: hintedRole as any,
  //  };

  //  try {
  //    setLoading(true);
  //    const res = await login(payload);
  //    // harapkan backend balikan role final yang valid untuk user tsb
  //    const serverRole: Role = res?.data?.role ?? hintedRole;

  //    redirectByRole(serverRole);
  //    reset();
  //  } catch (err: any) {
  //    console.error("Login gagal:", err.response?.data || err.message);
  //    alert("Login gagal. Periksa kembali username, password, dan role Anda.");
  //  } finally {
  //    setLoading(false);
  //  }
  //};

  const onSubmit = async (data: FormValues) => {
  const hintedRole: Role = (fixedRole ?? data.role) as Role;

  const payload: Login = {
    username: data.username,
    password: data.password,
    role: hintedRole as any,
  };

  try {
    setLoading(true);
    const res = await login(payload);

    const d: any = res?.data ?? {};
    // role dari server kalau ada, fallback ke pilihan
    const serverRole: Role = (d.role ?? hintedRole) as Role;
    const token: string | undefined = d.token ?? d.access_token ?? d.jwt;

    // ====== AMBIL ENTITY & ID DARI BERBAGAI BENTUK ======
    // prioritaskan pembungkus umum; terakhir fallback ke `d` (top-level flat)
    const entity: any =
      d.data ??
      d.user ??
      d.profile ??
      d.sekolah ??
      d.siswa ??
      d.perusahaan ??
      d.lpk ??
      d;

    // kandidat id di berbagai nama field
    const idCandidate =
      entity?.id ??
      entity?.sekolah_id ??
      entity?.siswa_id ??
      entity?.perusahaan_id ??
      entity?.lpk_id ??
      d?.id; // kalau top-level flat

    const entityId = Number(idCandidate);

    // ====== SIMPAN AUTH & PROFIL RINGKAS (opsional) ======
    if (token) localStorage.setItem("access_token", token);
    localStorage.setItem("user_role", serverRole);
    // simpan entity yang kita pakai (boleh ganti ke 'user' kalau perlu)
    localStorage.setItem("currentUser", JSON.stringify(entity));

    // bersihkan id lama agar tidak “nyangkut”
    localStorage.removeItem("siswa_id");
    localStorage.removeItem("sekolah_id");
    localStorage.removeItem("perusahaan_id");
    localStorage.removeItem("lpk_id");
    localStorage.removeItem("actor");

    if (Number.isFinite(entityId) && entityId > 0) {
      switch (serverRole) {
        case "siswa":
          localStorage.setItem("siswa_id", String(entityId));
          break;
        case "sekolah":
          localStorage.setItem("sekolah_id", String(entityId));
          break;
        case "perusahaan":
          localStorage.setItem("perusahaan_id", String(entityId));
          break;
        case "lpk":
          localStorage.setItem("lpk_id", String(entityId));
          break;
      }
      // penyimpanan seragam untuk komponen generik
      localStorage.setItem("actor", JSON.stringify({ role: serverRole, id: entityId }));
    } else {
      console.warn("Login OK tapi id tidak ditemukan di respons ini:", d);
    }

    redirectByRole(serverRole);
    reset();
  } catch (err: any) {
    console.error("Login gagal:", err?.response?.data ?? err?.message);
    alert("Login gagal. Periksa kembali username, password, dan role Anda.");
  } finally {
    setLoading(false);
  }
};


  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* selector role hanya tampil jika TIDAK fixed */}
      {!fixedRole && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Masuk sebagai
          </label>
          <select
            {...register("role", { required: "Role wajib dipilih" })}
            className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#0F67B1]"
            defaultValue=""
          >
            <option value="" disabled>
              --Masuk Sebagai--
            </option>
            <option value="siswa">Siswa</option>
            <option value="sekolah">Sekolah</option>
            <option value="perusahaan">Perusahaan</option>
            <option value="lpk">Lembaga Pelatihan</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>
      )}

      <Input
        label="Username"
        placeholder="Masukkan username"
        required
        type="text"
        {...register("username", { required: "Username wajib diisi" })}
      />

      <InputPassword
        label="Kata Sandi"
        placeholder="Masukkan kata sandi"
        register={register("password", { required: "Kata sandi wajib diisi" })}
        error={errors.password?.message}
      />

      <p className="text-xs text-right mt-1">
        <a href="/lupa-kataSandi" className="text-[#0F67B1] hover:underline">
          Lupa Kata Sandi?
        </a>
      </p>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Memproses..." : "Masuk"}
      </Button>

      {!fixedRole && (
        <p className="text-xs text-center text-gray-600 mt-2">
          Belum punya akun?{" "}
          <a href="/registrasi" className="text-[#0F67B1] font-semibold hover:underline text-xs">
            Daftar
          </a>
        </p>
      )}
    </form>
  );
}
