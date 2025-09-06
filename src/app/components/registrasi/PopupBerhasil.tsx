// "use client";
// import { HiCheckCircle } from "react-icons/hi";

// type Props = {
//   open: boolean;
//   title?: string;
//   message?: React.ReactNode;
//   onClose: () => void;
//   primaryText?: string;
//   showCloseIcon?: boolean;
// };

// export default function SuccessModal({
//   open,
//   title = "Berhasil",
//   message,
//   onClose,
//   primaryText,
//   showCloseIcon = false,
// }: Props) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
//       <div className="relative w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl ring-2 ring-[#0F67B1]">
//         {showCloseIcon && (
//           <button
//             onClick={onClose}
//             className="shadow-none rounded-none absolute right-3 top-3 text-2xl leading-none text-gray-500 hover:text-gray-700"
//             aria-label="Tutup"
//           >
//             &times;
//           </button>
//         )}

//         <HiCheckCircle className="mx-auto mb-3 text-6xl text-green-500" />
//         <h2 className="mb-2 text-gray-900">{title}</h2>
//         {message && <p className="mb-5 text-gray-500">{message}</p>}

//         {primaryText && (
//           <button
//             onClick={onClose}
//             className="mx-auto block w-full rounded-full bg-[#0F67B1] px-4 py-2.5 text-white hover:bg-[#0c599b]"
//           >
//             {primaryText}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import { useEffect } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  title?: string;
  message?: React.ReactNode;
  onClose: () => void;
  primaryText?: string;
  showCloseIcon?: boolean;
  duration?: number;
};

export default function SuccessModal({
  open,
  title = "Berhasil",
  message,
  onClose,
  primaryText,
  showCloseIcon = false,
  duration = 2500,
}: Props) {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl ring-4 ring-[#0F67B1]"
          >
            {showCloseIcon && (
              <button
                onClick={onClose}
                className="shadow-none rounded-none absolute right-3 top-3 text-2xl leading-none text-gray-500 hover:text-gray-700"
                aria-label="Tutup"
              >
                &times;
              </button>
            )}

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <HiCheckCircle className="mx-auto mb-3 text-6xl text-green-500" />
            </motion.div>

            <h2 className="mb-2 text-gray-900">{title}</h2>
            {message && <p className="mb-5 text-gray-500">{message}</p>}

            {primaryText && (
              <button
                onClick={onClose}
                className="mx-auto block w-full rounded-full bg-[#0F67B1] px-4 py-2.5 text-white hover:bg-[#0c599b]"
              >
                {primaryText}
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
