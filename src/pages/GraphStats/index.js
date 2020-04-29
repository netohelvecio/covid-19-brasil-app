import React, { useEffect, useState } from 'react';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts';
import { format, parseISO, subDays } from 'date-fns';

import api from '../../services/apiPostman';
import formatNumber from '../../utils/formatNumber';

import {
  Container,
  ContainerChart,
  TitleChart,
  ContainerChartChildren,
  ContainerLabelChart,
  LabelChart,
  LabelChartNewCases,
} from './styles';

export default function GraphStats() {
  const [cases, setCases] = useState([]);
  const [casesPerDay, setCasesPerDay] = useState([]);
  const [maxCases, setMaxCases] = useState(0);
  const [dateStart, setDateStart] = useState(
    format(new Date(2020, 1, 26), 'yyyy-MM-dd')
  );
  const [dateStartNewCases, setDateStartNewCases] = useState(
    format(subDays(new Date(), 10), 'yyyy-MM-dd')
  );
  const [dateEnd, setDateEnd] = useState(
    format(subDays(new Date(), 1), 'yyyy-MM-dd')
  );

  useEffect(() => {
    async function loadCases() {
      const from = `${dateStart}T00:00:00Z`;
      const to = `${dateEnd}T00:00:00Z`;

      const response = await api.get(`status/confirmed`, {
        params: {
          from,
          to,
        },
      });

      const data = response.data.map((c) => ({
        case: c.Cases,
        date: format(parseISO(c.Date), 'dd/MM'),
      }));

      const dataFilter = data.filter((d) => {
        return d.case !== 0;
      });

      const dataFilterDay = dataFilter.filter((d, index) => {
        return index % 2 !== 0;
      });

      setMaxCases(dataFilterDay[dataFilterDay.length - 1].case);
      setCases(dataFilterDay);
    }

    loadCases();
  }, [dateStart, dateEnd]);

  useEffect(() => {
    async function loadNewCases() {
      const from = `${dateStartNewCases}T00:00:00Z`;
      const to = `${dateEnd}T00:00:00Z`;

      const response = await api.get(`status/confirmed`, {
        params: {
          from,
          to,
        },
      });

      const data = response.data.map((c) => ({
        case: c.Cases,
        date: format(parseISO(c.Date), 'dd/MM'),
      }));

      const dataFilter = data.filter((d) => {
        return d.case !== 0;
      });

      const dataCasesPerDay = dataFilter.map((d, index) => {
        if (index !== 0) {
          const casesPerDay_ = d.case - dataFilter[index - 1].case;

          return { date: d.date, casesPerDay_ };
        }

        return null;
      });

      const dataCasesPerDayFilter = dataCasesPerDay.filter((d) => {
        return d !== null;
      });

      setCasesPerDay(dataCasesPerDayFilter);
    }

    loadNewCases();
  }, [dateStartNewCases, dateEnd]);

  return (
    <Container>
      <TitleChart>Acumulado de casos</TitleChart>

      <ContainerChart>
        <YAxis
          data={cases.map((c) => c.case)}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{
            fill: '#fff',
            fontSize: 12,
          }}
          numberOfTicks={10}
          formatLabel={(value) => formatNumber(value)}
          min={0}
          max={maxCases}
        />

        <ContainerChartChildren>
          <LineChart
            style={{ flex: 1, marginLeft: 10 }}
            data={cases.map((c) => c.case)}
            svg={{ stroke: '#fff' }}
            contentInset={{ top: 10, bottom: 10 }}
            numberOfTicks={10}
          >
            <Grid />
          </LineChart>

          <ContainerLabelChart>
            <LabelChart>26/02</LabelChart>

            <LabelChart>{format(subDays(new Date(), 1), 'dd/MM')}</LabelChart>
          </ContainerLabelChart>
        </ContainerChartChildren>
      </ContainerChart>

      <TitleChart>Casos novos por dia</TitleChart>

      <ContainerChart>
        <YAxis
          data={casesPerDay.map((c) => c.casesPerDay_)}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{
            fill: '#fff',
            fontSize: 12,
          }}
          numberOfTicks={10}
          formatLabel={(value) => formatNumber(value)}
        />

        <ContainerChartChildren>
          <LineChart
            style={{ flex: 1, marginLeft: 10 }}
            data={casesPerDay.map((c) => c.casesPerDay_)}
            svg={{ stroke: '#fff' }}
            contentInset={{ top: 10, bottom: 10 }}
            numberOfTicks={10}
          >
            <Grid />
          </LineChart>

          <ContainerLabelChart>
            {casesPerDay.map((caseDay) => (
              <LabelChartNewCases key={caseDay.date}>
                {caseDay.date}
              </LabelChartNewCases>
            ))}
          </ContainerLabelChart>
        </ContainerChartChildren>
      </ContainerChart>
    </Container>
  );
}
