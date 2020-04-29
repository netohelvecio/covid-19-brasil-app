import React, { useState, useMemo, useEffect } from 'react';
import { Alert } from 'react-native';
import { format, subDays, addDays } from 'date-fns';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import DateInput from '../../components/DateInput';
import CardStats from '../../components/CardStats';
import LoadingSkeleton from '../../components/Loading';

import {
  Container,
  TextCovid,
  ContainerDate,
  ButtonDate,
  ContainerCardsStats,
  ContainerCardsStatsChild,
} from './styles';

export default function BrazilStats() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(subDays(new Date(), 1));

  const dateFormmated = useMemo(() => format(date, 'yyyy-MM-dd'), [date]);

  function addDay() {
    const dateAdd = addDays(date, 1);
    setDate(dateAdd);
  }

  function subDay() {
    const dateSub = subDays(date, 1);
    setDate(dateSub);
  }

  useEffect(() => {
    function handleStats() {
      setLoading(true);

      api
        .get('report/country/name', {
          params: {
            name: 'brazil',
            date: dateFormmated,
          },
        })
        .then((res) => {
          setStats(res.data[0].provinces[0]);
          setLoading(false);
        })
        .catch(() => {
          Alert.alert('Erro ao consultar API');
          setLoading(false);
        });
    }

    handleStats();
  }, [dateFormmated]);

  return (
    <Container>
      <TextCovid>Covid-19 Brasil</TextCovid>
      <ContainerDate>
        <ButtonDate onPress={subDay}>
          <MaterialIcons name="chevron-left" color="#fff" size={40} />
        </ButtonDate>

        <DateInput date={date} onChange={setDate} />

        <ButtonDate onPress={addDay} disabled={date > subDays(new Date(), 2)}>
          <MaterialIcons
            name="chevron-right"
            color={
              date > subDays(new Date(), 2)
                ? 'rgba(255, 255, 255, 0.5)'
                : '#fff'
            }
            size={40}
          />
        </ButtonDate>
      </ContainerDate>

      <ContainerCardsStats>
        <ContainerCardsStatsChild>
          {loading ? (
            <LoadingSkeleton loading={loading} />
          ) : (
            <CardStats
              name="Casos"
              value={stats.confirmed || 0}
              color="#ffb259"
            />
          )}

          {loading ? (
            <LoadingSkeleton loading={loading} />
          ) : (
            <CardStats
              name="Mortes"
              value={stats.deaths || 0}
              color="#ff5959"
            />
          )}
        </ContainerCardsStatsChild>

        <ContainerCardsStatsChild>
          {loading ? (
            <LoadingSkeleton loading={loading} />
          ) : (
            <CardStats
              name="Recuperados"
              value={stats.recovered || 0}
              color="#4cd97b"
            />
          )}

          {loading ? (
            <LoadingSkeleton loading={loading} />
          ) : (
            <CardStats
              name="Ativos"
              value={stats.active || 0}
              color="#4cb5ff"
            />
          )}
        </ContainerCardsStatsChild>
      </ContainerCardsStats>
    </Container>
  );
}
