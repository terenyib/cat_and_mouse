const catAndMouse = require('./cat_and_mouse');

describe('US-1', () => {
  it('Given the string x="", jump j=0 When I check if I can catch a mouse Then the result is "boring without all three"', () => {
    expect(catAndMouse("", 0)).toBe("boring without all three");
  });
  it('Given the string x="...", jump j=0 When I check if I can catch a mouse Then the result is "boring without all three"', () => {
    expect(catAndMouse("...", 0)).toBe("boring without all three");
  });
});
describe('US-2', () => {
  it('Given the string x="Cm", jump j=0 When I check if I can catch a mouse Then the result is "Caught!"', () => {
    expect(catAndMouse("Cm", 0)).toBe("Caught!");
  });
  it('Given the string x="mC", jump j=1 When I check if I can catch a mouse Then the result is "Caught!"', () => {
    expect(catAndMouse("mC", 1)).toBe("Caught!");
  });
});
