import {colours} from '@src/styles/colours';
import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

interface PauseIconProps {
  progress: number;
}

const PauseIcon: React.FC<PauseIconProps> = ({progress}) => {
  return (
    <Svg fill={colours.quizDark} width="25px" height="25px" viewBox="0 0 24 24">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
          <Stop
            offset={`${progress}%`}
            stopColor={colours.quizWhite}
            stopOpacity="1"
          />
          <Stop
            offset={`${progress}%`}
            stopColor={colours.quizDark}
            stopOpacity="1"
          />
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#grad)"
        d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z"
      />
    </Svg>
  );
};

export default PauseIcon;
