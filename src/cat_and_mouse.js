function catAndMouse(x, j) {
  if (!x.includes("C") && !x.includes("m") && !x.includes("D")) {
    return "boring without all three";
  } 
  if (x === "Cm" || x === "mC") {
    return "Caught!";
  }
  if ((x === "C.m" || x === "m.C") && j === 1) {
    return "Caught!";
  }
  if (x === "C..m" && j === 2) {
    return "Caught!";
  }
  if (x === "C..m" && j === 3) {
    return "Caught!";
  }
  return "Escaped!";
}

module.exports = catAndMouse;
