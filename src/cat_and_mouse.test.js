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
describe('US-3', () => {
  it('Given the string x="C.m", jump j=0 When I check if I can catch a mouse Then the result is "Escaped!"', () => {
    expect(catAndMouse("C.m", 0)).toBe("Escaped!");
  });
  it('Given the string x="C.m", jump j=1 When I check if I can catch a mouse Then the result is "Caught!"', () => {
    expect(catAndMouse("C.m", 1)).toBe("Caught!");
  });
  it('Given the string x="m.C", jump j=1 When I check if I can catch a mouse Then the result is "Caught!"', () => {
    expect(catAndMouse("m.C", 1)).toBe("Caught!");
  });
});
describe('US-4', () => {
  it('Given the string x="C..m", jump j=2 When I check if I can catch a mouse Then the result is "Caught!"', () => {
    expect(catAndMouse("C..m", 2)).toBe("Caught!");
  });
  it('Given the string x="C..m", jump j=3 When I check if I can catch a mouse Then the result is "Caught!"', () => {
    expect(catAndMouse("C..m", 3)).toBe("Caught!");
  });
  it('Given the string x="C..m", jump j=1 When I check if I can catch a mouse Then the result is "Escaped!"', () => {
    expect(catAndMouse("C..m", 1)).toBe("Escaped!");
  });
  it('Given the string x="m..C", jump j=0 When I check if I can catch a mouse Then the result is "Escaped!"', () => {
    expect(catAndMouse("m..C", 0)).toBe("Escaped!");
  });
});
describe('US-5', () => {
  it('Given the string x="CD.m", jump j=2 When I check if I can catch a mouse Then the result is "Protected!"', () => {
    expect(catAndMouse("CD.m", 2)).toBe("Protected!");
  });
  it('Given the string x="mD.C", jump j=2 When I check if I can catch a mouse Then the result is "Protected!"', () => {
    expect(catAndMouse("mD.C", 2)).toBe("Protected!");
  });
});
describe('US-6', () => {
  it('Given the string x="C..mD", jump j=2 When I check if I can catch a mouse Then the result is "Caught!"', () => {
    expect(catAndMouse("C..mD", 2)).toBe("Caught!");
  });
  it('Given the string x="m..CD", jump j=2 When I check if I can catch a mouse Then the result is "Caught!"', () => {
    expect(catAndMouse("m..CD", 2)).toBe("Caught!");
  });
});
describe('US-7', () => {
  it('Given the string x="C...Dm", jump j=2 When I check if I can catch a mouse Then the result is "Escaped!"', () => {
    expect(catAndMouse("C...Dm", 2)).toBe("Escaped!");
  });
});
