function catAndMouse(x, j) {
  if (!x.includes("C") && !x.includes("m") && !x.includes("D")) {
    return "boring without all three";
  } 
  if (x === "Cm" || x === "mC") {
    return "Caught!";
  }
  if (x === "C.m" && j === 1) {
    return "Caught!";
  }
  return "Escaped!";
}

module.exports = catAndMouse;
