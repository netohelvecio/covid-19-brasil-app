import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.color};
  padding: 12px 16px;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 5};
  shadow-opacity: 0.30;
  shadow-radius:  4;
  elevation: 5;
  flex: 1;
  margin: 5px;
`;

export const TitleStats = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
`;

export const ValueStats = styled.Text`
  font-size: 22px;
  color: #fff;
`;
