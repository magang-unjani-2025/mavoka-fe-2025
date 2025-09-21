"use client";

import HeaderHome from "@/app/components/homePage/headerHomepage";
import "aos/dist/aos.css";
import Footer from "@/app/components/homePage/footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSchoolById } from "@/services/sekolah";
import { School } from "@/types/school";
import DetailDescription from "@/app/components/homePage/detail-role/DetailDescription";
import DetailHeader from "@/app/components/homePage/detail-role/DetailHeader";
import KompetensiKeahlian from "@/app/components/homePage/listSekolah/detail-sekolah/KompetensiKeahlian";
import { Container } from "@/app/components/Container";

export default function DetailSekolahPage() {
  const { id } = useParams();
  const [sekolah, setSekolah] = useState<School | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await getSchoolById(id as string);
        setSekolah(data);
      } catch (error) {
        console.error("Gagal fetch data Sekolah:", error);
        setSekolah(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!sekolah)
    return <p className="text-center py-10">Data sekolah tidak ditemukan</p>;

  return (
    <>
      <HeaderHome />
      <main>
        <Container className="py-6">
          <DetailHeader
            name={sekolah.name}
            logo={sekolah.logoUrl || "/img/sejarah-mavoka.png"}
          />
          <DetailDescription
            type="sekolah"
            email={sekolah.email ?? "-"}
            address={sekolah.address ?? "-"}
            npsn={sekolah.npsn ?? "-"}
            website={sekolah.website ?? "-"}
          />
          <KompetensiKeahlian jurusan={sekolah.jurusan} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
