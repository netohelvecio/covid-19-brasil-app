import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar backgroundColor="#473f97" barStyle="light-content" />
    </>
  );
}
