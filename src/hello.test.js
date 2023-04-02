const hello = require('./hello');

describe('US-1', () => {
  it('Given preconditions When I do something Then something happens', () => {
    expect(hello()).toBe(null);
  });
});
