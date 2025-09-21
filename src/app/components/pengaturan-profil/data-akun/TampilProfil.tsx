"use client";
import { useState, useEffect } from "react";
import ReadField from "./ReadField";
import EditableField from "./EditableField";

interface ProfileFormProps {
  form: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

type Role = "sekolah" | "perusahaan" | "lpk";

export default function ProfileForm({ form, handleChange }: ProfileFormProps) {
  const [isDirty, setIsDirty] = useState(false);
  const [role, setRole] = useState<Role>("sekolah");

  // ambil role dari localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.role) setRole(parsed.role as Role);
      } catch (err) {
        console.error("Gagal parse user:", err);
      }
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleChange(e);
    setIsDirty(true);
  };

  const handleCancel = () => {
    window.location.reload();
  };

  const handleSave = () => {
    console.log("Simpan perubahan:", form);
    setIsDirty(false);
  };

  // definisi field per role
  const fieldsByRole: Record<Role, { label: string; name: string; type?: string; editable?: boolean; placeholder?: string }[]> =
    {
      sekolah: [
        { label: "Nama Sekolah", name: "nama_sekolah" },
        { label: "NPSN", name: "npsn" },
        { label: "Email", name: "email", type: "email", placeholder: "contoh: sekolah@gmail.com" },
        { label: "Nomor Handphone", name: "phone", editable: true },
        { label: "Website", name: "website", editable: true },
        { label: "Alamat", name: "address", editable: true },
      ],
      perusahaan: [
        { label: "Nama Perusahaan", name: "nama_perusahaan" },
        { label: "Bidang Usaha", name: "bidang_usaha" },
        { label: "Deskripsi Usaha", name: "deskripsi_usaha", editable: true },
        { label: "Email", name: "email", type: "email", editable: true },
        { label: "Nomor Handphone", name: "phone", editable: true },
        { label: "Website", name: "website", editable: true },
        { label: "Alamat", name: "address", editable: true },
        { label: "Penanggung Jawab", name: "penanggung_jawab", editable: true },
      ],
      lpk: [
        { label: "Nama Lembaga", name: "nama_lembaga" },
        { label: "Bidang Pelatihan", name: "bidang_pelatihan" },
        { label: "Deskripsi Lembaga", name: "deskripsi_lembaga", editable: true },
        { label: "Email", name: "email", type: "email", editable: true },
        { label: "Nomor Handphone", name: "phone", editable: true },
        { label: "Website", name: "website", editable: true },
        { label: "Alamat", name: "address", editable: true },
        { label: "Akreditasi", name: "akreditasi", editable: true },
      ],
    };

  const fields = fieldsByRole[role] || [];

  return (
    <form>
      {fields.map((field) =>
        field.editable ? (
          <EditableField
            key={field.name}
            label={field.label}
            name={field.name}
            value={form[field.name] || ""}
            onChange={handleInputChange}
          />
        ) : (
          <ReadField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={form[field.name] || ""}
            onChange={handleChange}
            placeholder={field.placeholder}
            disabled={true}
          />
        )
      )}

      {isDirty && (
        <div className="flex gap-2 mt-4 justify-end">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-white text-[#0F67B1] border border-[#0F67B1] px-4 py-2 rounded-md"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="bg-[#0F67B1] text-white px-4 py-2 rounded-md"
          >
            Simpan
          </button>
        </div>
      )}
    </form>
  );
}
