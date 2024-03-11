import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('assets/images/quizsplash.png')}
      style={styles.container}
    />
  );
};

export default HomeScreen;
