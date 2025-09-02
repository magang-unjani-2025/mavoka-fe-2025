import InputField from "./InputField";
import SelectField from "./SelectField";

interface ProfileFormProps {
  form: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function ProfileForm({ form, handleChange }: ProfileFormProps) {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputField
        label="Nama Perusahaan"
        name="nama_perusahaan"
        value={form.nama_perusahaan}
        onChange={handleChange}
        disabled={true}
      />
      <InputField
        label="Bidang Usaha"
        name="bidang_usaha"
        type="date"
        value={form.bidang_usaha}
        onChange={handleChange}
      />
      <InputField
        label="Deskripsi Perusahaan"
        name="deskripsi_perusahaan"
        type="date"
        value={form.deskripsi_perusahaan}
        onChange={handleChange}
      />
      <InputField
        label="Alamat"
        name="address"
        value={form.address}
        onChange={handleChange}
      />
      <SelectField
        label="Kota"
        name="city"
        value={form.city}
        onChange={handleChange}
        options={["Bandung", "Semarang", "Surabaya"]}
      />
      <SelectField
        label="Provinsi"
        name="province"
        value={form.province}
        onChange={handleChange}
        options={["Jawa Barat", "Jawa Tengah", "Jawa Timur"]}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Contoh: Lisaaja@gmail.com"
        disabled={true}
      />
      <InputField
        label="Nomor Handphone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />
    </form>
  );
}
