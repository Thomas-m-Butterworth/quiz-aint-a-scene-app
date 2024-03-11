import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '@src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {GamesNavigator} from '@navigators/GamesNavigator';

const Drawer = createDrawerNavigator();

export const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            headerTitle: '',
            headerTransparent: true,
          })}
        />
        <Drawer.Screen
          name="Games"
          component={GamesNavigator}
          options={() => ({headerShown: false})}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
