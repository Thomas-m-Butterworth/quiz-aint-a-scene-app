import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';
import {useTimerStore} from '../../stores';
import {P} from './TextStyles';

export type ClockTextParams = {
  lowTime: boolean;
  minutes: number;
  remainingSeconds: number;
};
const ClockText: React.FC<ClockTextParams> = ({
  lowTime,
  minutes,
  remainingSeconds,
}) => (
  <View>
    <P style={lowTime ? styles.timerWarning : styles.timerNormal}>{`${
      minutes < 10 ? `0${minutes}` : minutes
    }`}</P>
    <P style={lowTime ? styles.timerWarning : styles.timerNormal}>{`${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`}</P>
  </View>
);
export const Timer = () => {
  const [lowTime, setLowTime] = useState(false);
  const {countState, seconds, startTimer, pauseTimer, reset} = useTimerStore();
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  useEffect(() => {
    if (seconds <= 300) {
      setLowTime(true);
    } else {
      setLowTime(false);
    }
  }, [seconds, lowTime]);

  return (
    <TouchableOpacity
      style={styles.timer}
      onLongPress={reset}
      onPress={countState === 'timing' ? pauseTimer : startTimer}>
      <ClockText
        lowTime={lowTime}
        minutes={minutes}
        remainingSeconds={remainingSeconds}
      />
    </TouchableOpacity>
  );
};
