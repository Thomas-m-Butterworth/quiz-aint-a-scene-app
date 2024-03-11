import PauseIcon from '@assets/icons/PauseIcon';
import PlayIcon from '@assets/icons/PlayIcon';
import React, {useEffect, useState, useRef} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

interface SoundButtonProps {
  sound: string;
  duration: number;
  style?: StyleProp<ViewStyle>;
}

const SoundButton: React.FC<SoundButtonProps> = ({sound, duration, style}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundClip = useRef<Sound | null>(null);

  useEffect(() => {
    soundClip.current = new Sound(sound, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
    });

    return () => {
      soundClip.current?.release();
    };
  }, [sound]);

  const playPause = () => {
    if (isPlaying) {
      soundClip.current?.pause();
      setIsPlaying(false);
    } else {
      soundClip.current?.play(success => {
        if (success) {
          console.log('Successfully finished playing');
        } else {
          console.log('Playback failed due to audio decoding errors');
        }
      });
      setIsPlaying(true);

      setTimeout(() => {
        soundClip.current?.pause();
        setIsPlaying(false);
      }, duration * 1000); // Stop after specified duration
    }
  };

  return (
    <TouchableOpacity onPress={playPause} style={style}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </TouchableOpacity>
  );
};

export default SoundButton;
