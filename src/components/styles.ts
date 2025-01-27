import {colours} from '@src/styles/colours';
import {typescale} from '@src/styles/typography';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scoreCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  scoreText: {
    color: colours.quizDark,
    fontSize: typescale.p,
  },
  timerNormal: {
    color: colours.quizDark,
  },
  timerWarning: {
    color: colours.falseRed,
  },
  individualScoreContainer: {
    flexDirection: 'row',
    maxHeight: 50,
    justifyContent: 'space-between',
  },
  scoreAdjusters: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  resetClicker: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    padding: 3,
  },
  numberScore: {
    justifyContent: 'center',
    marginLeft: 8,
    marginRight: 8,
    width: 20,
  },
  timer: {
    flexDirection: 'column',
    marginRight: 21,
    color: colours.quizDark,
    alignItems: 'center',
  },
  teamIcon: {
    height: 50,
  },
});

export const getScoreCardStyle = (side: 'left' | 'right') => {
  return StyleSheet.create({
    individualScoreContainer: {
      flexDirection: side === 'left' ? 'row' : 'row-reverse',
      marginLeft: side === 'left' ? 0 : 13,
      marginRight: side === 'right' ? 0 : 13,
      maxHeight: 50,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
};
