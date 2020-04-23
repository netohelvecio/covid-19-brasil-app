import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import { MaterialIcons } from '@expo/vector-icons';

import DateInput from '../../components/DateInput';

import { Container, TextCovid, ContainerDate, ButtonDate } from './styles';

export default function BrazilStats() {
  const [date, setDate] = useState(subDays(new Date(), 1));

  const dateFormmated = useMemo(() => format(date, 'yyyy-MM-dd'), [date]);

  console.log(dateFormmated);

  function addDay() {
    const dateAdd = addDays(date, 1);
    setDate(dateAdd);
  }

  function subDay() {
    const dateSub = subDays(date, 1);
    setDate(dateSub);
  }

  return (
    <Container>
      <TextCovid>Covid-19 estatísticas</TextCovid>

      <ContainerDate>
        <ButtonDate onPress={subDay}>
          <MaterialIcons name="chevron-left" color="#fff" size={30} />
        </ButtonDate>

        <DateInput date={date} onChange={setDate} />

        <ButtonDate onPress={addDay} disabled={date > subDays(new Date(), 2)}>
          <MaterialIcons name="chevron-right" color="#fff" size={30} />
        </ButtonDate>
      </ContainerDate>
    </Container>
  );
}
