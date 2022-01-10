import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [judul, setJudul] = useState(props.title);

  const gantiJudul = () => {
    setJudul("Update!");
  };

  return (
    <div className="row px-0 mx-0 apip_rounded apip_bg1 shadow d-flex my-3 h4 py-3">
      <ExpenseDate date={props.date} />
      <div className="col-10 row mx-0 px-0">
        <div className="col-8 mx-0 px-0 fw-bold my-auto">{judul}</div>
        <div className="col-2 mx-0 px-0 apip_bg2 apip_rounded text-white fw-bold text-center py-3 my-auto apip_max_height1">
          ${props.amount}
        </div>
        <div className="col-2 mx-0 px-0 my-auto h6 mx-auto px-3">
          <button onClick={gantiJudul}>Change Title</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
