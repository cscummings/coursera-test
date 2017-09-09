(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var itemAdder = this;

	 itemAdder.items = ShoppingListCheckOffService.getAllToBuy();
	 
	 itemAdder.getAll = function() {
		 return itemAdder.items;
	 };
	 
	 itemAdder.boughtItem = function(itemIndex) {
		 try {
		 ShoppingListCheckOffService.boughtItem(itemIndex);
		 } catch (error) {
			 itemAdder.emptyMessage = error.message;
		 }
		 
	 };
  }
    

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
 var itemTracker = this; 
 
 itemTracker.getAll = function() {
	 var results = [];
	 try {
		 results = ShoppingListCheckOffService.getAllBought();
		 if (results.length > 0)
			 itemTracker.emptyMessage = "";
		 return results;
	  } catch (error) {
		  itemTracker.emptyMessage = error.message;
	  }
 };
 
}

function ShoppingListCheckOffService() {
	var service = this;
	service.toBuy = [{name: "cookies" , quantity: "10"}, {name:"Milk" , quantity: "1"}, {name:"chocolate" , quantity: "4"},
		{name:"fruit" , quantity: "7"}, {name:"gummie bears" , quantity: "3"}, {name: "Cinnamon Rolls" , quantity: "12"}];
	service.bought = [];

	service.addBuyItem = function (itemString) {
		toBuy.push(itemString);
	};  

	service.boughtItem = function (index) {
		var itembought = service.toBuy[index];
		
		service.bought.push(itembought);
		service.toBuy.splice(index,1);
		
		if (service.toBuy.length == 0) 
			throw new Error("Everything is bought!");
	};
	
	service.getAllToBuy = function () {
		return service.toBuy;
	}
	
	service.getAllBought = function () {
	  if (service.bought.length > 0) {	
		  return service.bought;
	  } else {
		  throw new Error("Nothing bought yet.");
	  };
	}
	
	service.getNumbertoBuy = function () {
		return service.toBuy.length;
	} 
		
	service.getNumberBought = function () {
		return service.bought.length;
	} 
}


})();


