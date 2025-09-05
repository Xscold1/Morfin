import SummaryCard from "./SummaryCard";
import formatCurrency from "@utils/formatCurrency";

export default function SummaryCards ({ data } ){
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <SummaryCard label="Balance" value={formatCurrency(data.balance)} color="text-gray-800" />
      <SummaryCard label="Income" value={formatCurrency(data.income)} color="text-green-600" />
      <SummaryCard label="Expenses" value={formatCurrency(data.expenses)} color="text-red-600" />
      <SummaryCard label="Savings" value={formatCurrency(data.savings)} color="text-blue-600" />
    </section>
  );
}
