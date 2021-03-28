import { sayHello } from './index';

describe('sayHello', () => {
  it('should return hello', () => {
    expect(sayHello()).toBe('hello');
  });
});
