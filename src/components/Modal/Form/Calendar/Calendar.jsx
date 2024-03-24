import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useField, useFormikContext } from 'formik';
import './styles.css';

const Calendar = () => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField('date');

  return (
    <DatePicker
      {...field}
      minDate={new Date()}
      name="date"
      calendarStartDay={1}
      selected={(field.value && new Date(field.value)) || new Date()}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
      placeholderText="Booking date"
    />
  );
};

export default Calendar;
