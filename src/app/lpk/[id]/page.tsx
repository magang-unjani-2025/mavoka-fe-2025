"use client";

import HeaderHome from "@/app/components/homePage/headerHomepage";
import "aos/dist/aos.css";
import Footer from "@/app/components/homePage/footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getLpkById } from "@/services/lpk";
import { Lpk } from "@/types/lpk";
import DetailDescription from "@/app/components/homePage/detail-role/DetailDescription";
import DetailHeader from "@/app/components/homePage/detail-role/DetailHeader";
import BidangPelatihan from "@/app/components/homePage/listLpk/detail-lpk/BidangPelatihan";
import { Container } from "@/app/components/Container";

export default function DetailLPKPage() {
  const { id } = useParams();
  const [lpk, setLpk] = useState<Lpk | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await getLpkById(id as string);
        setLpk(data);
      } catch (error) {
        console.error("Gagal fetch data LPK:", error);
        setLpk(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!lpk)
    return (
      <p className="text-center py-10">
        Data lembaga pelatihan tidak ditemukan
      </p>
    );

  return (
    <>
      <HeaderHome />
      <main>
        <Container className="py-6">
          <DetailHeader
            name={lpk.name}
            logo={lpk.logoUrl || "/img/sejarah-mavoka.png"}
          />
          <DetailDescription
            type="organisasi"
            title="Deskripsi Lembaga Pelatihan"
            description={lpk.deskripsi_lembaga ?? "-"}
            email={lpk.email ?? "-"}
            address={lpk.address ?? "-"}
          />
          <BidangPelatihan bidang_pelatihan={lpk.bidang_pelatihan ?? "-"} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
