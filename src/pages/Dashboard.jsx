import Header from "@components/Header";
import Footer from "@components/Footer";
import SummaryCards from "@components/SummaryCards";
import TransactionsTable from "@components/TransactionsTable";
import useTransactions from "@hooks/useTransactions";
import Sidenav from '@components/Sidenav';

export default function Dashboard() {
  const transactions = useTransactions();

  const summary = {
    balance: 12450,
    income: 4200,
    expenses: 1850,
    savings: 6400,
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidenav/>
      </div>

      <div className="min-h-screen w-full bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          <SummaryCards data={summary} />
          <TransactionsTable transactions={transactions} />
        </main>
        <Footer />
      </div>
 
    </div>
  );
}
