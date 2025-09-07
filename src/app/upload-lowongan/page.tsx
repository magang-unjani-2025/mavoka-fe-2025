"use client";
import TableDraftLowongan from "@/app/components/upload-lowongan-pelatihan/TableDraftLowongan";
import { dummyLowongan } from "@/app/data/dummyLowongan";

export default function ProfilePage() {

  return (
          <TableDraftLowongan role="perusahaan" data={dummyLowongan} />
    );
}