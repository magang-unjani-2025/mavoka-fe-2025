"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@/app/components/registrasi/input";
import Button from "@/app/components/registrasi/button";
import InputPassword from "@/app/components/registrasi/InputPassword";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";
import { registerPerusahaan } from "@/lib/api-auth";
import { RegisterPerusahaan } from "@/types/user";

type FormPerusahaanValues = {
  nama_perusahaan: string;
  email: string;
  username: string;
  password: string;
  bidang_usaha: string;
  web_perusahaan: string;
};

export default function FormPerusahaan() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormPerusahaanValues>();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirectInfo, setRedirectInfo] = useState<{
    email: string;
    role: string;
  } | null>(null);

  const onSubmit = async (data: FormPerusahaanValues) => {
    const mappedData: RegisterPerusahaan = {
      nama_perusahaan: data.nama_perusahaan,
      email: data.email,
      username: data.username,
      password: data.password,
      bidang_usaha: data.bidang_usaha,
      web_perusahaan: data.web_perusahaan,
    };

    try {
      setLoading(true);
      const res = await registerPerusahaan(mappedData);
      console.log("Respon:", res.data);
      setRedirectInfo({ email: data.email, role: "perusahaan" });
      setShowSuccessPopup(true);
      reset();
    } catch (err: any) {
      console.error("Gagal:", err.response?.data || err.message);
      alert("Terjadi kesalahan saat mendaftar perusahaan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nama Perusahaan"
        placeholder="Nama Perusahaan"
        required
        type="text"
        {...register("nama_perusahaan", {
          required: "Nama perusahaan wajib diisi",
        })}
        error={errors.nama_perusahaan?.message}
      />

      <Input
        label="Jenis Bidang Usaha"
        placeholder="Bidang Usaha"
        required
        type="text"
        {...register("bidang_usaha", { required: "Bidang usaha wajib diisi" })}
        error={errors.bidang_usaha?.message}
      />

      <Input
        label="Email"
        placeholder="Email"
        required
        type="email"
        {...register("email", { required: "Email wajib diisi" })}
        error={errors.email?.message}
      />

      <Input
        label="Website"
        placeholder="Nama Website"
        required
        type="text"
        {...register("web_perusahaan", { required: "Website wajib diisi" })}
        error={errors.web_perusahaan?.message}
      />

      <Input
        label="Username"
        placeholder="Username"
        required
        {...register("username", { required: "Username wajib diisi" })}
        error={errors.username?.message}
      />

      <InputPassword
        label="Kata Sandi"
        placeholder="Masukkan kata sandi"
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
        <SuccessModal
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
