const ExpenseForm = () => {
  return (
    <form className="apip_bg3 p-3 apip_rounded my-4">
      <div className="row mx-0 px-0">
        <div className="mb-3 col-5">
          <label className="form-label fw-bold">Title</label>
          <input type="text" className="form-control apip_rounded" />
        </div>
        <div className="mb-3 col-5">
          <label className="form-label fw-bold">Amount</label>
          <input type="number" className="form-control apip_rounded" />
        </div>
        <div className="mb-3 col-5">
          <label className="form-label fw-bold">Date</label>
          <input type="date" className="form-control apip_rounded" />
        </div>
      </div>

      <div className="d-flex flex-row-reverse">
        <div
          type="submit"
          className="p-3 text-white text-center apip_rounded_10 apip_bg4 apip_max_width1"
        >
          Add Expense
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
