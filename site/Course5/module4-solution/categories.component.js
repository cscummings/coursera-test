(function () {
'use strict';

var categories = angular.module('data',[])
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
	onRemove: '&',  
    categories: '<'
  }

});

})();
