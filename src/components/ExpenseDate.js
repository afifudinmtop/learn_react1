function ExpenseDate(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const bulan = months[props.date.getMonth()];
  const hari = props.date.getDate();
  const tahun = props.date.getFullYear();

  return (
    <div className="col-2 mx-0 px-0 my-auto">
      <div className="text-center text-white bg-dark rounded px-3 w-75 mx-auto py-3">
        <div className="h4 mb-0">{bulan}</div>
        <div className="h5 mb-0">{tahun}</div>
        <div className="h1 mb-0">{hari}</div>
      </div>
    </div>
  );
}
export default ExpenseDate;
