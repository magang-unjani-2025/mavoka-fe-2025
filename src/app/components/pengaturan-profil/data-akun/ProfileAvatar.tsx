interface ProfileAvatarProps {
  src?: string;
  name: string;
}

export default function ProfileAvatar({ src, name }: ProfileAvatarProps) {
  const getInitials = (value: string) => {
    if (!value) return "?";
    const parts = value.trim().split(" ").filter(Boolean);
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="flex justify-center mb-2">
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border"
        />
      ) : (
        <div className="w-20 h-20 rounded-full border flex items-center justify-center bg-gray-200 text-gray-700 font-semibold text-2xl">
          {getInitials(name)}
        </div>
      )}
    </div>
  );
}
