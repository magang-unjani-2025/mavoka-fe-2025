"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@/app/components/registrasi/input";
import Button from "@/app/components/registrasi/button";
import InputPassword from "@/app/components/registrasi/InputPassword";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";
import { registerLembaga } from "@/lib/api-auth";
import { RegisterLembaga } from "@/types/user";

type FormValues = {
  username: string;
  email: string;
  password: string;
  nama_lembaga: string;
  bidang_pelatihan: string;
  web_lembaga: string;
};

export default function FormLembaga() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirectInfo, setRedirectInfo] = useState<{
    email: string;
    role: string;
  } | null>(null);

  const onSubmit = async (data: FormValues) => {
    const mappedData: RegisterLembaga = {
      username: data.username,
      email: data.email,
      password: data.password,
      nama_lembaga: data.nama_lembaga,
      bidang_pelatihan: data.bidang_pelatihan,
      web_lembaga: data.web_lembaga,
    };

    try {
      setLoading(true);
      const res = await registerLembaga(mappedData);
      console.log("Respon:", res.data);
      setRedirectInfo({ email: data.email, role: "lpk" });
      setShowSuccessPopup(true);
      reset();
    } catch (err: any) {
      console.error("Gagal:", err.response?.data || err.message);
      alert("Terjadi kesalahan saat mendaftar lembaga.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nama Lembaga Pelatihan"
          placeholder="Nama Lembaga Pelatihan"
          required
          type="text"
          {...register("nama_lembaga", {
            required: "Nama lembaga wajib diisi",
          })}
          error={errors.nama_lembaga?.message}
        />

        <Input
          label="Bidang Pelatihan"
          placeholder="Bidang Pelatihan"
          required
          type="text"
          {...register("bidang_pelatihan", {
            required: "Bidang pelatihan wajib diisi",
          })}
          error={errors.bidang_pelatihan?.message}
        />

        <Input
          label="Email"
          placeholder="Email aktif"
          required
          type="email"
          {...register("email", { required: "Email wajib diisi" })}
          error={errors.email?.message}
        />

        <Input
          label="Website Lembaga"
          placeholder="Website Lembaga"
          required
          type="text"
          {...register("web_lembaga", { required: "Website wajib diisi" })}
          error={errors.web_lembaga?.message}
        />

        <Input
          label="Username"
          placeholder="Username Lembaga"
          required
          {...register("username", { required: "Username wajib diisi" })}
          error={errors.username?.message}
        />

        <InputPassword
          label="Kata Sandi"
          placeholder="Masukkan kata sandi"
          register={register("password", {
            required: "Kata sandi wajib diisi",
          })}
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
    </>
  );
}
