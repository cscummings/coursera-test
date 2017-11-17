(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

var itemList = [];
MenuItemsController.$inject = ['$stateParams', '$trace','items'];
function MenuItemsController($stateParams, $trace, items) {	
  var catlist = this;
  itemList = items.data.menu_items;
  console.log("in MenuItemsController");
  console.log("$stateParams:  " + $stateParams);

  console.log("items: " + items);
  $trace.enable("TRANSITION");
  catlist.items = itemList;
  catlist.name = items.data.category.name;
  
  console.log(catlist.items);
  
  catlist.onRemove = function(itemIndex) {
	    catlist.items.splice(itemIndex, 1);
	}

}


})();
