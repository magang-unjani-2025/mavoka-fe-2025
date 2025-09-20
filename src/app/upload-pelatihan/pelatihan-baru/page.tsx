//"use client";

//import { useRouter } from "next/navigation";
//import PelatihanForm from "@/app/components/upload-lowongan-pelatihan/PelatihanFormView";
//import { PelatihanFormValues } from "@/types/pelatihan";

//export default function PelatihanBaruPage() {
//  const router = useRouter();

//  const handleSaveDraft = async (data: PelatihanFormValues) => {
//    // TODO: panggil API simpan draft
//    console.log("SAVE DRAFT:", data);
//    router.replace("/upload-pelatihan?tab=draft");
//  };

//  const handlePublish = async (data: PelatihanFormValues) => {
//    // TODO: panggil API publish
//    console.log("PUBLISH:", data);
//    router.replace("/upload-pelatihan?tab=terpasang");
//  };

//  return <PelatihanForm onSaveDraft={handleSaveDraft} onPublish={handlePublish} />;
//}

//"use client";

//import { useRouter } from "next/navigation";
//import PelatihanFormView from "@/app/components/upload-lowongan-pelatihan/PelatihanFormView";
//import { PelatihanFormValues } from "@/types/pelatihan";

//export default function PelatihanBaruPage() {
//  const router = useRouter();

//  const handleSaveDraft = async (v: PelatihanFormValues) => {
//    // TODO: sambungkan ke API create (status: draft)
//    // await createPelatihan({ ...v, status: "draft" });
//    router.replace("/upload-pelatihan?tab=draft");
//  };

//  const handlePublish = async (v: PelatihanFormValues) => {
//    // TODO: sambungkan ke API create (status: published)
//    // await createPelatihan({ ...v, status: "published" });
//    router.replace("/upload-pelatihan?tab=terpasang");
//  };

//  return (
//    <div className="-mt-[15px]">
//      <PelatihanFormView
//        mode="create"
//        onSaveDraft={handleSaveDraft}
//        onPublish={handlePublish}
//      />
//    </div>
//  );
//}

"use client";

import { useRouter } from "next/navigation";
import PelatihanFormView from "@/app/components/upload-lowongan-pelatihan/PelatihanFormView";
import { PelatihanFormValues } from "@/types/pelatihan";
import { createPelatihan } from "@/lib/api-pelatihan";
import { useState } from "react";

export default function PelatihanBaruPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSaveDraft = async (v: PelatihanFormValues) => {
    try {
      setLoading(true);
      await createPelatihan(v, { publish: false }); // history_batch tidak dikirim
      alert("Draft tersimpan.");
      router.replace("/upload-pelatihan?tab=draft");
    } catch (e: any) {
      console.error(e);
      alert(e?.response?.data?.message || "Gagal menyimpan draft");
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = async (v: PelatihanFormValues) => {
    try {
      setLoading(true);
      await createPelatihan(v, { publish: true }); // history_batch = []
      alert("Pelatihan terpasang.");
      router.replace("/upload-pelatihan?tab=terpasang");
    } catch (e: any) {
      console.error(e);
      alert(e?.response?.data?.message || "Gagal mengunggah");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="-mt-[15px]">
      <PelatihanFormView
        mode="create"
        onSaveDraft={handleSaveDraft}
        onPublish={handlePublish}
      />
      {loading && <p className="text-sm text-gray-500 mt-2">Processing…</p>}
    </div>
  );
}
