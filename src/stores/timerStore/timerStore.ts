import {create} from 'zustand';
import {cloneDeep} from 'lodash';
import {TimerState, defaultTimerState} from './types';

const useTimerStore = create<TimerState>(set => ({
  ...cloneDeep(defaultTimerState),
  setTimer: newSeconds => set({seconds: newSeconds}),
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
  reset: () => set(defaultTimerState),
}));

export default useTimerStore;
