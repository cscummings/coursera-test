(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);


MainCategoriesController.$inject = ['categories'];
function MainCategoriesController(categories) {
  var list = this;
  console.log("in MainCategoriesController");
  list.categories = categories.data;
  console.log("categorylist categories: " + list.categories);
/*  categories.menuItems = items.data.menu_items;*/

  
};

})();
