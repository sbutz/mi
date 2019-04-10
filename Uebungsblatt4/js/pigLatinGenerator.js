function initPigLatinGenerator() {
	var inputField = document.getElementById("input_sentence");
	var outputContainer = document.getElementById("pig_latin_output");
	var button = document.getElementById("generate_pig_latin_button");

	var toPigLatin = function (word) {
		var vocals = [ 'a', 'e', 'i', 'o', 'u' ];

		if (vocals.includes(word[0].toLowerCase()))
			return word + 'yay';
		else
			return word.slice(1, word.length) + word[0] + 'ay';
	};

	button.onclick = function (data) {
		var text, output;

		text = inputField.value;
		text = text.split(" ").map(toPigLatin).join(" ");

		if (outputContainer.firstChild == null)
			outputContainer.appendChild(document.createTextNode(""));
		output = outputContainer.firstChild;
		output.data = text;
	};
}
