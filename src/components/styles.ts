import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scoreCardContainer: {
    flexDirection: 'row',
    maxHeight: 50,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 21,
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
    },
  });
};
