import { motion } from "framer-motion";

export function Chip({ text, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        rotateX: 6,
        rotateY: -6,
      }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        px-6 py-2 rounded-full border
        transition-all duration-300
        ${
          active
            ? "border-red-600 bg-red-600/20 text-red-400 shadow-[0_0_20px_rgba(220,38,38,0.45)]"
            : "border-white/20 hover:border-red-600 hover:text-red-500"
        }
      `}
      style={{ transformStyle: "preserve-3d" }}
    >
      {text}
    </motion.button>
  );
}
