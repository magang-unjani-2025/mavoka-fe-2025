"use client";

import { Suspense } from "react";
import UploadLowonganInner from "./UploadLowonganInner";

export default function UploadLowonganLayoutWrapper({ view }: { view?: string }) {
  return (
    <Suspense fallback={<p className="p-6 text-center">Loading lowongan...</p>}>
      <UploadLowonganInner view={view} />
    </Suspense>
  );
}
