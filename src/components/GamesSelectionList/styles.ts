import {GameIdType, GameLibraryEntryType} from '@src/stores/gamesStore/types';
import {colours} from '@src/styles/colours';
import {StyleSheet} from 'react-native';

export const getSelectionStyles = (
  selectedGames: GameIdType[],
  game: GameLibraryEntryType,
) =>
  StyleSheet.create({
    selectionListItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: selectedGames.includes(game.id)
        ? colours.quizYellow
        : 'white',
    },
  });

export const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
  },
  listContainer: {
    marginTop: 25,
    marginBottom: 25,
  },
});
