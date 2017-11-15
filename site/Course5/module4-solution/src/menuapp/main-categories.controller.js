(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);


MainCategoriesController.$inject = ['items'];
function MainCategoriesController(items) {
  var categories = this;
  console.log("in MainCategoriesController");
  categories.items = items.data;
/*  categories.menuItems = items.data.menu_items;*/

}

})();
