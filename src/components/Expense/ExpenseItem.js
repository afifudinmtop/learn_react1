import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="row px-0 mx-0 apip_rounded apip_bg1 shadow d-flex my-3 h4 py-3">
      <ExpenseDate date={props.date} />
      <div className="col-10 row mx-0 px-0">
        <div className="col-9 mx-0 px-0 fw-bold my-auto">{props.title}</div>
        <div className="col-2 mx-0 px-0 apip_bg2 apip_rounded text-white fw-bold text-center py-3 my-auto apip_max_height1">
          ${props.amount}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
