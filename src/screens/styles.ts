import {colours} from '@src/styles/colours';
import {typescale} from '@src/styles/typography';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 5,
    marginHorizontal: 13,
  },
  skankCard: {
    marginTop: 3,
    marginBottom: 5,
  },
  tuneInput: {
    width: 40,
    height: 50,
    padding: 5,
    marginRight: 8,
    fontSize: typescale.h5,
    color: colours.quizDark,
  },
  tuneCard: {
    flexDirection: 'row',
    borderColor: colours.quizDark,
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 8,
    paddingVertical: 3,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tuneDetails: {
    flexDirection: 'column',
    flex: 1,
  },
  tuneLength: {
    marginRight: 8,
  },
  tuneButton: {
    paddingLeft: 13,
    paddingRight: 8,
    flexShrink: 1,
  },
  answerContainer: {
    paddingVertical: 5,
    paddingRight: 8,
    paddingLeft: 13,
    borderColor: colours.quizDark,
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 8,
  },
  trueGreen: {
    backgroundColor: colours.trueGreen,
  },
  falseRed: {
    backgroundColor: colours.falseRed,
  },
  headerMenu: {
    marginLeft: 21,
  },
});
