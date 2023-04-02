function catAndMouse(x, j) {
  if (!x.includes("C") && !x.includes("m") && !x.includes("D")) {
    return "boring without all three";
  }
  if (x.indexOf("C") >  x.indexOf("m")) {
    return x.indexOf("C") - x.indexOf("m") <= j + 1 ? "Caught!" : "Escaped!";
  } else {
    return x.indexOf("m") - x.indexOf("C") <= j + 1 ? "Caught!" : "Escaped!";
  } 
}

module.exports = catAndMouse;
