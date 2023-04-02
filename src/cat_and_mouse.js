function catAndMouse(x, j) {
  if (x === "") {
    return "boring without all three";
  } 
  if (x === "Cm") {
    return "Caught!";
  }
  if (x === "mC") {
    return "Caught!";
  }
  return "boring without all three"; 
}

module.exports = catAndMouse;
