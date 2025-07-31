//"use client";

//import { useForm } from "react-hook-form";
//import { useState } from "react";

//type FormValues = {
//  username: string;
//  namaLengkap: string;
//  nisn: string;
//  email: string;
//  password: string;
//};

//export default function FormSMK() {
//  const { register, handleSubmit, reset } = useForm<FormValues>();
//  const [showPassword, setShowPassword] = useState(false);

//  const onSubmit = (data: FormValues) => {
//    console.log("Data SMK:", data);
//    alert("Form berhasil dikirim (simulasi)!");
//    reset();
//  };

//  return (
//    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
//      <div>
//        <label className="block text-sm text-black mb-1">Username</label>
//        <input
//          {...register("username")}
//          type="text"
//          placeholder="Username"
//          className="w-full border rounded-md px-3 py-2 text-sm"
//        />
//      </div>

//      <div>
//        <label className="block text-sm text-black mb-1">Nama Lengkap</label>
//        <input
//          {...register("namaLengkap")}
//          type="text"
//          placeholder="Nama Lengkap"
//          className="w-full border rounded-md px-3 py-2 text-sm"
//        />
//      </div>

//      <div>
//        <label className="block text-sm text-black mb-1">NISN</label>
//        <input
//          {...register("nisn")}
//          type="text"
//          placeholder="NISN"
//          className="w-full border rounded-md px-3 py-2 text-sm"
//        />
//      </div>

//      <div>
//        <label className="block text-sm text-black mb-1">Email</label>
//        <input
//          {...register("email")}
//          type="email"
//          placeholder="Email"
//          className="w-full border rounded-md px-3 py-2 text-sm"
//        />
//      </div>

//      <div className="mb-4">
//        <label className="block text-sm text-black mb-1">Kata Sandi</label>
//        <div className="relative">
//          <input
//            {...register("password")}
//            type={showPassword ? "text" : "password"}
//            placeholder="Kata Sandi"
//            className="w-full border rounded-md px-3 py-2 text-sm pr-10"
//          />
//          <button
//            type="button"
//            onClick={() => setShowPassword(!showPassword)}
//            className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-600"
//          >
//            {showPassword ? "🙈" : "👁️"}
//          </button>
//        </div>
//      </div>

//      <div className="flex items-start text-xs text-[#292D32] font-medium">
//        <input type="checkbox" className="mr-2 mt-1" />
//        <span>Saya menyetujui syarat & ketentuan yang berlaku</span>
//      </div>

//      <button
//        type="submit"
//        className="w-full bg-[#0F67B1] hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm"
//      >
//        Daftar
//      </button>
//    </form>
//  );
//}

"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@/app/components/input";
import Select from "@/app/components/button";
import ComboAsalSekolah from "@/app/components/comboAsalSekolah";
import Button from "@/app/components/button";

type FormValues = {
  username: string;
  asalSekolah: string;
  nisn: string;
  email: string;
  password: string;
};

export default function FormSMK() {
  const { register, handleSubmit, reset, setValue } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("Data SMK:", data);
    alert("Form berhasil dikirim (simulasi)!");
    reset();
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      {/*<div>
        <label className="block text-sm text-black mb-1">Asal Sekolah</label>
        <select
          {...register("asalSekolah")}
          className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F67B1]"
        >
          <option value="">Pilih sekolah</option>
          <option value="SMK Negeri 1">SMK Negeri 1</option>
          <option value="SMK Negeri 2">SMK Negeri 2</option>
          <option value="SMK Swasta">SMK Swasta</option>
        </select>
      </div>*/}

      <ComboAsalSekolah register={register} setValue={setValue} />

      <Input
        label="Username"
        placeholder="Username"
        type="text"
        {...register("username")}
      />

      <Input
        label="NISN"
        placeholder="NISN"
        type="text"
        {...register("nisn")}
      />

      <Input
        label="Email"
        placeholder="Email"
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
        <a
          href="/masuk"
          className="text-[#0F67B1] font-semibold hover:underline"
        >
          Masuk
        </a>
      </p>
    </form>
  );
}
