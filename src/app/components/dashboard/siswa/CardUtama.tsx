export default function CardUtama() {
  return (
    <div className="flex-1 mr-5 ml-5 h-full p-6">
      <div className="bg-white rounded-lg shadow p-10 h-full flex flex-col items-start justify-start">
        <h1 className="font-bold text-[#0F67B1]">
          SELAMAT DATANG <span className="text-black">Siswa</span>
        </h1>
        <p className="text-[#A3A3A3] mt-1">
          Hi, Siswa. Selamat datang kembali di MAVOKA!
        </p>
        <p className="mt-10 font-semibold">
          Selamat datang di dashboard (user). Silahkan gunakan fitur di samping
          untuk keperluan Anda.
        </p>
        <p className="font-semibold">Let's Start ur Career Here!</p>
      </div>
    </div>
  );
}

