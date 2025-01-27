import {useGamesStore} from '@src/stores';
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {getSelectionStyles, styles} from './styles';

const GameSelectionList = () => {
  const {selectedGames, gamesLibrary, toggleSelectedGame} = useGamesStore();

  return (
    <View style={styles.listContainer}>
      {gamesLibrary.map(game => (
        <TouchableOpacity
          key={game.id}
          onPress={() => toggleSelectedGame(game.id)}
          style={getSelectionStyles(selectedGames, game).selectionListItem}>
          {React.createElement(game.icon, {size: 24})}
          <Text style={styles.text}>{game.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default GameSelectionList;
