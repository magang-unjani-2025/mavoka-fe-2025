//import {
//  HiOutlineLibrary,
//  HiOutlineIdentification,
//  HiAcademicCap,
//  HiUserGroup,
//} from "react-icons/hi";

//function formatCount(count: number, minValue?: number) {
//  return minValue && count >= minValue ? `${minValue}+` : `${count}`;
//}

//type StatsSectionProps = {
//  totalCompanies: number;
//  totalTrainingCenters: number;
//  totalSchools: number;
//  totalStudents: number;
//};

//export default function StatsSection({
//  totalCompanies,
//  totalTrainingCenters,
//  totalSchools,
//  totalStudents,
//}: StatsSectionProps) {
//  const stats = [
//    {
//      icon: <HiOutlineLibrary size={25} />,
//      value: formatCount(totalCompanies, 20),
//      label: "Perusahaan terdaftar",
//      border: "border-x",
//    },
//    {
//      icon: <HiOutlineIdentification size={30} />,
//      value: formatCount(totalTrainingCenters, 15),
//      label: "Lembaga Pelatihan terdaftar",
//      border: "border-r",
//    },
//    {
//      icon: <HiAcademicCap size={30} />,
//      value: formatCount(totalSchools, 200),
//      label: "Sekolah SMK terdaftar",
//      border: "border-r",
//    },
//    {
//      icon: <HiUserGroup size={30} />,
//      value: formatCount(totalStudents, 1000),
//      label: "Siswa SMK terdaftar",
//      border: "",
//    },
//  ];

//  return (
//    <section className="max-w-[1154px] mx-auto px-4">
//      <div className="bg-[#0F67B1] text-white rounded-[15px] p-8 relative overflow-hidden">
//        {/* SVG Background Decorative */}
//        <svg
//          className="absolute top-0 right-0 z-0"
//          width="194"
//          height="126"
//          viewBox="0 0 194 126"
//          fill="none"
//          xmlns="http://www.w3.org/2000/svg"
//        >
//          <path
//            opacity="0.56"
//            fillRule="evenodd"
//            clipRule="evenodd"
//            d="M38.3987 4.02977C31.1824 1.78711 31.4886 0.29111 39.0453 0.29111H178.038C186.323 0.29111 193.038 7.00684 193.038 15.2911V114.504C193.038 116.709 193.685 118.872 193.946 121.061C194.553 126.169 190.705 133.177 150.409 107.94C96.6101 74.2458 37.1701 102.805 6.33491 87.6399C-24.5002 72.475 73.3327 14.8865 38.3987 4.02977Z"
//            fill="white"
//          />
//        </svg>

//        <svg
//          className="absolute top-0 right-0 z-10"
//          width="162"
//          height="113"
//          viewBox="0 0 162 113"
//          fill="none"
//          xmlns="http://www.w3.org/2000/svg"
//        >
//          <path
//            fillRule="evenodd"
//            clipRule="evenodd"
//            d="M31.3177 2.75719C25.1116 0.856891 25.3504 0.0494146 31.8409 0.0494146H145.485C153.176 0.0494146 159.411 6.28408 159.412 13.9751L159.414 101.138C159.414 104.39 160.886 107.411 161.819 110.528C162.975 114.387 159.373 116.493 127.831 95.0197C80.252 62.628 31.3385 83.0415 6.00213 70.7644C-19.3343 58.4874 60.022 11.5465 31.3177 2.75719Z"
//            fill="url(#paint0_linear_1394_1148)"
//          />
//          <defs>
//            <linearGradient
//              id="paint0_linear_1394_1148"
//              x1="-4.88118"
//              y1="-11.3243"
//              x2="-30.4328"
//              y2="59.2704"
//              gradientUnits="userSpaceOnUse"
//            >
//              <stop stopColor="#308EDD" />
//              <stop offset="1" stopColor="#0A4271" />
//            </linearGradient>
//          </defs>
//        </svg>

//        <h2 className="text-2xl font-semibold mb-2 relative z-10">
//          Kami telah Kerjasama dengan beberapa Perusahaan,
//          <br /> Lembaga Pelatihan dan Sekolah{" "}
//          <span className="text-yellow-400">terbaik</span> di seluruh Indonesia
//        </h2>
//        <p className="text-sm mb-6 relative z-10">
//          MAVOKA membantu para siswa SMK untuk belajar secara langsung di dunia
//          industri
//        </p>

