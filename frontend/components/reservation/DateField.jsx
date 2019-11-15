import { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);
import "react-datepicker/dist/react-datepicker.css";

const DateField = (props) => {
  const [startDate] = useState(new Date());

  return (
    <DatePicker locale="ru" selected={startDate} onChange={(date) => props.handleChangeDate(date)} value={props.currentDate} />
  );
}

export default DateField;