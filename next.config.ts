import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
      // Tambahkan domain production di bawah ini jika sudah ada, contoh:
      // {
      //   protocol: 'https',
      //   hostname: 'api.mavoka.id',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
