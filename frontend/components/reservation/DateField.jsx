import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateField = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker locale="ru" selected={startDate} onChange={date => setStartDate(date)}/>
  );
}

export default DateField;