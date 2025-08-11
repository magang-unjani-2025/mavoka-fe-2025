interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function InputField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  disabled = false,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`text-sm mt-1 border-[2px] rounded-md px-3 py-2 bg-gray-50 
  ${disabled ? "border-gray-300 text-gray-500" : "border-[#0F67B1]"} 
  ${!disabled && "focus:border-[#116ACC]"} 
  focus:outline-none`}
      />
    </div>
  );
}
