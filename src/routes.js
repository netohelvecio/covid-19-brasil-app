import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import BrazilStats from './pages/BrazilStats';
import GraphStats from './pages/GraphStats';

const Tab = createBottomTabNavigator();

export default function Routes() {
  console.log("coe")

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Brazil"
        tabBarOptions={{
          activeTintColor: '#473f97',
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          tabStyle: {
            paddingBottom: 2,
            paddingTop: 5,
          },
        }}
      >
        <Tab.Screen
          name="Brazil"
          component={BrazilStats}
          options={{
            tabBarLabel: 'Brasil',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="info" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="World"
          component={GraphStats}
          options={{
            tabBarLabel: 'Gráficos',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="chart-line"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
