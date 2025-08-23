"use client";

import AccordionItem from "./dropdownMendaftar";
import { Container } from "@/app/components/Container";
import Image from "next/image";

export function CaraMendaftar() {
  return (
    <section id="caradaftar" className="py-12">
      <Container>
        <h2 className="text-center text-[#0061AF] mb-6">Cara Mendaftar Akun</h2>

        <div className="flex flex-col tablet:flex-row gap-4">
          {/* Kolom kiri */}
          <div className="flex flex-col gap-4 flex-1">
            <AccordionItem
              title="1. Masuk ke landing page klik daftar"
              className="min-h-[72px]"
              content={
                <div className="bg-gray-100 p-2 rounded">
                  <Image
                    src="/img/cara-daftar/cara-1.png"
                    alt="Langkah 1"
                    width={505}
                    height={183}
                    className="rounded"
                  />
                </div>
              }
            />
            <AccordionItem
              title="2. Isi form pendaftaran lalu klik daftar"
              className="min-h-[72px]"
              content={
                <div className="bg-gray-100 p-2 rounded">
                  <Image
                    src="/img/cara-daftar/cara-2.png"
                    alt="Langkah 2"
                    width={505}
                    height={273}
                    className="rounded"
                  />
                </div>
              }
            />
            <AccordionItem
              title="3. Lihat email OTP terkirim jika tidak terdapat pesan masuk dilahkan periksa di spam"
              className="min-h-[72px]"
              content={
                <div className="bg-gray-100 p-2 rounded">
                  <Image
                    src="/img/cara-daftar/cara-3-1.png"
                    alt="Langkah 3"
                    width={505}
                    height={200}
                    className="rounded"
                  />
                  <Image
                    src="/img/cara-daftar/cara-3-2.png"
                    alt="Langkah 3"
                    width={505}
                    height={273}
                    className="rounded"
                  />
                </div>
              }
            />
          </div>

          {/* Kolom kanan */}
          <div className="flex flex-col gap-4 flex-1">
            <AccordionItem
              title="4. Masukkan OTP lalu klik kirim"
              className="min-h-[72px]"
              content={
                <div className="bg-gray-100 p-2 rounded">
                  <Image
                    src="/img/cara-daftar/cara-4.png"
                    alt="Langkah 4"
                    width={500}
                    height={259}
                    className="rounded"
                  />
                </div>
              }
            />
            <AccordionItem
              title="5. Pastikan sudah mendapatkan email pendaftaran akun berhasil"
              className="min-h-[72px]"
              content={
                <div className="bg-gray-100 p-2 rounded">
                  <Image
                    src="/img/cara-daftar/cara-5.png"
                    alt="Langkah 5"
                    width={500}
                    height={259}
                    className="rounded"
                  />
                </div>
              }
            />
            <AccordionItem
              title="6. Tunggu email verifikasi akun untuk dapat login ke akun Anda"
              className="min-h-[72px]"
              content={
                <div className="bg-gray-100 p-2 rounded">
                  <Image
                    src="/img/cara-daftar/cara-6.png"
                    alt="Langkah 6"
                    width={500}
                    height={259}
                    className="rounded"
                  />
                </div>
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
