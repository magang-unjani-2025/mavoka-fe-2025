"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@/app/components/input";
import Button from "@/app/components/button";

type FormValues = {
  usernameLembaga: string;
  email: string;
  password: string;
};

export default function FormLembaga() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("Data Lembaga:", data);
    alert("Form berhasil dikirim (simulasi)!");
    reset();
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Username"
        placeholder="Username Lembaga"
        type="text"
        {...register("usernameLembaga")}
      />

      <Input
        label="Email"
        placeholder="Email aktif"
        type="email"
        {...register("email")}
      />

      <div>
        <label className="block text-sm text-black mb-1">Kata Sandi</label>
        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Kata Sandi"
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

      <div className="flex items-start text-xs text-[#292D32] font-medium">
        <input type="checkbox" className="mr-2 mt-1" />
        <span>Saya menyetujui syarat & ketentuan yang berlaku</span>
      </div>

      <Button type="submit" className="w-full">
        Daftar
      </Button>

      <p className="text-xs text-center text-gray-600 mt-2">
        Sudah punya akun?{" "}
        <a href="/masuk" className="text-[#0F67B1] font-semibold hover:underline">
          Masuk
        </a>
      </p>
    </form>
  );
}
