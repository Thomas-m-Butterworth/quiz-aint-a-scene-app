import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import gamesData from '@assets/api/nmitb-games.json';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {P} from '@src/components/ui-library/TextStyles';
import useShuffledData from '@src/hooks/useShuffledData';
import {colours} from '@src/styles/colours';

type WrestleManiaQuestionType = {
  id: string;
  prompt: string;
  wrestling: boolean;
};

export const WrestleMania = () => {
  const wrestlemania: WrestleManiaQuestionType[] = gamesData.games.wrestlemania;
  const data = useShuffledData<WrestleManiaQuestionType>(wrestlemania);
  const [pressed, setPressed] = useState<Array<boolean>>(
    new Array(wrestlemania.length).fill(false),
  );
  const {trueGreen, falseRed} = colours;

  const renderItem = ({
    item,
    index,
  }: {
    item: WrestleManiaQuestionType;
    index: number;
  }) => {
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
          <P style={text.strike}>{item.prompt}</P>
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
