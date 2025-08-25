import { Suspense } from "react";
import KodeOtp from "./KodeOtp";
import AuthIllustration from "@/app/components/AuthIllustration";

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white overflow-x-hidden">
      <Suspense fallback={<div>Loading illustration...</div>}>
        <AuthIllustration />
      </Suspense>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md border-[5px] border-[#0F67B1] rounded-[50px] p-6 shadow-sm">
          <Suspense fallback={<div>Loading OTP...</div>}>
            <KodeOtp />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

