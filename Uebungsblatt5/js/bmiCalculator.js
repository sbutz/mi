function initBMICalculator() {
	var inputMass = document.getElementById('input_field_weight');
	var inputHeight = document.getElementById('input_field_height');
	var outputNode = document.getElementById('bmi_result_value');

	var updateBmi = () => {
		var mass = parseInt(inputMass.value);
		var height = parseInt(inputHeight.value) / 100;

		var bmi = calculateBmi(mass, height);

		outputNode.innerText = Math.round(bmi * 100) / 100;
	};

	inputMass.addEventListener('keyup', updateBmi);
	inputHeight.addEventListener('keyup', updateBmi);

	updateBmi();
}

function calculateBmi(mass, height) {
	return mass / (height * height);
}
