"use client";
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { broadcastLogout, isExpired, onAutoLogout, readSessionToken, scheduleAutoLogout, setSessionToken, clearSessionToken } from '@/lib/auth-session';
import { clearAuth } from '@/lib/auth-storage';

interface AuthContextValue {
  token: string | null;
  logout: (reason?: string) => void;
  setToken: (token: string, ttlMs?: number) => void;
  toast: { message: string; type: 'success'|'error' } | null;
  clearToast: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setTokenState] = useState<string | null>(null);
  const [toast, setToast] = useState<{message:string; type:'success'|'error'}|null>(null);

  const showToast = useCallback((message: string, type: 'success'|'error', ttl=4500) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), ttl);
  }, []);

  const logout = useCallback((reason?: string) => {
    clearAuth();
    clearSessionToken();
    setTokenState(null);
    broadcastLogout('manual');
    if (reason === 'expired') {
      showToast('Sesi Anda telah berakhir. Silakan login kembali.', 'error');
    } else if (reason === 'window-closed') {
      // optional: no toast on window close detection
    } else if (reason === 'manual') {
      showToast('Berhasil logout.', 'success');
    }
  }, [showToast]);

  const setToken = useCallback((t: string, ttlMs?: number) => {
    setSessionToken(t, ttlMs);
    setTokenState(t);
    scheduleAutoLogout();
  }, []);

  // init
  useEffect(() => {
    const t = readSessionToken();
    if (t && !isExpired()) {
      setTokenState(t);
      scheduleAutoLogout();
    }
    onAutoLogout((r) => {
      if (r === 'expired') {
        logout('expired');
      } else if (r === 'window-closed') {
        logout('window-closed');
      } else {
        logout('manual');
      }
    });
  }, [logout]);

  return (
    <AuthContext.Provider value={{ token, logout, setToken, toast, clearToast: () => setToast(null) }}>
      {children}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded shadow text-white text-sm ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>{toast.message}</div>
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}
