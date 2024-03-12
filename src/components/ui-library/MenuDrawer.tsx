import React from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HamburgerIcon from '@assets/icons/HamburgerIcon';
import {styles} from '@src/screens/styles';
import {RootStackParamList} from '@src/utils/types';
import {View} from 'react-native';

type DrawerNavProp = DrawerNavigationProp<RootStackParamList>;

export const MenuIcon = () => {
  const navigation = useNavigation<DrawerNavProp>();
  return (
    <View style={styles.headerMenu}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <HamburgerIcon />
      </TouchableOpacity>
    </View>
  );
};
