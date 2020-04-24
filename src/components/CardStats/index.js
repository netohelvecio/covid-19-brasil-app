import React from 'react';

import { Container, TitleStats, ValueStats } from './styles';

export default function CardStats({ name, value, color }) {
  return (
    <Container color={color}>
      <TitleStats>{name}</TitleStats>

      <ValueStats>{value}</ValueStats>
    </Container>
  );
}
