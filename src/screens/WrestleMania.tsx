import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {P} from '@src/components/ui-library/TextStyles';
import useShuffledData from '@src/hooks/useShuffledData';
import {colours} from '@src/styles/colours';
import useGamesStore, {EmoOrNotType} from '@src/stores/gamesStore/gamesStore';

export const WrestleMania = () => {
  const {games: gamesData} = useGamesStore();
  const wrestlemania: EmoOrNotType[] = gamesData.wrestlemania;
  const data = useShuffledData<EmoOrNotType>(wrestlemania);
  const [pressed, setPressed] = useState<Array<boolean>>(
    new Array(wrestlemania.length).fill(false),
  );
  const {trueGreen, falseRed} = colours;

  const renderItem = ({item, index}: {item: EmoOrNotType; index: number}) => {
    const text = StyleSheet.create({
      strike: {
        textDecorationLine: pressed[index] ? 'line-through' : 'none',
      },
      wrestlemaniaContainer: {
        borderColor: item.wrestling ? trueGreen : falseRed,
      },
    });

    return (
      <View style={[styles.answerContainer, text.wrestlemaniaContainer]}>
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
