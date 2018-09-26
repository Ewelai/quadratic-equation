module.exports = function solveEquation(equation) {
// first part
let arrSp = equation.split(" ");   //('-20*x^2-108797540*x-130011773690520');
let a, b, c, d, x1, x2;
a = arrSp[0];  //-20
b = (arrSp[3] + arrSp[4]); //-1087...
c = (arrSp[7] + arrSp[8]); //-1300...
d = (b * b) - 4 * a * c;

// second part
if (d > 0) {
  x1 = Math.round( (- b + Math.sqrt(d) ) / (2 * a));
  x2 = Math.round( (- b - Math.sqrt(d) ) / (2 * a));
} else {
  return null;
}

// third part
let arr = [];
arr.push(x1);
arr.push(x2);

//fourth part
return arr.sort(function(a, b) {
  return a - b;
})
};
