"use client";

import { useState } from "react";
import { HiPlus, HiOutlineMinus } from "react-icons/hi";
import { Container } from "@/app/components/Container";

const faqData = [
  {
    question: (
      <p className="text-black font-medium">
        1. Lupa kata sandi bagaimana cara meresetnya?
      </p>
    ),
    answer: (
      <div>
        <p className="text-[#475C8F] font-semibold mb-2">
          Klik Lupa Kata Sandi
        </p>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Masukkan email yang terdaftar</li>
          <li>Periksa email untuk mendapatkan kode OTP</li>
          <li>Masukkan kode OTP, lalu klik Kirim</li>
          <li>
            Masukkan kata sandi baru dan konfirmasi kata sandi. Klik Perbarui Kata Sandi, kemudian login menggunakan kata sandi baru{" "}
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: (
      <p className="text-black font-medium">
        2. Apakah saya dapat melamar lebih dari satu lowongan?
      </p>
    ),
    answer: (
      <p className="text-black font-medium">
        <span className="text-[#475C8F] font-semibold">Ya</span>, Anda memiliki
        kesempatan melamar lima lowongan magang
      </p>
    ),
  },
  {
    question: (
      <p className="text-black font-medium">
        3. Bagaimana jika nama sekolah saya tidak terdapat dalam MAVOKA, apakah saya tidak dapat mendaftar?
      </p>
    ),
    answer: (
      <p className="text-black font-medium">
        <span className="text-[#475C8F] font-semibold">Tidak</span>, Silakan
        melakukan konfirmasi dengan pihak sekolah Anda terlebih dahulu
      </p>
    ),
  },
  {
    question: (
      <p className="text-black font-medium">
        4. Mengapa saya tidak mendapatkan email OTP?
      </p>
    ),
    answer: (
      <p className="text-black font-medium">
        Pastikan email yang Anda masukkan saat pendaftaran sudah benar. Jika
        email yang dimasukkan salah, silakan daftar ulang. Periksa secara
        berkala seluruh folder email, seperti spam dan lain-lain.
      </p>
    ),
  },
  {
    question: (
      <p className="text-black font-medium">
        5. Apakah saya dapat memilih posisi magang luring yang tidak sesuai
        dengan domisili?
      </p>
    ),
    answer: (
      <p className="text-black font-medium">
        <span className="text-[#475C8F] font-semibold">Ya</span>. Namun, seluruh
        biaya yang timbul akan menjadi tanggung jawab peserta magang.
      </p>
    ),
  },
  {
    question: (
      <p className="text-black font-medium">
        6. Apakah posisi magang yang saya pilih harus sesuai dengan jurusan?
      </p>
    ),
    answer: (
      <p className="text-black font-medium">
        <span className="text-[#475C8F] font-semibold">Ya</span>. Untuk dapat
        lolos verifikasi dan seleksi administrasi, jurusan Anda harus sesuai
        dengan posisi magang yang dipilih, sehingga peluang lolos lebih besar.
      </p>
    ),
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-white">
      <Container>
        <h2 className="text-center text-primary font-bold text-lg mb-6">FAQ</h2>

        <div className="space-y-2">
          {faqData.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className={`rounded text-sm transition-all duration-300 ${
                  isOpen ? "bg-white border border-gray-200" : "bg-[#E3E3E3]"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-4 py-3 font-medium text-left shadow-none"
                >
                  {item.question}
                  {isOpen ? <HiOutlineMinus size={18} /> : <HiPlus size={18} />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
