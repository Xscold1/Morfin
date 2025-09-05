import { useState, useEffect } from "react";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulate fetching from API
    setTransactions([
      { date: "2025-09-01", description: "Salary", category: "Income", amount: 3000 },
      { date: "2025-09-02", description: "Groceries", category: "Food", amount: -120 },
      { date: "2025-09-04", description: "Electric Bill", category: "Utilities", amount: -80 },
    ]);
  }, []);

  return transactions;
}
