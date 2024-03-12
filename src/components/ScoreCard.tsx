import useScoreStore from '@src/stores/scoreStore';
import React from 'react';
import {Image, View} from 'react-native';
import {H} from './ui-library/TextStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getScoreCardStyle, styles} from './styles';
import BlinkIcon from '@assets/icons/BlinkIcon';
import MarkIcon from '@assets/icons/MarkIcon.png';
import TomIcon from '@assets/icons/TomIcon.png';

const ResetClicker = ({reset}: {reset: () => void}) => (
  <View style={styles.resetClicker}>
    <TouchableOpacity onPress={() => reset()}>
      <BlinkIcon />
    </TouchableOpacity>
  </View>
);

const ScoreAdjusters = ({
  setScore,
  score,
}: {
  setScore: (score: number) => void;
  score: number;
}) => (
  <View style={styles.scoreAdjusters}>
    <TouchableOpacity onPress={() => setScore(score + 1)}>
      <H variant="h4">+</H>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setScore(score - 1)}>
      <H variant="h4">-</H>
    </TouchableOpacity>
  </View>
);

const Score = ({score}: {score: number}) => (
  <View style={styles.numberScore}>
    <H variant="h4">{score}</H>
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
    <Image source={teamIcon} />
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
        score={markScore}
        setScore={setMarkScore}
        teamIcon={MarkIcon}
        side="left"
      />
      <ResetClicker reset={reset} />
      <TeamScore
        score={tomScore}
        setScore={setTomScore}
        side="right"
        teamIcon={TomIcon}
      />
    </View>
  );
};

export default ScoreCard;
