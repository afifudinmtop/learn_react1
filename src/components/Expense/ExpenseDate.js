const ExpenseDate = (props) => {
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
      <div className="text-center text-white bg-dark apip_rounded apip_w70 mx-auto py-3">
        <div className="h5 mb-0">{bulan}</div>
        <div className="h6 mb-0">{tahun}</div>
        <div className="h2 mb-0">{hari}</div>
      </div>
    </div>
  );
};
export default ExpenseDate;
