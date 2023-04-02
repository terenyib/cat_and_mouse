function catAndMouse(x, j) {
  let cat = x.indexOf("C");
  let mouse = x.indexOf("m");
  let dog = x.indexOf("D");
  if (cat < 0 || mouse < 0 || dog < 0) {
    return "boring without all three";
  }
  if ((dog > cat && dog < mouse) || (dog < cat && dog > mouse)) {
    return 'Protected!';
  }
  if (cat > mouse && (cat - mouse <= j + 1)) {
    return "Caught!"
  }
  if (cat < mouse && (mouse - cat <= j + 1)) {
    return "Caught!"
  }
  return "Escaped!";
}

module.exports = catAndMouse;
