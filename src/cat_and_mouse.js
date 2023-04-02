function catAndMouse(x, j) {
  let cat = x.indexOf('C');
  let mouse = x.indexOf('m');
  let dog = x.indexOf('D');
  if (cat < 0 || mouse < 0 || dog < 0) return "boring without all three";
  if (Math.abs(cat - mouse) > j + 1) return 'Escaped!';  
  if (x.replace(/\./g,'') === 'CDm' || x.replace(/\./g,'') === 'mDC') return 'Protected!'
  return 'Caught!';
}

module.exports = catAndMouse;
