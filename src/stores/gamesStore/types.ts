import {ReactElement} from 'react';

type GraphType = 'line' | 'venn' | 'line' | 'bar-horiz' | 'pie';

export type EmoOrNotType = {
  id: string;
  name: string;
  emo?: boolean;
  ska?: boolean;
  band?: boolean;
  wrestling?: boolean;
};

type CelebsHeightType = {
  firstName: string;
  lastName: string;
  meters: number;
  inches: number;
  image?: string;
};

type WhatsappAgeType = {
  id: string;
  quote: string;
  sender?: string;
  band?: string;
  song?: string;
  emo: boolean;
};

type GuessGraphType = {
  id: string;
  blankGraph: string;
  graphType: GraphType;
  clue01: string;
  clue02: string;
  finalAxis: string;
};

type NameTuneType = {
  id: string;
  song: string;
  artist: string;
  length: string;
  sound: string;
};

type CorrectAnswerType = 'a' | 'b' | 'c' | 'd';

type AnswersType = {
  a: string;
  b: string;
  c: string;
  d?: string;
};

export type MultipleChoiceType = {
  id: string;
  asker?: string;
  question: string;
  answers: AnswersType;
  correct: CorrectAnswerType;
};
export type GameIdType =
  | 'EmoPinions'
  | 'SuperNintemo'
  | 'WeirdAlSkank'
  | 'NameThatTune'
  | 'Bantz182'
  | 'WhatsAppAge'
  | 'WrestlingMania';

export type GameLibraryEntryType = {
  id: GameIdType;
  name: string;
  icon: () => ReactElement;
};

type GamesDataType = {
  skankovich: EmoOrNotType[];
  superNintemo: EmoOrNotType[];
  celebsHeight: CelebsHeightType[];
  whatsappAge: WhatsappAgeType[];
  guessTheGraph: GuessGraphType[];
  nameThatTune: NameTuneType[];
  emopinions: MultipleChoiceType[];
  bantz182: MultipleChoiceType[];
  wrestlemania: EmoOrNotType[];
  daylist: EmoOrNotType[];
};

export type GamesStoreType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  games: GamesDataType;
  gamesLibrary: GameLibraryEntryType[];
  fetchGames: () => Promise<void>;
  selectedGames: GameIdType[];
  toggleSelectedGame: (gameId: GameIdType) => void;
};
