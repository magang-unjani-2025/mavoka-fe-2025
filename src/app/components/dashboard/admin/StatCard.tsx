"use client";

import Image from "next/image";

type StatCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function StatCard({ title, description, imageUrl }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow flex items-center p-4">
      <div className="w-14 h-14 relative flex-shrink-0">
        <Image src={imageUrl} alt={title} fill className="object-cover rounded" />
      </div>
      <div className="ml-4">
        <small className="text-gray-500 leading-none">{title}</small>
        <h2 className="font-bold text-gray-900">{description}</h2>
      </div>
    </div>
  );
}
