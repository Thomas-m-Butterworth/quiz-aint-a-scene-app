import {create} from 'zustand';

type TimerState = {
  seconds: number;
  intervalId: NodeJS.Timeout | null;
  startTimer: () => void;
  pauseTimer: () => void;
  reset: () => void;
  countState: 'timing' | 'paused';
};

const secondsDefault = 3300;

export const useTimerStore = create<TimerState>(set => ({
  seconds: secondsDefault,
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
          // eslint-disable-next-line @typescript-eslint/no-shadow
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
  reset: () => set({seconds: secondsDefault, intervalId: null}),
}));
