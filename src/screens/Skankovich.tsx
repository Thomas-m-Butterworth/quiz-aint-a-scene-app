import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {P} from '@src/components/ui-library/TextStyles';
import useShuffledData from '@src/hooks/useShuffledData';
import {colours} from '@src/styles/colours';
import useGamesStore from '@src/stores/gamesStore/gamesStore';
import {EmoOrNotType} from '@src/stores/gamesStore/types';

export const Skankovich = () => {
  const {games: gamesData} = useGamesStore();
  const skank: EmoOrNotType[] = gamesData.skankovich;
  const data = useShuffledData<EmoOrNotType>(skank);
  const [pressed, setPressed] = useState<Array<boolean>>(
    new Array(skank.length).fill(false),
  );
  const {trueGreen, falseRed} = colours;

  const renderItem = ({item, index}: {item: EmoOrNotType; index: number}) => {
    const text = StyleSheet.create({
      strike: {
        textDecorationLine: pressed[index] ? 'line-through' : 'none',
      },
      skankContainer: {
        borderColor: item.ska ? trueGreen : falseRed,
      },
    });

    return (
      <View style={[styles.answerContainer, text.skankContainer]}>
        <TouchableOpacity
          style={styles.skankCard}
          onPress={() => {
            const newPressed = [...pressed];
            newPressed[index] = !newPressed[index];
            setPressed(newPressed);
          }}>
          <P style={text.strike}>{item.name}</P>
        </TouchableOpacity>
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
