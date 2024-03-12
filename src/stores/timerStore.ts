import {create} from 'zustand';

type TimerState = {
  seconds: number;
  intervalId: NodeJS.Timeout | null;
  startTimer: () => void;
  pauseTimer: () => void;
  reset: () => void;
  countState: 'timing' | 'paused';
};

export const useTimerStore = create<TimerState>(set => ({
  seconds: 3300,
  intervalId: null,
  countState: 'paused',
  startTimer: () =>
    set(store => {
      if (store.intervalId !== null) {
        clearInterval(store.intervalId);
      }
      return {
        ...store,
        countState: 'timing',
        intervalId: setInterval(() => {
          set(store => ({...store, seconds: store.seconds - 1}));
        }, 1000),
      };
    }),
  pauseTimer: () =>
    set(store => {
      if (store.intervalId !== null) {
        clearInterval(store.intervalId);
      }
      return {...store, countState: 'paused', intervalId: null};
    }),
  reset: () => set({seconds: 3300, intervalId: null}),
}));
