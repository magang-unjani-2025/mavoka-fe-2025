"use client";
import TableDraftLowongan from "@/app/components/upload-lowongan-pelatihan/TableDraftLowongan";
import { dummyPelatihan } from "@/app/data/dummyPelatihan";

export default function UploadPelatihanPage() {

  return (
          <TableDraftLowongan role="lpk" data={dummyPelatihan} />
    );
}