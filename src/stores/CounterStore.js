import { create } from 'zustand'

export const useCounterStore = create((set, get) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    reset: () => set({ count: 0 }),
}))