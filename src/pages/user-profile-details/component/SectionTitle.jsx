export function SectionTitle({ title, icon }) {
  return (
    <div className="flex items-center gap-3 mb-6 border-l-4 border-red-600 pl-4">
      <span className="text-red-500">{icon}</span>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}
