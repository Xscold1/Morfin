export default function Header() {
  return (
    <header className="bg-dark shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-700">Finance Dashboard</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
        Log Out
      </button>
    </header>
  );
}
