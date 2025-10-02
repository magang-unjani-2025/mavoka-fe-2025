import { useEffect, useState } from "react";

type PelamarItem = Record<string, any>;

export function useMyApplications() {
  const USE_API = process.env.NEXT_PUBLIC_USE_API === "true";
  const BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PelamarItem[] | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  // debug: expose which token (if any) was used when calling the API
  const [usedToken, setUsedToken] = useState<string | null>(null);
  const [usedUrl, setUsedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!USE_API) return; // hook is API-only
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        // try multiple possible localStorage keys where a token may be stored
        let token =
          localStorage.getItem("access_token_siswa") ||
          localStorage.getItem("access_token") ||
          localStorage.getItem("accessToken") ||
          localStorage.getItem("token") ||
          localStorage.getItem("auth_token");

        // Some flows store token inside localStorage.user object; try to extract it
        if (!token) {
          try {
            const rawUser = localStorage.getItem("user");
            if (rawUser) {
              const parsed = JSON.parse(rawUser);
              token = parsed?.access_token || parsed?.token || parsed?.accessToken || parsed?.auth_token || null;
            }
          } catch {
            // ignore parse errors
          }
        }
        const headers: Record<string, string> = { Accept: "application/json" };
        const opts: RequestInit = { method: "GET" };
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
          opts.headers = headers;
          opts.credentials = "omit";
          if (!cancelled) setUsedToken(token);
        } else {
          // fallback to cookies
          opts.credentials = "include";
          opts.headers = headers;
          if (!cancelled) setUsedToken(null);
        }

        // helper to attempt a fetch and return response
        async function tryFetch(url: string) {
          if (!cancelled) setUsedUrl(url);
          if (typeof window !== "undefined") console.debug("fetching", url, opts);
          const r = await fetch(url, opts);
          if (!cancelled) setStatus(r.status);
          return r;
        }

        // first attempt using BASE
        let res = await tryFetch(`${BASE}/pelamar`);
        // if network error / CORS or not-ok, try swapping localhost <> 127.0.0.1 once
        if (!res.ok) {
          // try alternate host if the original host was localhost or 127.0.0.1
          try {
            const alt = BASE.includes("127.0.0.1") ? BASE.replace(/127\.0\.0\.1/g, "localhost") : BASE.replace(/localhost/g, "127.0.0.1");
            if (alt !== BASE) {
              if (typeof window !== "undefined") console.debug("retrying with alternate base", alt);
              res = await tryFetch(`${alt}/pelamar`);
            }
          } catch (e) {
            // swallow; we'll handle using res below
          }
        }

        if (!res.ok) {
          const txt = await res.text().catch(() => "(no body)");
          throw new Error(`HTTP ${res.status} ${txt}`);
        }
        const body = await res.json().catch(() => null);
        const items = body && body.data ? body.data : body;
        if (!cancelled) setData(Array.isArray(items) ? items : []);
      } catch (e: any) {
        if (!cancelled) {
          const msg = e?.message ?? String(e);
          setError(msg);
          if (typeof window !== "undefined") console.error("useMyApplications error:", msg);
        }
        if (!cancelled) setData([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [USE_API, BASE]);

  return { loading, error, data, status, usedToken, usedUrl };
}

export default useMyApplications;
