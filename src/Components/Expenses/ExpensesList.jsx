import "./ExpensesList.css";
import ExpenseItems from "./ExpenseItems";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((items) => (
        <li>
          <ExpenseItems
            key={items.id}
            title={items.title}
            date={items.date}
            amount={items.amount}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
