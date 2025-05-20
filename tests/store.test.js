import { describe, it, expect, beforeEach } from 'vitest';
import { useCounterStore } from '../src/stores/CounterStore';

describe('Counter store', () => {

  beforeEach(() => {
    useCounterStore.getState().reset(); // optional: reset before each test
  });

  it('should increment the count', () => {
    const { increment } = useCounterStore.getState();
    
    expect(useCounterStore.getState().count).toBe(0);
    increment();
    expect(useCounterStore.getState().count).toBe(1);
  });

  it('should reset the count', () => {
    const { increment, reset } = useCounterStore.getState();
    increment();
    reset();
    expect(useCounterStore.getState().count).toBe(0);
  });

});