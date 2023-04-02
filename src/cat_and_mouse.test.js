const catAndMouse = require('./cat_and_mouse');

describe('US-1', () => {
  it('Given the string x="", jump j=0 When I check if I can catch a mouse Then the result is "boring without all three"', () => {
    expect(catAndMouse("", 0)).toBe("boring without all three");
  });
});
