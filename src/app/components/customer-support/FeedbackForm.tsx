"use client";
import { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Pesan berhasil dikirim!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-xl p-6 mt-8 shadow-md">
      <h2 className="text-lg font-semibold mb-2">Kirim Pesan Masukan</h2>
      <p className="text-sm text-gray-600 mb-4">
        Pesan yang anda kirim sangat berarti untuk pengembangan layanan MAVOKA! Terima Kasih
      </p>
      <div className="space-y-4">
        <input name="name" placeholder="Nama Lengkap" value={formData.name} onChange={handleChange} className="w-full border rounded p-2 text-xs" />
        <div className="flex gap-4">
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-1/2 border rounded p-2 text-xs" />
          <input name="phone" placeholder="Nomor Handphone" value={formData.phone} onChange={handleChange} className="w-1/2 border rounded p-2 text-xs" />
        </div>
        <textarea name="message" placeholder="Pesan" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 text-xs" rows={4}></textarea>
        <button type="submit" className="text-white px-4 py-2 rounded bg-[#0F67B1]">Kirim Pesan</button>
      </div>
    </form>
  );
}