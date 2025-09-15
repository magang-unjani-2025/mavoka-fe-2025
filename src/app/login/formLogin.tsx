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
  role?: Exclude<Role, "admin">;
};

export default function FormLoginMultiRole({
  fixedRole,
}: {
  fixedRole?: Role;
}) {
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

      const token = res.data.token;
      const user = res.data.user;
      const serverRole: Role = res?.data?.role ?? hintedRole;

      const normalizedUser = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: serverRole,
        name:
          user.nama_sekolah ||
          user.nama_perusahaan ||
          user.nama_siswa ||
          user.nama_lpk ||
          user.username,
        avatar:
          user.logo_perusahaan || user.foto_siswa || "/img/default-avatar.png",
      };

      // simpan ke localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(normalizedUser));

      if (serverRole === "admin") {
        redirectByRole(serverRole);
      } else {
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
            <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
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
          <a
            href="/registrasi"
            className="text-[#0F67B1] font-semibold hover:underline text-xs"
          >
            Daftar
          </a>
        </p>
      )}
    </form>
  );
}
