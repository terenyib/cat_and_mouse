function catAndMouse(x, j) {
  if (x === "") {
    return "boring without all three";
  } 
  if (x === "Cm" || x === "mC") {
    return "Caught!";
  }
  return "boring without all three"; 
}

module.exports = catAndMouse;
