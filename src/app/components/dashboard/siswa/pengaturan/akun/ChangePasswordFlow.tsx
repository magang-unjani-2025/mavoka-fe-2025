"use client";
import { useState } from "react";
import ChangePasswordStep1 from "./change-password/ChangePasswordStep1";
import ChangePasswordStep2 from "./change-password/ChangePasswordStep2";
import ChangePasswordStep3 from "./change-password/ChangePasswordStep3";

interface ChangePasswordFlowProps {
  onCancel: () => void;
}

export default function ChangePasswordFlow({ onCancel }: ChangePasswordFlowProps) {
  const [step, setStep] = useState(1);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className="space-y-4">
      {step === 1 && (
        <ChangePasswordStep1
          oldPassword={oldPassword}
          setOldPassword={setOldPassword}
          onNext={() => setStep(2)}
          onCancel={onCancel}
        />
      )}

      {step === 2 && (
        <ChangePasswordStep2
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          setNewPassword={setNewPassword}
          setConfirmPassword={setConfirmPassword}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <ChangePasswordStep3
          otp={otp}
          setOtp={setOtp}
          onFinish={() => alert("Password berhasil diubah!")}
          onBack={() => setStep(2)}
        />
      )}
    </div>
  );
}
