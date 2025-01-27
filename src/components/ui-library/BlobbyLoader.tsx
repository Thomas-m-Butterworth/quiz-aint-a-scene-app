import React, {useEffect, useRef} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';

export const styles = StyleSheet.create({
  blobbyImg: {
    marginTop: -1,
  },
});

type BlobbyLoaderProps = {
  height: number;
  style: StyleProp<ViewStyle>;
};

const BlobbyLoader = ({height, style}: BlobbyLoaderProps) => {
  const spriteSheet = useRef<SpriteSheet>(null);

  useEffect(() => {
    if (spriteSheet.current) {
      spriteSheet.current.play({
        type: 'walk',
        fps: 10,
        loop: true,
      });
    }
  }, []);

  return (
    <View style={style}>
      <SpriteSheet
        ref={spriteSheet}
        source={require('assets/images/blobbywalk-sheet.png')}
        columns={6}
        rows={1}
        height={height}
        imageStyle={styles.blobbyImg}
        animations={{
          walk: Array.from({length: 6}, (v, i) => i + 0),
        }}
      />
    </View>
  );
};

export default BlobbyLoader;
