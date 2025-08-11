interface SekolahViewProps {
  form: any;
}

export default function SekolahView({ form }: SekolahViewProps) {
  const fields = [
    { label: "Nama Sekolah", value: form.schoolName },
    { label: "NISN", value: form.nisn },
    { label: "Kelas", value: form.kelas },
    { label: "Jurusan", value: form.jurusan },
    { label: "Tahun Ajaran", value: form.tahunAjaran },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {fields.map((field) => (
        <div key={field.label} className="flex flex-col">
          <p className="text-sm font-medium text-gray-500">{field.label}</p>
          <p className="text-sm mt-1 text-black border rounded-md px-3 py-2 bg-gray-50">
            {field.value || "-"}
          </p>
        </div>
      ))}
    </div>
  );
}
