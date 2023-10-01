import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const ExpenseTotal = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  if (budget < totalExpenses) {
    alert("You cannot reduce the budget value lower than the spending");
    return;
  }
  return (
    <div className="alert alert-primary">
      <span>Spent so far: {currency}{totalExpenses}</span>
    </div>
  );
};
export default ExpenseTotal;
