import React, { useState, useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const [show, setShow] = useState(false);

  const dateFormmatedText = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date]
  );

  function showDatePicker() {
    setShow(true);
  }

  function changeDate(event, selectedDate) {
    setShow(false);
    const currentDate = selectedDate || date;

    if (date !== currentDate) {
      onChange(currentDate);
    }
  }

  return (
    <Container>
      <DateButton onPress={showDatePicker}>
        <DateText>{dateFormmatedText}</DateText>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="spinner"
            onChange={changeDate}
            maximumDate={subDays(new Date(), 1)}
          />
        )}
      </DateButton>
    </Container>
  );
}
