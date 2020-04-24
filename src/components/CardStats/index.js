import React from 'react';

import formatNumber from '../../utils/formatNumber';

import { Container, TitleStats, ValueStats } from './styles';

export default function CardStats({ name, value, color }) {
  const numberFormatted = formatNumber(value);

  return (
    <Container color={color}>
      <TitleStats>{name}</TitleStats>

      <ValueStats>{numberFormatted}</ValueStats>
    </Container>
  );
}
