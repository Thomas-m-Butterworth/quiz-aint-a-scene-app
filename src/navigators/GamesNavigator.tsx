import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../utils/types';
import BlinkIcon from '@assets/icons/BlinkIcon';
import WrestleIcon from '@assets/icons/WrestleIcon';
import WhatsAppIcon from '@assets/icons/WhatsAppIcon';
import SkaIcon from '@assets/icons/SkaIcon';
import TuneIcon from '@assets/icons/TuneIcon';
import OpinionIcon from '@assets/icons/OpinionIcon';
import {Skankovich} from '@src/screens/Skankovich';
import {NameTuneScreen} from '@src/screens/NameTuneScreen';
import {WhatsAppScreen} from '@src/screens/WhatsAppScreen';
import {EmOpinionsScreen} from '@src/screens/EmOpinionsScreen';
import {Bantz182Screen} from '@src/screens/Bantz182Screen';
import {WrestleMania} from '@src/screens/WrestleMania';
import {MenuIcon} from '@src/components/ui-library/MenuDrawer';
import ScoreCard from '@src/components/ScoreCard';
import {Timer} from '@src/components/ui-library/Timer';

const Tab = createBottomTabNavigator<RootStackParamList>();

const OPTIONS = {
  tabBarLabel: () => null,
  headerLeft: MenuIcon,
  headerTitle: ScoreCard,
  headerRight: Timer,
  headerTitleAlign: 'center' as 'center',
  headerStyle: {height: 85},
};

export const GamesNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="EmoPinions"
      component={EmOpinionsScreen}
      initialParams={{name: 'EmoPinions'}}
      options={({route}) => ({
        title: route.params.name,
        tabBarIcon: OpinionIcon,
        ...OPTIONS,
      })}
    />
    <Tab.Screen
      name="NameThatTune"
      component={NameTuneScreen}
      initialParams={{name: 'Name That Tune'}}
      options={({route}) => ({
        title: route.params.name,
        tabBarIcon: TuneIcon,
        ...OPTIONS,
      })}
    />
    <Tab.Screen
      name="Bantz182"
      component={Bantz182Screen}
      initialParams={{name: 'Bantz-182'}}
      options={({route}) => ({
        title: route.params.name,
        tabBarIcon: BlinkIcon,
        ...OPTIONS,
      })}
    />
    <Tab.Screen
      name="WhatsAppAge"
      component={WhatsAppScreen}
      initialParams={{name: 'WhatsApp Age Again'}}
      options={({route}) => ({
        title: route.params.name,
        tabBarIcon: WhatsAppIcon,
        ...OPTIONS,
      })}
    />
    <Tab.Screen
      name="WrestlingMania"
      component={WrestleMania}
      initialParams={{name: 'Wrestling With Mania'}}
      options={({route}) => ({
        title: route.params.name,
        tabBarIcon: WrestleIcon,
        ...OPTIONS,
      })}
    />
    <Tab.Screen
      name="WeirdAlSkank"
      component={Skankovich}
      initialParams={{
        name: 'Weird Al Skankovich',
      }}
      options={({route}) => ({
        title: route.params.name,
        tabBarIcon: SkaIcon,
        ...OPTIONS,
      })}
    />
  </Tab.Navigator>
);
