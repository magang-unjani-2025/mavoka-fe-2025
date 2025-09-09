interface ProfileViewProps {
  form: any;
}

export default function ProfileView({ form }: ProfileViewProps) {
  const fields = [
    { label: "Nama Sekolah", value: form.nama_sekolah },
    { label: "NPSN", value: form.npsn },
    { label: "Email", value: form.email },
    { label: "Nomor Telepon", value: form.phone },
    { label: "Website", value: form.website },
    { label: "Alamat", value: form.address },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {fields.map((field) => (
        <div key={field.label} className="flex flex-col">
          <p className="font-medium text-black">{field.label}</p>
          <p className="mt-1 text-gray-500 border rounded-md px-3 py-2 bg-gray-50">
            {field.value || "-"}
          </p>
        </div>
      ))}
    </div>
  );
}
