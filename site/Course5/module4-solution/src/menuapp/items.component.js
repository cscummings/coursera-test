(function () {
'use strict';

var items = angular.module('data',[])
/*angular.module('Item', [])*/
.component('item', {
  templateUrl: 'src/menuapp/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
