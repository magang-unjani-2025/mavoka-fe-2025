"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@/app/components/registrasi/input";
import Button from "@/app/components/registrasi/button";
import InputPassword from "@/app/components/registrasi/InputPassword";
import SuccesModal from "@/app/components/registrasi/PopupBerhasil";
import { registerSekolah } from "@/lib/api-auth";
import { RegisterSekolah } from "@/types/user";

type FormSekolahValues = {
  npsn: string;
  nama_sekolah: string;
  email: string;
  username: string;
  password: string;
  website: string;
};

export default function FormSekolah() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSekolahValues>();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirectInfo, setRedirectInfo] = useState<{
    email: string;
    role: string;
  } | null>(null);

  const onSubmit = async (data: FormSekolahValues) => {
    const mappedData: RegisterSekolah = {
      npsn: data.npsn,
      nama_sekolah: data.nama_sekolah,
      email: data.email,
      username: data.username,
      password: data.password,
      web_sekolah: data.website,
    };

    try {
      setLoading(true);
      const res = await registerSekolah(mappedData);
      console.log("Respon:", res.data);
      setRedirectInfo({ email: data.email, role: "sekolah" });
      setShowSuccessPopup(true);
      reset();
    } catch (err: any) {
      console.error("Gagal:", err.response?.data || err.message);
      alert("Terjadi kesalahan saat mendaftar sekolah.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Sekolah"
        required
        placeholder="Daftar Sekolah"
        {...register("nama_sekolah", { required: "Nama Sekolah wajib diisi" })}
        error={errors.nama_sekolah?.message}
      />
      <Input
        label="NPSN"
        required
        placeholder="NPSN"
        {...register("npsn", { required: "NPSN wajib diisi" })}
        error={errors.npsn?.message}
      />

      <Input
        label="Email"
        required
        placeholder="Email"
        type="email"
        {...register("email", { required: "Email wajib diisi" })}
        error={errors.email?.message}
      />

      <Input
        label="Website"
        required
        placeholder="Nama Website"
        {...register("website", { required: "Website Sekolah wajib diisi" })}
        error={errors.website?.message}
      />

      <Input
        label="Username"
        required
        placeholder="Username"
        type="text"
        {...register("username")}
      />

      <InputPassword
        label="Kata Sandi"
        register={register("password", { required: "Kata sandi wajib diisi" })}
        error={errors.password?.message}
      />

      {/* <div className="flex items-start text-xs text-[#292D32] font-medium">
        <input type="checkbox" className="mr-2 mb-3" required />
        <span>Saya menyetujui syarat & ketentuan yang berlaku</span>
      </div> */}

      <Button type="submit" className="w-full mb-3" disabled={loading}>
        {loading ? "Mengirim..." : "Daftar"}
      </Button>

      <p className="text-xs text-center text-gray-600 mb-3">
        Sudah punya akun?{" "}
        <a
          href="/login"
          className="text-[#0F67B1] font-semibold hover:underline"
        >
          Masuk
        </a>
      </p>
      {showSuccessPopup && redirectInfo && (
        <SuccesModal
          open={showSuccessPopup}
          title="Berhasil"
          message="Pendaftaran akun berhasil! Silakan periksa email Anda untuk memasukkan kode OTP."
          showCloseIcon 
          onClose={() => {
            setShowSuccessPopup(false);
            window.location.href = `/otp?email=${encodeURIComponent(
              redirectInfo.email
            )}&role=${redirectInfo.role}`;
          }}
        />
      )}
    </form>
  );
}
