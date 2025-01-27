import {create} from 'zustand';
import {cloneDeep} from 'lodash';

type ScoreState = {
  markScore: number;
  tomScore: number;
  setMarkScore: (score: number) => void;
  setTomScore: (score: number) => void;
  reset: () => void;
};

const defaultScoreState = {
  markScore: 0,
  tomScore: 0,
};

const useScoreStore = create<ScoreState>(set => ({
  ...cloneDeep(defaultScoreState),
  setMarkScore: score => set(() => ({markScore: score})),
  setTomScore: score => set(() => ({tomScore: score})),
  reset: () => set(() => defaultScoreState),
}));

export default useScoreStore;
