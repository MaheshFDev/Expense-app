import { useState } from "react";
import Card from "../UI/Card";
import FilterExpense from "./FilterExpense";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expense(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filteredYearHandler = (filterYear) => {
    setFilterYear(filterYear);
  };

  const filterExpenses = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card>
      <FilterExpense select={filterYear} onFilterData={filteredYearHandler} />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
}
