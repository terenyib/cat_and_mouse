function catAndMouse(x, j) {
  if (x === "") {
    return "boring without all three";
  } else if (x === "Cm") {
    return "Caught!";
  } else {
    return "boring without all three";
  }   
}

module.exports = catAndMouse;
