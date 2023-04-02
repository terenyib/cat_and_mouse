function catAndMouse(x, j) {
  if (!x.includes("C") && !x.includes("m") && !x.includes("D")) {
    return "boring without all three";
  }
  if (x.indexOf("C") >  x.indexOf("m")) {
    if (x.indexOf("C") - x.indexOf("m") <= j + 1) {
      return "Caught!"
    }    
  } else {
    if (x.indexOf("m") - x.indexOf("C") <= j + 1) {
      return "Caught!"
    }
  }
  return "Escaped!";
}

module.exports = catAndMouse;
