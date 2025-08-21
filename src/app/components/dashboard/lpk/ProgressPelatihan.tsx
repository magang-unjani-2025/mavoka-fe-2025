export default function ProgressPelatihan() {
  const progress = 36;

  let progressColor = "";
  if (progress < 35) {
    progressColor = "#BA0000";
  } else if (progress >= 35 && progress <= 70) {
    progressColor = "#FFCC00";
  } else {
    progressColor = "#28A745";
  }

  return (
    <div className="bg-white p-4 rounded-lg mt-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900">Progres Pelatihan</h3>
        <span className="text-sm font-medium text-gray-600">{progress}%</span>
      </div>

      <div className="flex items-center w-full gap-4">
        <div className="flex-1 h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 rounded-full"
            style={{ width: `${progress}%`, backgroundColor: progressColor }}
          ></div>
        </div>
        <button className="px-3 py-1 text-sm text-blue-600 border border-blue-400 rounded-full hover:bg-blue-50 shadow-none">
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  );
}
