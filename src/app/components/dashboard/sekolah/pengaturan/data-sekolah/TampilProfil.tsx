import ReadField from "./ReadField";
import EditableField from "./EditableField";

interface ProfileFormProps {
  form: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function ProfileForm({ form, handleChange }: ProfileFormProps) {
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
        onChange={handleChange}
      />
      <EditableField
        label="Website"
        name="website"
        value={form.website}
        onChange={handleChange}
      />
      <EditableField
        label="Alamat"
        name="address"
        value={form.address}
        onChange={handleChange}
      />
    </form>
  );
}
