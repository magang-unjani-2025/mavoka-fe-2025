// import { useState } from "react";
// import { Pencil } from "lucide-react";

// interface EditableFieldProps {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export default function EditableField({
//   label,
//   name,
//   value,
//   onChange,
// }: EditableFieldProps) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [tempValue, setTempValue] = useState(value);

//   const handleSave = () => {
//     onChange({
//       target: { name, value: tempValue },
//     } as React.ChangeEvent<HTMLInputElement>);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setTempValue(value); 
//     setIsEditing(false);
//   };

//   return (
//     <div className="flex flex-col mb-4">
//       <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
//       <div className="relative">
//         {isEditing ? (
//           <input
//             type="text"
//             name={name}
//             value={tempValue}
//             onChange={(e) => setTempValue(e.target.value)}
//             className="w-full text-sm border-[2px] rounded-md px-3 py-2 focus:border-[#116ACC] focus:outline-none border-[#0F67B1]"
//           />
//         ) : (
//           <p className="w-full text-sm border-[2px] rounded-md px-3 py-2 bg-gray-50 border-gray-300 text-gray-700">
//             {value || "-"}
//           </p>
//         )}

//         {!isEditing && (
//           <button
//             type="button"
//             onClick={() => setIsEditing(true)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0F67B1] hover:text-[#116ACC] p-0 bg-transparent shadow-none rounded-none"
//           >
//             <Pencil size={16} />
//           </button>
//         )}
//       </div>
//       {isEditing && (
//         <div className="flex gap-2 mt-2 justify-end">
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="bg-white text-[#0F67B1] border border-[#0F67B1] shadow-none"
//           >
//             Batal
//           </button>
//           <button
//             type="button"
//             onClick={handleSave}
//             className="bg-[#0F67B1] text-white shadow-none"
//           >
//             Simpan
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


import { ChangeEvent } from "react";

interface EditableFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function EditableField({
  label,
  name,
  value,
  onChange,
}: EditableFieldProps) {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full text-sm border rounded-md px-3 py-2 
                   focus:border-[#0F67B1] focus:ring-5 focus:ring-[#0F67B1] outline-none border-[#0F67B1]"
      />
    </div>
  );
}

