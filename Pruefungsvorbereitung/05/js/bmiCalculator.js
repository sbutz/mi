function initBMICalculator() {
	var inputHeight = document.querySelector('#input_field_height');
	var inputWeight = document.querySelector('#input_field_weight');
	var output = document.querySelector('#bmi_result_value');

	var calculateBMI = function() {
		var weight = inputWeight.value;
		var height = inputHeight.value;

		var bmi = BMI(weight, height);
		var color = getBMIColor(bmi);

		output.innerHTML = '<span style="color:' + color + ';">' + bmi + '</span>';
	}

	inputHeight.addEventListener('keyup', calculateBMI);
	inputWeight.addEventListener('keyup', calculateBMI);
}

function BMI(weight, height) {
	var bmi = weight / ((height/100) * (height/100));
	return Math.floor(bmi * 100) / 100;
}

function getBMIColor(bmi) {
	if (bmi < 18.5)
		return 'yellow';
	else if (bmi >= 18.5 && bmi <= 25)
		return 'green';
	else
		return 'red';
}
