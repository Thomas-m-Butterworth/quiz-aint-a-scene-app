import React from 'react';
import {StyleSheet, View} from 'react-native';
import SetTimer from '../ui-library/SetTimer';
import {P} from '../ui-library/TextStyles';

const styles = StyleSheet.create({
  timersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  container: {
    flexDirection: 'column',
  },
  title: {
    marginBottom: 5,
    marginLeft: 8,
  },
});

export const TimersRow = () => (
  <View style={styles.container}>
    <P style={styles.title}>Set Timers</P>
    <View style={styles.timersContainer}>
      <SetTimer value={10} />
      <SetTimer value={20} />
      <SetTimer value={55} />
    </View>
  </View>
);
