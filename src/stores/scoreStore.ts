import {create} from 'zustand';

type ScoreState = {
  markScore: number;
  tomScore: number;
  setMarkScore: (score: number) => void;
  setTomScore: (score: number) => void;
  reset: () => void;
};

const useScoreStore = create<ScoreState>(set => ({
  markScore: 0,
  tomScore: 0,
  setMarkScore: score => set(() => ({markScore: score})),
  setTomScore: score => set(() => ({tomScore: score})),
  reset: () => set(() => ({markScore: 0, tomScore: 0})),
}));

export default useScoreStore;
