import formatCurrency from "@utils/formatCurrency";

export default function TransactionsTable({ transactions }) {
  return (
    <section className="bg-white shadow rounded-xl p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">
        Recent Transactions
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Description</th>
              <th className="py-2 px-3">Category</th>
              <th className="py-2 px-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">{tx.date}</td>
                <td className="py-2 px-3">{tx.description}</td>
                <td className="py-2 px-3">{tx.category}</td>
                <td
                  className={`py-2 px-3 ${
                    tx.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.amount > 0 ? "+ " : "- "}
                  {formatCurrency(Math.abs(tx.amount))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
