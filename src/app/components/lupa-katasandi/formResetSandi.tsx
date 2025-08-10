"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "@/app/components/registrasi/button";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";
import InputPassword from "@/app/components/registrasi/InputPassword"; // <- path komponenmu
import React from "react";

type FormValues = {
  password: string;
  confirm: string;
};

export default function FormResetPassword() {
  const router = useRouter();
  const params = useSearchParams();
  // kalau suatu saat perlu email untuk call API:
  const email = params.get("email") ?? "";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [open, setOpen] = React.useState(false);

  const onSubmit = async (values: FormValues) => {
    // MOCK – belum panggil endpoint, hanya simulasi
    await new Promise((r) => setTimeout(r, 800));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    router.replace("/login");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-2xl font-semibold text-center text-black">
          Kata Sandi Baru
        </h2>
        <p className="text-sm text-center text-gray-400">
          Silahkan buat kata sandi baru untuk akun anda
        </p>

        {/* Password baru */}
        <InputPassword
          label="Masukan Kata Sandi Baru"
          placeholder="Kata Sandi Baru"
          register={register("password", {
            required: "Kata sandi wajib diisi",
            minLength: {
              value: 6,
              message: "Minimal 6 karakter",
            },
          })}
          error={errors.password?.message}
        />

        {/* Konfirmasi password */}
        <InputPassword
          label="Konfirmasi Kata Sandi"
          placeholder="Ulangi Kata Sandi"
          register={register("confirm", {
            required: "Konfirmasi wajib diisi",
            validate: (v) =>
              v === watch("password") || "Konfirmasi kata sandi tidak sama",
          })}
          error={errors.confirm?.message}
        />

        <Button
          type="submit"
          className="w-full rounded-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Memproses..." : "Perbaharui Kata Sandi"}
        </Button>
      </form>

      <SuccessModal
        open={open}
        title="Berhasil"
        message={<>Kata sandi Anda berhasil diperbarui!</>}
        primaryText="Lanjutkan" // 👉 tombol muncul
        onClose={handleClose} // klik tombol → router.replace('/login')
      />
    </>
  );
}
