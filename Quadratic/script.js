var xSquare = document.getElementById('xSquare');
var xNumber = document.getElementById('xNumber');
var number = document.getElementById('number');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');

var sign1 = document.getElementById('sign1');
var sign2 = document.getElementById('sign2');
var sign3 = document.getElementById('sign3');

function divisible(temp){
	
}
function solveFoil(){
	
	answer1.value = "(x + 1)";
	answer2.value = "(x + 1)";
}
function quadraticEquation(){
	var a = sign1.value + xSquare.value;
	var b = sign2.value + xNumber.value;
	var c = sign3.value + number.value;


	var temp = eval(b * b - (4 * a * c));

	if(temp < 0){
		imaginary(temp, a, b, c);
	}
	else{
		var sqrt = Math.sqrt(temp);
		var x1 = (-b + sqrt)/(2 * a);
		var x2 = (-b - sqrt)/(2 * a);
		answer1.value = "X1 = " + x1; 
		answer2.value = "X2 = " + x2;
	}
	
}
function imaginary(temp, a, b, c){
	
	var sqrt = Math.sqrt(temp);
	var a2 = 2*xSquare.value;
	b = b * -1;
	answer1.value = "X1 = (" + b.toString() + " + sqrt(" + temp.toString() + ")*i ) /"  + a2.toString();
	answer2.value = "X2 = (" + b.toString() + " -- sqrt(" + temp.toString() + ")*i ) /"  + a2.toString();
	
	
}

