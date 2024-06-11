import {create} from 'zustand';

interface CounterAdd {
  count: number;
  setCount: (countAdd: number) => void;
}

export const counterStore = create<CounterAdd>(set => ({
  count: 0,
  setCount: (countAdd: number): void =>
    set(() => ({
      count: countAdd,
    })),
}));
