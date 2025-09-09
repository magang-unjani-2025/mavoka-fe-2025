"use client";
import { useState } from "react";
import ReadField from "./ReadField";
import EditableField from "./EditableField";

interface ProfileFormProps {
  form: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function ProfileForm({ form, handleChange }: ProfileFormProps) {
  const [isDirty, setIsDirty] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleChange(e);
    setIsDirty(true); // tandai ada perubahan
  };

  const handleCancel = () => {
    // reload halaman / reset state form sesuai kebutuhan kamu
    window.location.reload();
  };

  const handleSave = () => {
    console.log("Simpan perubahan:", form);
    setIsDirty(false);
  };

  return (
    <form>
      <ReadField
        label="Nama Sekolah"
        name="nama-sekolah"
        value={form.nama_sekolah}
        onChange={handleChange}
        disabled={true}
      />
      <ReadField
        label="NPSN"
        name="npsn"
        value={form.npsn}
        onChange={handleChange}
        disabled={true}
      />
      <ReadField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Contoh: Lisaaja@gmail.com"
        disabled={true}
      />
      <EditableField
        label="Nomor Handphone"
        name="phone"
        value={form.phone}
        onChange={handleInputChange}
      />
      <EditableField
        label="Website"
        name="website"
        value={form.website}
        onChange={handleInputChange}
      />
      <EditableField
        label="Alamat"
        name="address"
        value={form.address}
        onChange={handleInputChange}
      />

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
