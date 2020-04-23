import React, { useState, useMemo } from 'react';
import { format, subDays } from 'date-fns';

import DateInput from '../components/DateInput';

import { Container, TextCovid } from './styles';

export default function BrazilStats() {
  const [date, setDate] = useState(subDays(new Date(), 1));

  const dateFormmated = useMemo(() => format(date, 'yyyy-MM-dd'), [date]);

  console.log(dateFormmated);

  return (
    <Container>
      <TextCovid>Covid-19 estatísticas</TextCovid>

      <DateInput date={date} onChange={setDate} />
    </Container>
  );
}
