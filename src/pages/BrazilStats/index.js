import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import { MaterialIcons } from '@expo/vector-icons';

import DateInput from '../../components/DateInput';
import CardStats from '../../components/CardStats';

import {
  Container,
  TextCovid,
  ContainerDate,
  ButtonDate,
  ContainerCardsStats,
  ContainerCardsStatsChild,
} from './styles';

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
          <MaterialIcons name="chevron-left" color="#fff" size={40} />
        </ButtonDate>

        <DateInput date={date} onChange={setDate} />

        <ButtonDate onPress={addDay} disabled={date > subDays(new Date(), 2)}>
          <MaterialIcons name="chevron-right" color="#fff" size={40} />
        </ButtonDate>
      </ContainerDate>

      <ContainerCardsStats>
        <ContainerCardsStatsChild>
          <CardStats name="Casos" value={3000} color="#ffb259" />
          <CardStats name="Mortes" value={3000} color="#ff5959" />
        </ContainerCardsStatsChild>

        <ContainerCardsStatsChild>
          <CardStats name="Recuperados" value={3000} color="#4cd97b" />
          <CardStats name="Ativos" value={3000} color="#4cb5ff" />
        </ContainerCardsStatsChild>
      </ContainerCardsStats>
    </Container>
  );
}
