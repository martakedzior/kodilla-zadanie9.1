// scripts.js
// Zadanie 9.1

var a;
var h;

function getTriangleArea(a,h) {
	if (a > 0 && h > 0) {
		return (a*h)/2;
	} else  {
 		return "Nieprawidłowe dane";
	}
}

console.log (getTriangleArea(10,6));

var triangle1Area = (getTriangleArea(1,4));
var triangle2Area = (getTriangleArea(100,5));
var triangle3Area = (getTriangleArea(-2,5));

console.log (triangle1Area);
console.log (triangle2Area);
console.log (triangle3Area);
