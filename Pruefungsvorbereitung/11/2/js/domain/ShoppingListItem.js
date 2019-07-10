/* ShoppingListItem stores data for one entry in the shopping list */
class ShoppingListItem {
	constructor(title) {
		this.fullTitle = title;
	
		this.name;
		this.quantity;

		this.parseTitle();
		this.convertToUpperCase();
	}

	convertToUpperCase() {
		var firstChar = this.name.charAt(0);
		var firstCharUpper = firstChar.toUpperCase();

		var shortenedTitle = this.name.substring(1);
		this.name = firstCharUpper + shortenedTitle;
	}

	parseTitle() {
		if (this.fullTitle.indexOf(":") !== -1) {
			var splitTitle = this.fullTitle.split(":");
			this.name = splitTitle[0];
			this.quantity = splitTitle[1];
		} else {
			this.name = this.fullTitle;
			this.quantity = 1;
		}
	}

	getName() {
		return this.name;
	}

	getQuantity() {
		return this.quantity;
	}

	toString() {
		var quantityString = "(" + this.quantity + ")";
		return this.name + " " + quantityString;
	}
}
