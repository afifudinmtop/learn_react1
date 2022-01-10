import ExpenseForm from "./ExpenseForm";
import { v4 as uuid } from "uuid";

const NewExpense = (props2) => {
  const saveExpenseData = (props) => {
    const expenseData = {
      ...props,
      id: uuid(),
    };
    // console.log(expenseData);
    props2.addExpanse(expenseData);
  };

  return (
    <div>
      <ExpenseForm saveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
