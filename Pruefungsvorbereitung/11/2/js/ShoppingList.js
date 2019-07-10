var shoppingList = (function() {
	/* private variables here */
	var STORAGE_KEY = 'shoppingList';
	var shoppingItemsList = [];

	/* private functions here */
	function loadItems() {
		var storedItems = JSON.parse(localStorage.getItem(STORAGE_KEY));
		if (!storedItems) return;

		storedItems.forEach(function(string) {
			shoppingItemsList.push(new ShoppingListItem(string));
		});
	}

	function saveItems() {
		var items = shoppingItemsList.map(function (item) {
			return '' + item.getName() + ':' + item.getQuantity();
		});
		localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	}

	function determineAlphabeticalPositionInShoppingList(shoppingListItem) {
		var shoppingListItemTitle = shoppingListItem.title;

		for (var position = 0; position < shoppingItemsList.length; position++) {
			var currentShoppingListItemTitle = shoppingItemsList[position].title;
			if (shoppingListItemTitle <= currentShoppingListItemTitle) {
				console.log("returning from array: " + position);
				return position;
			}
		}
		/* if the item has a higher alphabetical index than all previous items, we have to
		insert at the end of the list */
		return shoppingItemsList.length;
	}

	/* public functions here */
	function publicAddShoppingListItem(shoppingListItem) {
		if (shoppingItemsList.length == 0) {
			shoppingItemsList.push(shoppingListItem);
		} else {
			var insertIndex = determineAlphabeticalPositionInShoppingList(shoppingListItem);
			shoppingItemsList.splice(insertIndex, 0, shoppingListItem);
		}

		saveItems();

		return shoppingItemsList;
	};

	function publicRemoveItemAt(index) {
		//index specifies position at which array should be altered
		//second param specifies how many items should be removed
		shoppingItemsList.splice(index, 1);

		saveItems();
	}

	function publicGetShoppingItems() {
		return shoppingItemsList;
	}

	/* Reveal public interface here, i.e. return public pointers to methods and variables */
	return {
	  addItem: publicAddShoppingListItem,
	  removeItemAt: publicRemoveItemAt,
	  getItems: publicGetShoppingItems,
	  load: loadItems
	};

})();
