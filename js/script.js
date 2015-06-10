var textField = document.getElementById('textField');
var submit = document.getElementById('submitButton');
submit.addEventListener('click', buttonClicked, false);

function buttonClicked(e){
	
	e.preventDefault();
	x = textField.value;
	x = eval(x);
	textField.value = x;

}

function addToField(n){
	textField.value += n;
}
