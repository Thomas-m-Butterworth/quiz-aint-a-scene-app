import React, {useState} from 'react';
import SoundButton from '@src/components/SoundButton';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from './styles';
import {P} from '@src/components/ui-library/TextStyles';
import useShuffledData from '@src/hooks/useShuffledData';
import useGamesStore from '@src/stores/gamesStore/gamesStore';

type TuneType = {
  id: string;
  song: string;
  artist: string;
  length: string;
  sound: string;
};

export const NameTuneScreen = () => {
  const {games: gamesData} = useGamesStore();
  const tune: TuneType[] = gamesData.nameThatTune;
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
          <P variant="caption">{item.artist}</P>
        </View>
        <Text style={styles.tuneLength}>{item.length}</Text>
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
