import { create } from "zustand";

interface CounterStore{
    counter: number,
    increment: () => void;
    reset: () => void;
}

const incrementCounter = (store: CounterStore) => {
    const newStore = {
        counter: store.counter + 1
    }
    return newStore;
}

const resetStore = () => {
    const newStore = {
        counter: 0
    }
    return newStore;
}


const useCounterStore =  create<CounterStore>(set => ({
    counter: 0,
    increment: () => set(store => incrementCounter(store)),
    reset: () => set(resetStore)
}))

export default useCounterStore;