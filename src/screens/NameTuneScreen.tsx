import React, {useState} from 'react';
import SoundButton from '@src/components/SoundButton';
import gamesData from '@assets/api/nmitb-games.json';
import {FlatList, SafeAreaView, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from './styles';
import {H, P} from '@src/components/ui-library/TextStyles';
import useShuffledData from '@src/hooks/useShuffledData';

type TuneType = {
  id: string;
  song: string;
  artist: string;
  length: string;
  sound: string;
};

export const NameTuneScreen = () => {
  const tune: TuneType[] = gamesData.games.nameThatTune;
  const data = useShuffledData(tune);
  const [durations, setDurations] = useState<Array<number>>(
    new Array(tune.length).fill(30),
  );

  const onChangeDuration = (e: string, index: number) => {
    const newDurations = [...durations];
    newDurations[index] = e ? parseInt(e, 10) : 0;
    setDurations(newDurations);
  };

  const renderItem = ({item, index}: {item: TuneType; index: number}) => {
    return (
      <View style={styles.tuneCard}>
        <SoundButton
          sound={item.sound}
          duration={durations[index]}
          style={styles.tuneButton}
        />
        <View style={styles.tuneDetails}>
          <P>{item.song}</P>
          <P>{item.artist}</P>
        </View>
        <H variant="h5" style={styles.tuneLength}>
          {item.length}
        </H>
        <TextInput
          style={styles.tuneInput}
          value={durations[index] !== 0 ? String(durations[index]) : ''}
          onChangeText={e => onChangeDuration(e, index)}
          keyboardType="numeric"
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled
      />
    </SafeAreaView>
  );
};
