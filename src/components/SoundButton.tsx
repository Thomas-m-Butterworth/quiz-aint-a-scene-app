import React, {useEffect, useRef, useState} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import Sound from 'react-native-sound';
import PauseIcon from '@assets/icons/PauseIcon';
import PlayIcon from '@assets/icons/PlayIcon';

Sound.setCategory('Playback');

interface SoundButtonProps {
  sound: string;
  duration: number;
  style?: StyleProp<ViewStyle>;
}

const SoundButton: React.FC<SoundButtonProps> = ({sound, duration, style}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const soundClip = useRef<Sound | null>(null);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    soundClip.current = new Sound(sound, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
    });

    return () => {
      soundClip.current?.release();
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [sound]);

  const playPause = () => {
    if (isPlaying) {
      soundClip.current?.pause();
      setIsPlaying(false);
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    } else {
      soundClip.current?.play(success => {
        if (success) {
          soundClip.current?.setCurrentTime(0);
          console.log('Successfully finished playing');
        } else {
          console.log('Playback failed due to audio decoding errors');
        }
      });
      setIsPlaying(true);
      intervalId.current = setInterval(() => {
        soundClip.current?.getCurrentTime(sec => {
          setProgress((sec / duration) * 100);
        });
      }, 34);

      const adjustedDuration = duration * 1000 + 760;
      setTimeout(() => {
        soundClip.current?.pause();
        setIsPlaying(false);
        if (intervalId.current) {
          clearInterval(intervalId.current);
        }
        soundClip.current?.setCurrentTime(0);
        setProgress(0);
      }, adjustedDuration);
    }
  };

  return (
    <TouchableOpacity onPress={playPause} style={style}>
      {isPlaying ? <PauseIcon progress={progress} /> : <PlayIcon />}
    </TouchableOpacity>
  );
};

export default SoundButton;
