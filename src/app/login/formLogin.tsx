"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/app/components/registrasi/input";
import Button from "@/app/components/registrasi/button";
import InputPassword from "@/app/components/registrasi/InputPassword";
import { login } from "@/lib/api-auth";
import { Login } from "@/types/user";

type FormValues = {
  username: string;
  password: string;
  role: "siswa" | "sekolah" | "perusahaan" | "lpk";
};

export default function FormLoginMultiRole() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [redirectInfo, setRedirectInfo] = useState<{
    role: string;
  } | null>(null);

  const onSubmit = async (data: FormValues) => {
    const mappedData: Login = {
      username: data.username,
      password: data.password,
      role: data.role,
    };

    try {
      setLoading(true);
      const res = await login(mappedData);
      console.log("Login berhasil:", res.data);

      switch (data.role) {
        case "siswa":
          router.push("/dashboard-siswa");
          break;
        case "sekolah":
          router.push("/dashboard-sekolah");
          break;
        case "perusahaan":
          router.push("/dashboard-perusahaan");
          break;
        case "lpk":
          router.push("/dashboard-lpk");
          break;
        default:
          router.push("/");
      }

      reset();
    } catch (err: any) {
      console.error("Login gagal:", err.response?.data || err.message);
      alert("Login gagal. Periksa kembali username, password, dan role Anda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Masuk sebagai
        </label>
        <select
          {...register("role", { required: "Role wajib dipilih" })}
          className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#0F67B1]"
        >
          <option>--Masuk Sebagai--</option>
          <option value="siswa">Siswa</option>
          <option value="sekolah">Sekolah</option>
          <option value="perusahaan">Perusahaan</option>
          <option value="lpk">Lembaga Pelatihan</option>
        </select>
        {errors.role && (
          <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
        )}
      </div>

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


      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Memproses..." : "Masuk"}
      </Button>

      <p className="text-xs text-center text-gray-600 mt-2">
        Belum punya akun?{" "}
        <a
          href="/registrasi"
          className="text-[#0F67B1] font-semibold hover:underline"
        >
          Daftar
        </a>
      </p>
    </form>
  );
}
