import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {P} from '@src/components/ui-library/TextStyles';
import useShuffledData from '@src/hooks/useShuffledData';
import {colours} from '@src/styles/colours';
import {styles} from '@src/screens/styles';
import useGamesStore from '@src/stores/gamesStore/gamesStore';
import {MultipleChoiceType} from '@src/stores/gamesStore/types';

export const MultiChoiceList = ({game}: {game: string}) => {
  const {games: gamesData} = useGamesStore();
  let screenData;
  switch (game) {
    case 'emopinions':
      screenData = gamesData.emopinions;
      break;
    case 'bantz182':
      screenData = gamesData.bantz182;
      break;
    default:
      screenData = gamesData.emopinions;
  }
  const data = useShuffledData<MultipleChoiceType>(screenData);
  const [pressed, setPressed] = useState<Array<boolean>>(
    new Array(screenData.length).fill(false),
  );
  const {trueGreen} = colours;

  const renderItem = ({
    item,
    index,
  }: {
    item: MultipleChoiceType;
    index: number;
  }) => {
    const text = StyleSheet.create({
      strike: {
        textDecorationLine: pressed[index] ? 'line-through' : 'none',
      },
      correctAnswer: {
        color: trueGreen,
        fontWeight: 'bold',
      },
      answers: {
        paddingLeft: 21,
      },
      question: {
        marginBottom: 3,
      },
    });

    const getAnswerStyle = (key: string) =>
      item.correct === key ? text.correctAnswer : null;

    return (
      <View style={styles.answerContainer}>
        <TouchableOpacity
          style={styles.skankCard}
          onPress={() => {
            const newPressed = [...pressed];
            newPressed[index] = !newPressed[index];
            setPressed(newPressed);
          }}>
          <P style={[text.question, text.strike]}>{item.question}</P>
          <P variant="caption" style={text.strike}>
            {item.asker ? item.asker : null}
          </P>
          <View style={text.answers}>
            <P variant="caption" style={[getAnswerStyle('a'), text.strike]}>
              a - {item.answers.a}
            </P>
            <P variant="caption" style={[getAnswerStyle('b'), text.strike]}>
              b - {item.answers.b}
            </P>
            <P variant="caption" style={[getAnswerStyle('c'), text.strike]}>
              c - {item.answers.c}
            </P>
            <P variant="caption" style={[getAnswerStyle('d'), text.strike]}>
              d - {item.answers.d}
            </P>
          </View>
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
