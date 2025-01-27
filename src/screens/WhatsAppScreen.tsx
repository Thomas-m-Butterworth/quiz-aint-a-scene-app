import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {P} from '@src/components/ui-library/TextStyles';
import useShuffledData from '@src/hooks/useShuffledData';
import {colours} from '@src/styles/colours';
import useGamesStore from '@src/stores/gamesStore/gamesStore';

type WhatsAppQuestionType = {
  id: string;
  quote: string;
  emo: boolean;
  sender?: string;
  band?: string;
  song?: string;
};

export const WhatsAppScreen = () => {
  const {games: gamesData} = useGamesStore();
  const whatsapp: WhatsAppQuestionType[] = gamesData.whatsappAge;
  const data = useShuffledData<WhatsAppQuestionType>(whatsapp);
  const [pressed, setPressed] = useState<Array<boolean>>(
    new Array(whatsapp.length).fill(false),
  );
  const {trueGreen, falseRed} = colours;

  const renderItem = ({
    item,
    index,
  }: {
    item: WhatsAppQuestionType;
    index: number;
  }) => {
    const getContainerStyle = () => {
      if (!pressed[index]) {
        return styles.answerContainer;
      }
      return [
        styles.answerContainer,
        item.emo ? styles.trueGreen : styles.falseRed,
      ];
    };
    const text = StyleSheet.create({
      strike: {
        textDecorationLine: pressed[index] ? 'line-through' : 'none',
      },
      whatsappContainer: {
        borderColor: item.emo ? trueGreen : falseRed,
      },
    });

    return (
      <View
        style={[
          getContainerStyle(),
          styles.answerContainer,
          text.whatsappContainer,
        ]}>
        <TouchableOpacity
          style={styles.skankCard}
          onPress={() => {
            const newPressed = [...pressed];
            newPressed[index] = !newPressed[index];
            setPressed(newPressed);
          }}>
          <P>{item.quote}</P>
          {item.emo ? (
            <P variant="caption">
              {item.song} - {item.band}
            </P>
          ) : (
            <P variant="caption">{item.sender}</P>
          )}
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
