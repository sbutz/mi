$(document).ready(function () {
    setAddItemListener();
	loadShoppingItems();
})

function setAddItemListener() {
	$("#addShoppingListItem").on("click", addShoppingListItem);
}

function loadShoppingItems() {
	shoppingList.load();

	var shoppingListHTMLElement = $("#shoppingItemList");
	shoppingList.getItems().forEach(function(item) {
		insertUpdatedShoppingItemListinHTML(shoppingListHTMLElement, item);
	});
}

function addShoppingListItem() {
	var shoppingListItemInputField = $("#shoppingListItemInputTitle");
	var shoppingListItemTitle = shoppingListItemInputField.val();
	var shoppingListHTMLElement = $("#shoppingItemList");

	if (shoppingListItemTitle != "") {
		shoppingListItemInputField.val("");

		var shoppingListItem = new ShoppingListItem(shoppingListItemTitle);
		shoppingList.addItem(shoppingListItem);

		insertUpdatedShoppingItemListinHTML(shoppingListHTMLElement, shoppingListItem);
	}
}

function insertUpdatedShoppingItemListinHTML(shoppingListHTMLElement, shoppingListItem) {
	var shoppingListItemHTML = $("<li>" + shoppingListItem.toString() + "</li>").hide();
	shoppingListItemHTML.click(removeShoppingItem);
	$(shoppingListHTMLElement).append(shoppingListItemHTML);
	shoppingListItemHTML.fadeIn(1000);
}

function removeShoppingItem() {
	var item = $(this);
	//debug only - Using shiny jQuey Object and its provided methods...
	console.log(item.text() + "at position: " + item.index());
	//show how to get plain old DOM object from Jquery-Object...
	console.log("Access plain old DOM element: " + item.get(0).innerHTML);

	shoppingList.removeItemAt(item.index());

	// Important! If we do not remove the item, the indices will not be updated...
	$(this).fadeOut(function() {
		$(this).remove();
	}); 
	//see here: http://api.jquery.com/fadeout/

	//Less voodo, but less fancy...
	//$(this).remove();
}
