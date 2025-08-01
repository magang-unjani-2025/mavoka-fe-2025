"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/app/components/input";
import Button from "@/app/components/button";

type FormValues = {
  username: string;
  password: string;
};

export default function FormLogin() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Dummy data user
  const dummyUsers = [
    { username: "admin", password: "123", role: "admin" },
    { username: "perusahaan", password: "123", role: "perusahaan" },
    { username: "lpk", password: "123", role: "lpk" },
    { username: "sekolah", password: "123", role: "sekolah" },
    { username: "siswa", password: "123", role: "siswa" },
  ];

  const onSubmit = (data: FormValues) => {
    const user = dummyUsers.find(
      (u) => u.username === data.username && u.password === data.password
    );

    if (!user) {
      alert("Username atau password salah");
      return;
    }

    router.push(`/dashboard/${user.role}`);
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Username"
        placeholder="Masukkan username"
        type="text"
        {...register("username")}
      />

      <div>
        <label className="block text-sm text-black mb-1">Password</label>
        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan password"
            className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F67B1]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-600"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Masuk
      </Button>

      <p className="text-xs text-center text-gray-600 mt-2">
        Tidak punya akun?{" "}
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
