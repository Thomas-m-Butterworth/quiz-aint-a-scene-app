import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import useTimerStore from '@src/stores/timerStore/timerStore';
import {typescale} from '@src/styles/typography';
import {colours} from '@src/styles/colours';

const styles = StyleSheet.create({
  timerButton: {
    borderWidth: 1,
    borderColor: colours.quizDark,
    marginHorizontal: 5,
    borderRadius: 50,
    padding: 10,
  },
  timerText: {
    fontSize: typescale.h5,
    color: '#000',
  },
});

type SetTimerType = {
  value: number;
};

const SetTimer = ({value}: SetTimerType) => {
  const {setTimer} = useTimerStore();

  const handlePress = () => {
    setTimer(value * 60);
  };

  return (
    <TouchableOpacity style={styles.timerButton} onPress={handlePress}>
      <Text style={styles.timerText}>{value.toString()}</Text>
    </TouchableOpacity>
  );
};

export default SetTimer;
