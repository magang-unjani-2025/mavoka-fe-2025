'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Selamat Datang!</h1>
      <button
        onClick={() => router.push('/registrasi')}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Daftar Sekarang
      </button>
    </main>
  )
}