//        {/* Grid Statistik */}
//        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left relative z-10">
//          {stats.map((stat, idx) => (
//            <div
//              key={idx}
//              className={`flex items-center gap-3 ${stat.border} border-white px-3`}
//            >
//              {stat.icon}
//              <div>
//                <p className="text-5xl font-bold">{stat.value}</p>
//                <span className="text-sm">{stat.label}</span>
//              </div>
//            </div>
//          ))}
//        </div>
//      </div>
//    </section>
//  );
//}

import {
  HiOutlineLibrary,
  HiOutlineIdentification,
  HiAcademicCap,
  HiUserGroup,
} from "react-icons/hi";

function formatCount(count: number, minValue?: number) {
  return minValue && count >= minValue ? `${minValue}+` : `${count}`;
}

type StatsSectionProps = {
  totalCompanies: number;
  totalTrainingCenters: number;
  totalSchools: number;
  totalStudents: number;
};

export default function StatsSection({
  totalCompanies,
  totalTrainingCenters,
  totalSchools,
  totalStudents,
}: StatsSectionProps) {
  const stats = [
    { icon: <HiOutlineLibrary size={25} />, value: formatCount(totalCompanies, 20),  label: "Perusahaan terdaftar" },
    { icon: <HiOutlineIdentification size={30} />, value: formatCount(totalTrainingCenters, 15), label: "Lembaga Pelatihan terdaftar" },
    { icon: <HiAcademicCap size={30} />, value: formatCount(totalSchools, 200),    label: "Sekolah SMK terdaftar" },
    { icon: <HiUserGroup size={30} />, value: formatCount(totalStudents, 1000),    label: "Siswa SMK terdaftar" },
  ];

  return (
    <section className="mx-auto max-w-[1154px] px-4">
      <div className="relative overflow-hidden rounded-[15px] bg-[#0F67B1] p-6 tablet:p-8 text-white">
        {/* Dekorasi: tampil hanya di desktop */}
        <svg className="absolute right-0 top-0 z-0 hidden desktop:block" width="194" height="126" viewBox="0 0 194 126" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.56" fillRule="evenodd" clipRule="evenodd" d="M38.3987 4.02977C31.1824 1.78711 31.4886 0.29111 39.0453 0.29111H178.038C186.323 0.29111 193.038 7.00684 193.038 15.2911V114.504C193.038 116.709 193.685 118.872 193.946 121.061C194.553 126.169 190.705 133.177 150.409 107.94C96.6101 74.2458 37.1701 102.805 6.33491 87.6399C-24.5002 72.475 73.3327 14.8865 38.3987 4.02977Z" fill="white"/>
        </svg>
        <svg className="absolute right-0 top-0 z-10 hidden desktop:block" width="162" height="113" viewBox="0 0 162 113" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M31.3177 2.75719C25.1116 0.856891 25.3504 0.0494146 31.8409 0.0494146H145.485C153.176 0.0494146 159.411 6.28408 159.412 13.9751L159.414 101.138C159.414 104.39 160.886 107.411 161.819 110.528C162.975 114.387 159.373 116.493 127.831 95.0197C80.252 62.628 31.3385 83.0415 6.00213 70.7644C-19.3343 58.4874 60.022 11.5465 31.3177 2.75719Z" fill="url(#paint0_linear_1394_1148)" />
          <defs>
            <linearGradient id="paint0_linear_1394_1148" x1="-4.88118" y1="-11.3243" x2="-30.4328" y2="59.2704" gradientUnits="userSpaceOnUse">
              <stop stopColor="#308EDD" /><stop offset="1" stopColor="#0A4271" />
            </linearGradient>
          </defs>
        </svg>

        <h2 className="relative z-10 mb-2 text-xl font-semibold tablet:text-2xl">
          Kami telah Kerjasama dengan beberapa Perusahaan,<br />
          Lembaga Pelatihan dan Sekolah <span className="text-yellow-400">terbaik</span> di seluruh Indonesia
        </h2>
        <p className="relative z-10 mb-6 text-sm">
          MAVOKA membantu para siswa SMK untuk belajar secara langsung di dunia industri
        </p>

        {/* GRID: desktop 4 kolom, tablet 2x2, mobile stack */}
        <div className="relative z-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-4 tablet:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 py-3 tablet:py-4 px-1 tablet:px-3">
              {/* Garis putih di depan tiap item */}
              <span aria-hidden className="block h-10 tablet:h-12 desktop:h-14 w-px bg-white/80" />
              {/* Icon + teks */}
              <span className="ml-3 shrink-0">{stat.icon}</span>
              <div className="ml-1">
                <p className="text-4xl tablet:text-5xl font-bold leading-none">{stat.value}</p>
                <span className="text-sm">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
