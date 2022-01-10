const ExpenseFilter = (props) => {
  const gantiFilter = (event) => {
    props.dataGantiFilter(event.target.value);
  };

  return (
    <div className="row mx-0 p-3">
      <div className="col-6 mx-0 px-0 h3 my-auto text-white">
        Filter by year
      </div>
      <div className="col-6 mx-0 px-0 h3 mb-0 d-flex flex-row-reverse">
        <select
          className="form-select apip_max_width1 fw-bold fs-4"
          onChange={gantiFilter}
          value={props.filteredYear}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
