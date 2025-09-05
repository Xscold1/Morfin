export default function SummaryCard({ label, value, color }) {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h2 className="text-gray-500 text-sm">{label}</h2>
      <p className={`text-xl font-semibold ${color}`}>{value}</p>
    </div>
  );
}
