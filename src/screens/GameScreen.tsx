import React, {FC} from 'react';
import {View} from 'react-native';
import {GameScreenProps} from '@src/utils/types';
import {Skankovich} from './Skankovich';

const GameScreen: FC<GameScreenProps> = ({route}) => {
  let GameScreenComponent;
  switch (route.name) {
    case 'WeirdAlSkank':
      GameScreenComponent = Skankovich;
      break;
  }

  return <View>{GameScreenComponent && <GameScreenComponent />}</View>;
};

export default GameScreen;
