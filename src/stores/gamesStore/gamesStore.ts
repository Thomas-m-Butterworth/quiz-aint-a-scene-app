import {create} from 'zustand';
import axios from 'axios';
import {cloneDeep} from 'lodash';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GAMES_JSON} from '@env';
import {GameIdType, GameLibraryEntryType, GamesStoreType} from './types';
import OpinionIcon from '@assets/icons/OpinionIcon';
import NintemoIcon from '@assets/icons/NintemoIcon';
import WhatsAppIcon from '@assets/icons/WhatsAppIcon';
import SkaIcon from '@assets/icons/SkaIcon';
import TuneIcon from '@assets/icons/TuneIcon';
import BlinkIcon from '@assets/icons/BlinkIcon';
import WrestleIcon from '@assets/icons/WrestleIcon';

export const handleFetchGames = async (
  set: (state: Partial<GamesStoreType>) => void,
) => {
  set({isLoading: true});
  const gamesJson = GAMES_JSON;
  try {
    const response = await axios.get(gamesJson);
    const gamesData = response.data.games;
    set({games: gamesData});
    set({isLoading: false});
  } catch (error) {
    console.error(error);
  }
};

const handleToggleSelectedGame = (
  set: (state: (prevState: GamesStoreType) => GamesStoreType) => void,
  gameId: GameIdType,
) => {
  set(prevState => {
    const selectedGames = prevState.selectedGames;
    if (selectedGames.includes(gameId)) {
      return {
        ...prevState,
        selectedGames: selectedGames.filter(id => id !== gameId),
      };
    } else {
      return {...prevState, selectedGames: [...selectedGames, gameId]};
    }
  });
};

const gamesLibrary: GameLibraryEntryType[] = [
  {id: 'EmoPinions', name: 'EmoPinions', icon: OpinionIcon},
  {id: 'SuperNintemo', name: 'Super Nintemo', icon: NintemoIcon},
  {id: 'WhatsAppAge', name: 'WhatsApp Age Again?', icon: WhatsAppIcon},
  {id: 'WeirdAlSkank', name: 'Weird Al Skankovich', icon: SkaIcon},
  {id: 'NameThatTune', name: 'Name That Tune', icon: TuneIcon},
  {id: 'Bantz182', name: 'Bantz-182', icon: BlinkIcon},
  {id: 'WrestlingMania', name: 'Wrestling My Mania', icon: WrestleIcon},
];

export const defaultGamesStoreState = {
  games: {
    skankovich: [],
    superNintemo: [],
    celebsHeight: [],
    whatsappAge: [],
    guessTheGraph: [],
    nameThatTune: [],
    emopinions: [],
    bantz182: [],
    wrestlemania: [],
    daylist: [],
  },
  gamesLibrary,
  selectedGames: ['WhatsAppAge', 'WeirdAlSkank'] as GameIdType[],
  isLoading: false,
};

const useGamesStore = create(
  persist<GamesStoreType>(
    set => ({
      ...cloneDeep(defaultGamesStoreState),
      setIsLoading: (loading: boolean) => set(() => ({isLoading: loading})),
      fetchGames: () => handleFetchGames(set),
      toggleSelectedGame: (gameId: GameIdType) =>
        handleToggleSelectedGame(set, gameId),
    }),
    {
      name: 'games-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useGamesStore;
