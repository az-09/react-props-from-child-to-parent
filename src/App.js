import { useState } from "react";
import DateRangePickers from "./DateRangePickers";

function App() {
  const [dates, setDates] = useState({
    fromDate: "2021-01-01",
    toDate: "2021-04-01",
  });

  const handleParameters = (e) => {
    setDates({
      ...dates,
      [e.target.id]: e.target.value,
    });
  };
  console.log(dates);

  return (
    <>
      <DateRangePickers dates={dates} handleParameters={handleParameters} />
    </>
  );
}

export default App;
