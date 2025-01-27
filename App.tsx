/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {MainStackNavigation} from './src/navigators/MainStackNavigation';
import useGamesStore from './src/stores/gamesStore/gamesStore';

const App = () => {
  const {fetchGames} = useGamesStore();

  useEffect(() => {
    fetchGames();
  }, []);

  return <MainStackNavigation />;
};

export default App;
