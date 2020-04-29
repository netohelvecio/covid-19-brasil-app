import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #473f97;
  padding-top: 0;
`;

export const TitleChart = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const ContainerChart = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ContainerChartChildren = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ContainerLabelChart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
`;

export const LabelChart = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-bottom: -10px;
`;

export const LabelChartNewCases = styled.Text`
  color: #fff;
  font-size: 8px;
`;
