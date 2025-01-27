import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../utils/types';
import BlinkIcon from '@assets/icons/BlinkIcon';
import WrestleIcon from '@assets/icons/WrestleIcon';
import WhatsAppIcon from '@assets/icons/WhatsAppIcon';
import SkaIcon from '@assets/icons/SkaIcon';
import TuneIcon from '@assets/icons/TuneIcon';
import OpinionIcon from '@assets/icons/OpinionIcon';
import NintemoIcon from '@assets/icons/NintemoIcon';
import {Skankovich} from '@src/screens/Skankovich';
import {NameTuneScreen} from '@src/screens/NameTuneScreen';
import {WhatsAppScreen} from '@src/screens/WhatsAppScreen';
import {EmOpinionsScreen} from '@src/screens/EmOpinionsScreen';
import {Bantz182Screen} from '@src/screens/Bantz182Screen';
import {WrestleMania} from '@src/screens/WrestleMania';
import {DrawerNavProp, MenuIcon} from '@src/components/ui-library/MenuDrawer';
import ScoreCard from '@src/components/ScoreCard';
import {Timer} from '@src/components/ui-library/Timer';
import {SuperNintemo} from '@src/screens/SuperNintemo';
import {StyleSheet, View} from 'react-native';
import {H, P} from '@src/components/ui-library/TextStyles';
import {useGamesStore} from '@src/stores';
import {Route, useNavigation} from '@react-navigation/native';
import {GameIdType} from '@src/stores/gamesStore/types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const styles = StyleSheet.create({
  noGamesScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type GameScreenParams = {
  name: string;
};

const OPTIONS = {
  tabBarLabel: () => null,
  headerLeft: MenuIcon,
  headerTitle: ScoreCard,
  headerRight: Timer,
  headerTitleAlign: 'center' as 'center',
  headerStyle: {
    height: 125,
  },
};

const gamesMapping = {
  EmoPinions: {
    component: EmOpinionsScreen,
    initialParams: {name: 'EmoPinions'},
    options: ({route}: {route: Route<string, GameScreenParams>}) => ({
      title: route.params.name,
      tabBarIcon: OpinionIcon,
      ...OPTIONS,
    }),
  },
  SuperNintemo: {
    component: SuperNintemo,
    initialParams: {name: 'Super Nintemo'},
    options: ({route}: {route: Route<string, GameScreenParams>}) => ({
      title: route.params.name,
      tabBarIcon: NintemoIcon,
      ...OPTIONS,
    }),
  },
  WeirdAlSkank: {
    component: Skankovich,
    initialParams: {name: 'Weird Al Skankovich'},
    options: ({route}: {route: Route<string, GameScreenParams>}) => ({
      title: route.params.name,
      tabBarIcon: SkaIcon,
      ...OPTIONS,
    }),
  },
  NameThatTune: {
    component: NameTuneScreen,
    initialParams: {name: 'Name That Tune'},
    options: ({route}: {route: Route<string, GameScreenParams>}) => ({
      title: route.params.name,
      tabBarIcon: TuneIcon,
      ...OPTIONS,
    }),
  },
  Bantz182: {
    component: Bantz182Screen,
    initialParams: {name: 'Bantz-182'},
    options: ({route}: {route: Route<string, GameScreenParams>}) => ({
      title: route.params.name,
      tabBarIcon: BlinkIcon,
      ...OPTIONS,
    }),
  },
  WhatsAppAge: {
    component: WhatsAppScreen,
    initialParams: {name: 'WhatsApp Age Again'},
    options: ({route}: {route: Route<string, GameScreenParams>}) => ({
      title: route.params.name,
      tabBarIcon: WhatsAppIcon,
      ...OPTIONS,
    }),
  },
  WrestlingMania: {
    component: WrestleMania,
    initialParams: {name: 'Wrestling With Mania'},
    options: ({route}: {route: Route<string, GameScreenParams>}) => ({
      title: route.params.name,
      tabBarIcon: WrestleIcon,
      ...OPTIONS,
    }),
  },
};

const generateScreens = (selectedGames: GameIdType[]) => {
  return selectedGames.map(gameId => {
    const {
      component: ScreenComponent,
      initialParams,
      options,
    } = gamesMapping[gameId];

    return (
      <Tab.Screen
        key={gameId}
        name={gameId as keyof RootStackParamList}
        component={ScreenComponent}
        initialParams={initialParams}
        options={options}
      />
    );
  });
};

const NoGamesSelectedScreen = () => {
  const navigation = useNavigation<DrawerNavProp>();
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.noGamesScreen}>
      <H variant="h3">No Games Selected</H>
      <TouchableOpacity onPress={openDrawer}>
        <P>Click here to pick some</P>
      </TouchableOpacity>
    </View>
  );
};

export const GamesNavigator = () => {
  const {selectedGames} = useGamesStore();

  if (!selectedGames.length) {
    return <NoGamesSelectedScreen />;
  }

  return <Tab.Navigator>{generateScreens(selectedGames)}</Tab.Navigator>;
};
