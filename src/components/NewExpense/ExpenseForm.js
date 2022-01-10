import { useState } from "react/cjs/react.development";

const ExpenseForm = (props) => {
  const [ubahJudulState, setUbahJudulState] = useState("");
  const [ubahJumlahState, setUbahJumlahState] = useState("");
  const [ubahTglState, setUbahTglState] = useState("");

  const ubahJudul = (event) => {
    setUbahJudulState(event.target.value);
  };

  const ubahJumlah = (event) => {
    setUbahJumlahState(event.target.value);
  };

  const ubahTgl = (event) => {
    setUbahTglState(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      judul: ubahJudulState,
      jumlah: ubahJumlahState,
      tgl: new Date(ubahTglState),
    };

    props.saveExpenseData(expenseData);

    setUbahJudulState("");
    setUbahJumlahState("");
    setUbahTglState("");
  };

  return (
    <form className="apip_bg3 p-3 apip_rounded my-4" onSubmit={submitHandler}>
      <div className="row mx-0 px-0">
        <div className="mb-3 col-5">
          <label className="form-label fw-bold">Title</label>
          <input
            value={ubahJudulState}
            type="text"
            className="form-control apip_rounded"
            onChange={ubahJudul}
          />
        </div>
        <div className="mb-3 col-5">
          <label className="form-label fw-bold">Amount</label>
          <input
            value={ubahJumlahState}
            type="number"
            className="form-control apip_rounded"
            onChange={ubahJumlah}
          />
        </div>
        <div className="mb-3 col-5">
          <label className="form-label fw-bold">Date</label>
          <input
            value={ubahTglState}
            type="date"
            className="form-control apip_rounded"
            onChange={ubahTgl}
          />
        </div>
      </div>

      <div className="d-flex flex-row-reverse">
        <button
          type="submit"
          className="border-0 p-3 text-white text-center apip_rounded_10 apip_bg4 apip_max_width1"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
