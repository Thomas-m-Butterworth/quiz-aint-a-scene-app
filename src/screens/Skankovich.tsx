import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import gamesData from '@assets/api/nmitb-games.json';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SkankovichQuestionType} from '@src/utils/types';
import {styles} from './styles';
import {P} from '@src/components/ui-library/TextStyles';
import useShuffledData from '@src/hooks/useShuffledData';
import {colours} from '@src/styles/colours';

export const Skankovich = () => {
  const skank: SkankovichQuestionType[] = gamesData.games.skankovich;
  const data = useShuffledData<SkankovichQuestionType>(skank);
  const [pressed, setPressed] = useState<Array<boolean>>(
    new Array(skank.length).fill(false),
  );
  const {trueGreen, falseRed} = colours;

  const renderItem = ({
    item,
    index,
  }: {
    item: SkankovichQuestionType;
    index: number;
  }) => {
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
