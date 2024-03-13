import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {H} from './TextStyles';
import {styles} from '../styles';
import {useTimerStore} from '@src/stores/timerStore';

export const Timer = () => {
  const [lowTime, setLowTime] = useState(false);
  const {countState, seconds, startTimer, pauseTimer, reset} = useTimerStore();
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  useEffect(() => {
    if (seconds <= 600) {
      setLowTime(true);
    } else {
      setLowTime(false);
    }
  }, [seconds, lowTime]);

  return (
    <View style={styles.timer}>
      <TouchableOpacity
        onLongPress={reset}
        onPress={countState === 'timing' ? pauseTimer : startTimer}>
        <H variant={lowTime ? 'warning' : 'h5'}>
          {`${minutes < 10 ? `0${minutes}` : minutes}`}
        </H>
        <H variant={lowTime ? 'warning' : 'h5'}>
          {`${
            remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
          }`}
        </H>
      </TouchableOpacity>
    </View>
  );
};
