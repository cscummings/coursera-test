(function () {
'use strict';

/*var items = angular.module('data',[])*/
 var items = angular.module('ItemList', [])
.component('itemList', {
  templateUrl: 'src/menuapp/templates/itemList.template.html',
  bindings: {
   onRemove: '&',
   items: '<'
  }
});

})();
