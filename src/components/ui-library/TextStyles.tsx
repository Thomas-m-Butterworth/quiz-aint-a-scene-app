import {useHFontSize, usePFontSize} from '@src/hooks/useFontSize';
import {styles} from '@src/styles/typography';
import React, {ReactNode} from 'react';
import {StyleProp, TextStyle, Text} from 'react-native';

interface PProps {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
  variant?: 'caption' | 'small';
}

interface HProps {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'warning';
}
export const P: React.FC<PProps> = ({style, variant, ...props}) => {
  const fontSizeStyle = usePFontSize(variant);
  return <Text style={[styles.text, style, fontSizeStyle]} {...props} />;
};

export const H: React.FC<HProps> = ({style, variant, ...props}) => {
  const fontSizeStyle = useHFontSize(variant);
  return <Text style={[styles.text, style, fontSizeStyle]} {...props} />;
};
