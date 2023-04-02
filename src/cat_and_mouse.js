function catAndMouse(x, j) {
  let cat = x.indexOf("C");
  let mouse = x.indexOf("m");
  let dog = x.indexOf("D");
  if (cat < 0 || mouse < 0 || dog < 0) {
    return "boring without all three";
  }
  if (((dog > cat && dog < mouse) && (dog - cat <= j + 1)) || ((dog < cat && dog > mouse) && (cat - dog <= j + 1))) {
    return 'Protected!';
  }
  if ((cat > mouse && (cat - mouse <= j + 1)) || (cat < mouse && (mouse - cat <= j + 1))) {
    return "Caught!"
  }  
  return "Escaped!";
}

module.exports = catAndMouse;
