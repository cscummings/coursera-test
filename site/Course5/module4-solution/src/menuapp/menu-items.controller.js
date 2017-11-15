(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject = ['items'];
function MenuItemsController(items) {
  var list = this;
  console.log("in MenuItemsController");
  /*$ctrl.items = items.data;*/
  list.items = items.data.menu_items;
  console.log(items.data.menu_items);
  console.log(list.items);
  console.log(items.data.category);
  list.name = items.data.category.name;

}

})();
