import FormLogin from "./formLogin";

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white overflow-x-hidden">
      {/* Kiri */}
      <div className="hidden lg:flex w-1/2 bg-white items-center justify-center p-6">
        <img
          src="/img/login&register.png"
          alt="Magang Vokasi"
          className="object-contain w-[739px] h-[708px] max-w-full max-h-[90vh]"
        />
      </div>

      {/* Kanan: Form Pendaftaran */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md border-[5px] border-[#0F67B1] rounded-[50px] p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-2 text-black">
            MASUK
          </h2>
            <FormLogin />
        </div>
      </div>
    </div>
  );
}
