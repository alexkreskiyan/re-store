import 'mocha';
import test from '../src/index';
import { expect } from 'chai';

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = test();
    expect(result).to.equal(true);
  });
});