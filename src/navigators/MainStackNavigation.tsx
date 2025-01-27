import React, {useCallback} from 'react';
import HomeScreen from '@src/screens/HomeScreen';
import {GamesNavigator} from '@navigators/GamesNavigator';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import useGamesStore from '@src/stores/gamesStore/gamesStore';
import BlobbyLoader from '@src/components/ui-library/BlobbyLoader';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TimersRow} from '@src/components/TimersRow/TimersRow';
import GameSelectionList from '@src/components/GamesSelectionList/GamesSelectionList';

const screenHeight = Dimensions.get('window').height;
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
  },
  bottomRight: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  menuItems: {
    flex: 1,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginBottom: 15,
  },
});

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const {fetchGames, isLoading} = useGamesStore();
  return (
    <View style={styles.container}>
      <DrawerContentScrollView style={styles.menuItems} {...props}>
        <View style={styles.menuItems}>
          <DrawerItemList {...props} />
          <GameSelectionList />
          <DrawerItem label={'Refresh Games'} onPress={() => fetchGames()} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomBar}>
        <TimersRow />
        {isLoading ? (
          <BlobbyLoader style={styles.bottomRight} height={60} />
        ) : (
          <View style={styles.bottomRight} />
        )}
      </View>
    </View>
  );
};

export const MainStackNavigation = () => {
  const drawerContent = useCallback(
    (props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />,
    [],
  );
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={drawerContent}>
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
