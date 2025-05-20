const { sum } = require('../src/math');
//import { test, expect } from 'jest';
import { test, expect } from 'vitest';


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

/* FAILS
test('adds 0.1 + 0.2 to equal 0.3', () => {
  expect(sum(0.1, 0.2)).toBe(0.3);
});*/