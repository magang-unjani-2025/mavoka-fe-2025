export default function AuthIllustration() {
  return (
    <>
      <div className="block lg:hidden w-full flex items-center justify-center py-8">
        <img
          src="/img/logo-mavoka.png"
          alt="Mavoka"
          className="object-contain max-w-[260px] w-[60%] h-auto"
        />
      </div>

      <div className="hidden lg:flex w-1/2 bg-white items-center justify-center p-6">
        <img
          src="/img/login&register.png"
          alt="Magang Vokasi"
          className="object-contain w-[739px] h-[708px] max-w-full max-h-[90vh]"
        />
      </div>
    </>
  );
}
