import {colours} from '@src/styles/colours';
import {typescale} from '@src/styles/typography';
import {TextStyle} from 'react-native';

type PVariant = 'caption' | 'small';
type HVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'warning';

const {h1, h2, h3, h4, h5, p, small, caption} = typescale;

export const usePFontSize = (variant?: PVariant): TextStyle => {
  let fontSize;
  switch (variant) {
    case 'caption':
      fontSize = caption;
      break;
    case 'small':
      fontSize = small;
      break;
    default:
      fontSize = p;
  }
  return {fontSize};
};

export const useHFontSize = (variant?: HVariant): TextStyle => {
  let fontSize;
  let color;
  switch (variant) {
    case 'h1':
      fontSize = h1;
      break;
    case 'h2':
      fontSize = h2;
      break;
    case 'h3':
      fontSize = h3;
      break;
    case 'h4':
      fontSize = h4;
      break;
    case 'h5':
      fontSize = h5;
      break;
    case 'warning':
      fontSize = h5;
      color = colours.falseRed;
      break;
    default:
      fontSize = p;
  }
  return {fontSize, color};
};
