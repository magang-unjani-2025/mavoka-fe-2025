"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { isSessionExpired, clearAuth } from "@/lib/auth-storage";
import { useAuth } from "@/app/components/auth/AuthProvider";

type Props = {
  role?: string; // optional role hint (siswa, sekolah, perusahaan, lpk, admin)
  children: React.ReactNode;
};

export default function RequireAuth({ role, children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const { token } = useAuth();
  const [ready, setReady] = useState(false); // memastikan render pertama sama (null) di server & client
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const reason = params?.get("reason");
    const expired = isSessionExpired();
    const hasToken = Boolean(token);
    if (!expired && hasToken) {
      setAllowed(true);
    } else {
      try {
        clearAuth();
      } catch {}
      router.replace("/login" + (expired ? "?reason=expired" : ""));
    }
    setReady(true);
  }, [role, pathname, token]);

  // Render pertama (SSR + initial hydration) => null => tidak mismatch
  if (!ready) return null;
  if (!allowed) return null;
  return <>{children}</>;
}
