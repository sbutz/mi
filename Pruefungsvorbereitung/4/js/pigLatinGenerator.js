var VOCALS = [ 'a', 'e', 'i', 'o', 'u' ];
var SPECIAL_CHARACTERS = [ '!' ];

function initPigLatinGenerator() {
	var input = document.getElementById('input_sentence');
	var button = document.getElementById('generate_pig_latin_button');
	var output = document.getElementById('pig_latin_output');

	var wordIncludesSpecialCharacter = function(word) {
		for (var i = 0, len = word.length; i < len; i++) {
			if (SPECIAL_CHARACTERS.includes(word[i]))
				return true;
		}
		return false;
	}

	button.onclick = function() {
		var sentence = input.value
			.split(" ")
			.map(function(word) {
				if (word.length === 0) {
					return "";
				} else if (wordIncludesSpecialCharacter(word)) {
					return word;
				} else if (VOCALS.includes(word[0].toLowerCase())) {
					return word + 'yay';
				} else {
					return word.substring(1) + word[0] + 'ay';
				}
			})
			.join(" ");

		output.innerHTML = '<p>' + sentence + '</p>';
	};
}
