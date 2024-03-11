import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React, {ReactNode} from 'react';

export type FC<T = {}> = React.FC<T>;

export type RootStackParamList = {
  EmoPinions: {name: string; gameScreen?: ReactNode};
  NameThatTune: {name: string; gameScreen?: ReactNode};
  Bantz182: {name: string; gameScreen?: ReactNode};
  WhatsAppAge: {name: string; gameScreen?: ReactNode};
  WrestlingMania: {name: string; gameScreen?: ReactNode};
  WeirdAlSkank: {name: string; gameScreen?: ReactNode};
};
export type TechStackParamList = {
  Playlist: {name: string};
  Intro: {name: string};
};

export type SkankovichQuestionType = {
  id: string;
  name: string;
  ska: boolean;
};
export type WhatsAppQuestionType = {
  id: string;
  quote: string;
  emo: boolean;
  sender?: string;
  song?: string;
  band?: string;
};

export type MainStackParams = {
  Home: undefined;
  Games: undefined;
  Tech: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  MainStackParams,
  'Home'
>;

export type GameScreenProps = StackScreenProps<RootStackParamList> & {
  gameScreen?: ReactNode;
};
export type TechScreenProps = StackScreenProps<TechStackParamList>;

export type MultiChoiceQuestionType = {
  id: string;
  asker?: string;
  question: string;
  answers: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct: string;
};
