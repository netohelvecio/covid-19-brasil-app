import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import BrazilStats from './pages/BrazilStats';
import WorldStats from './pages/WorldStats';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Brazil"
        tabBarOptions={{
          activeTintColor: '#7E3F8F',
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
              <MaterialIcons name="public" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="World"
          component={WorldStats}
          options={{
            tabBarLabel: 'Mundo',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
