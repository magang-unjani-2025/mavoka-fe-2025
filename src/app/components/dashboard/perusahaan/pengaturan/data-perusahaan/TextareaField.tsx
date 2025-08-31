interface TextareaProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<any>) => void; // 🔑 ganti jadi any
  disabled?: boolean;
  rows?: number;
  className?: string;
}

export default function TextareaField({
  label,
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
  rows = 4,
  className = "",
}: TextareaProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        className={`text-sm mt-1 border-[2px] rounded-md px-3 py-2 bg-gray-50 resize-y 
  ${disabled ? "border-gray-300 text-gray-500" : "border-[#0F67B1]"} 
  ${!disabled && "focus:border-[#116ACC]"} 
  focus:outline-none ${className}`}
      />
    </div>
  );
}
