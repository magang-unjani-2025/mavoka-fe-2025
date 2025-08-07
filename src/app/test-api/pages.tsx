// pages/test-api.tsx
"use client";
import { useEffect } from "react";
import { StatistikPerusahaan } from "@/lib/api-statistik";

export default function TestAPI() {
  useEffect(() => {
    StatistikPerusahaan().then((res) => {
      console.log("Dari Test Page:", res);
    });
  }, []);

  return <div>Check console</div>;
}
