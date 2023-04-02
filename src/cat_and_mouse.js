function catAndMouse(x, j) {
  let cat = x.indexOf("C");
  let mouse = x.indexOf("m");
  let dog = x.indexOf("D");
  if (cat < 0 && mouse < 0 && dog < 0) {
    return "boring without all three";
  }
  if (dog < 0 && cat > mouse) {
    if (cat - mouse <= j + 1) {
        return "Caught!"
      }    
  } else if (dog < 0 && cat < mouse) {
    if (mouse - cat <= j + 1) {
      return "Caught!"
    }
  } 
  if ((dog > cat && dog < mouse) || (dog < cat && dog > mouse)) {
    return 'Protected!';
  }
  return "Escaped!";
}

module.exports = catAndMouse;
