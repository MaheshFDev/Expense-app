import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString()
    };
    props.enteredFormData(expenseData);
    setIsEditing(false);
  };

  const showFormHandler = () => {
    setIsEditing(true);
  };
  const hideFormHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showFormHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          hideForm={hideFormHandler}
        />
      )}
    </div>
  );
}
