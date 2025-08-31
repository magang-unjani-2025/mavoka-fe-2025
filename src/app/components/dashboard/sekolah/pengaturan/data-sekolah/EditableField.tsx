import { useState } from "react";
import { Pencil } from "lucide-react";

interface EditableFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EditableField({
  label,
  name,
  value,
  onChange,
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        {isEditing ? (
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="w-full text-sm border-[2px] rounded-md px-3 py-2 focus:border-[#116ACC] focus:outline-none border-[#0F67B1]"
          />
        ) : (
          <p className="w-full text-sm border-[2px] rounded-md px-3 py-2 bg-gray-50 border-gray-300 text-gray-700">
            {value || "-"}
          </p>
        )}
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0F67B1] hover:text-[#116ACC] p-0 bg-transparent shadow-none rounded-none"
        >
          <Pencil size={16} />
        </button>
      </div>
    </div>
  );
}
