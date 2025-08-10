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
        label="Nama Lengkap"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        disabled={true}
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
      <SelectField
        label="Jenis Kelamin"
        name="gender"
        value={form.gender}
        onChange={handleChange}
        options={["Perempuan", "Laki-laki"]}
      />
      <InputField
        label="Tanggal Lahir"
        name="birthDate"
        type="date"
        value={form.birthDate}
        onChange={handleChange}
      />
      <InputField
        label="Nomor Handphone"
        name="phone"
        value={form.phone}
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
        options={["Bojonggede", "Yogyakarta", "Bandung"]}
      />
      <SelectField
        label="Provinsi"
        name="province"
        value={form.province}
        onChange={handleChange}
        options={["Jawa Bagian Barat", "Jawa Tengah", "Jawa Timur"]}
      />
    </form>
  );
}
