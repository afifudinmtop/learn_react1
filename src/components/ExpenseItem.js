import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="rounded bg-white shadow d-flex mt-3 h3 py-3">
      <div className="px-3 my-auto">07/01/2022</div>
      <div className="row mx-0 px-0 w-100">
        <div className="col-9 mx-0 px-0 fw-bold my-auto">Car Insurance</div>
        <div className="col-2 mx-0 px-0 bg-success rounded text-white fw-bold text-center py-2">
          $294.67
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
