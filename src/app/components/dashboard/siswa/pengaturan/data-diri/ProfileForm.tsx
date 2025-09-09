import InputField from "./InputField";
import SelectField from "./SelectField";

interface ProfileFormProps {
  form: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function ProfileForm({ form, handleChange }: ProfileFormProps) {
  const fieldWrapper = (children: React.ReactNode, colSpan: number) => (
    <div className={`${colSpan === 2 ? "md:col-span-2" : ""}`}>{children}</div>
  );

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {fieldWrapper(
        <InputField
          label="Nama Lengkap"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          disabled={true}
        />,
        2
      )}
      {fieldWrapper(
        <InputField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Contoh: Lisaaja@gmail.com"
          disabled={true}
        />,
        2
      )}

      {fieldWrapper(
        <SelectField
          label="Jenis Kelamin"
          name="gender"
          value={form.gender}
          onChange={handleChange}
          options={["Perempuan", "Laki-laki"]}
        />,
        1
      )}
      {fieldWrapper(
        <InputField
          label="Tanggal Lahir"
          name="birthDate"
          type="date"
          value={form.birthDate}
          onChange={handleChange}
        />,
        1
      )}

      {fieldWrapper(
        <InputField
          label="Nomor Handphone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />,
        2
      )}
      {fieldWrapper(
        <InputField
          label="Alamat"
          name="address"
          value={form.address}
          onChange={handleChange}
        />,
        2
      )}

      {fieldWrapper(
        <SelectField
          label="Kota"
          name="city"
          value={form.city}
          onChange={handleChange}
          options={["Bandung", "Semarang", "Surabaya",]}
        />,
        1
      )}
      {fieldWrapper(
        <SelectField
          label="Provinsi"
          name="province"
          value={form.province}
          onChange={handleChange}
          options={["Jawa Barat", "Jawa Tengah", "Jawa Timur"]}
        />,
        1
      )}
    </form>
  );
}
