// app/(public)/admin/login/page.tsx
"use client";

import AuthIllustration from "@/app/components/AuthIllustration";
import FormLoginMultiRole from "@/app/login/formLogin"; // reuse form yang sama

export default function AdminLoginPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white overflow-x-hidden">
      <AuthIllustration />
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md border-[5px] border-[#0F67B1] rounded-[50px] p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-2 text-black">ADMIN LOGIN</h2>
          <FormLoginMultiRole fixedRole="admin" />
        </div>
      </div>
    </div>
  );
}
