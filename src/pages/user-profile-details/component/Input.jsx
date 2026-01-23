import { motion } from "framer-motion";

export function Input({
  label,
  type = "text",
  disabled,
  value,
  placeholder,
  className,
}) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} className={className}>
      <label className="block text-sm mb-2 text-zinc-300">{label}</label>

      <input
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className="
          w-full px-4 py-3 rounded-xl
          bg-black/40 border border-white/10
          text-white placeholder:text-zinc-500
          focus:border-red-600
          focus:ring-1 focus:ring-red-600
          focus:shadow-[0_0_18px_rgba(220,38,38,0.35)]
          transition-all duration-300
          outline-none disabled:opacity-60
        "
      />
    </motion.div>
  );
}
