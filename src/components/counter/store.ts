import { create } from "zustand";

interface CounterStore{
    counter: number,
    increment: () => void;
    reset: () => void;

    max: number;
    resetMax: () => void;
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


const resetMax = () => {
    const newStore = {
        max: Math.floor(Math.random() * 100)
    }
    return newStore;
}



const useCounterStore =  create<CounterStore>(set => ({
    counter: 0,
    increment: () => set(store => incrementCounter(store)),
    reset: () => set(resetStore),

    max: 10,
    resetMax: () => set(resetMax)
}))

export default useCounterStore;