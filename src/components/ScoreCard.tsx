import useScoreStore from '@src/stores/scoreStore';
import React, {useRef} from 'react';
import {Animated, Easing, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getScoreCardStyle, styles} from './styles';
import BlinkIcon from '@assets/icons/BlinkIcon';
import MarkIcon from '@assets/icons/MarkIcon.png';
import TomIcon from '@assets/icons/TomIcon.png';

const ResetClicker = ({reset}: {reset: () => void}) => {
  const rotation = useRef(new Animated.Value(0)).current;

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const onPress = () => {
    reset();
    Animated.timing(rotation, {
      toValue: 1,
      duration: 450,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      rotation.setValue(0);
    });
  };

  return (
    <View style={styles.resetClicker}>
      <TouchableOpacity onPress={onPress}>
        <Animated.View style={{transform: [{rotate}]}}>
          <BlinkIcon />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const ScoreAdjusters = ({
  setScore,
  score,
}: {
  setScore: (score: number) => void;
  score: number;
}) => (
  <View style={styles.scoreAdjusters}>
    <TouchableOpacity onPress={() => setScore(score + 1)}>
      <Text style={styles.scoreText}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setScore(score - 1)}>
      <Text style={styles.scoreText}>-</Text>
    </TouchableOpacity>
  </View>
);

const Score = ({score}: {score: number}) => (
  <View style={styles.numberScore}>
    <Text style={styles.scoreText}>{score}</Text>
  </View>
);

const TeamScore = ({
  score,
  setScore,
  side,
  teamIcon,
}: {
  score: number;
  setScore: (score: number) => void;
  side: 'left' | 'right';
  teamIcon?: any;
}) => (
  <View style={getScoreCardStyle(side).individualScoreContainer}>
    <Image source={teamIcon} style={styles.teamIcon} />
    <Score score={score} />
    <ScoreAdjusters setScore={setScore} score={score} />
  </View>
);

const ScoreCard = () => {
  const {markScore, setMarkScore, tomScore, setTomScore, reset} =
    useScoreStore();

  return (
    <View style={styles.scoreCardContainer}>
      <TeamScore
        score={tomScore}
        setScore={setTomScore}
        side="left"
        teamIcon={TomIcon}
      />
      <ResetClicker reset={reset} />
      <TeamScore
        score={markScore}
        setScore={setMarkScore}
        teamIcon={MarkIcon}
        side="right"
      />
    </View>
  );
};

export default ScoreCard;
