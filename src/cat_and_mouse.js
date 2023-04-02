function catAndMouse(x, j) {
  if (!x.includes("C") && !x.includes("m") && !x.includes("D")) {
    return "boring without all three";
  } 
  if (x === "Cm" || x === "mC") {
    return "Caught!";
  }
}

module.exports = catAndMouse;
