type CountStateType = 'timing' | 'paused';

type DefaultTimerStateType = {
  seconds: number;
  countState: CountStateType;
  intervalId: NodeJS.Timeout | null;
};

type TimerStateFunctionsType = {
  setTimer: (seconds: number) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  reset: () => void;
};

export type TimerState = DefaultTimerStateType & TimerStateFunctionsType;

export const defaultTimerState: DefaultTimerStateType = {
  seconds: 3300,
  countState: 'paused',
  intervalId: null,
};
