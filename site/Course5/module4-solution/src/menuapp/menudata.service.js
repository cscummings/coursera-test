(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;
  
  // List of found items
  var foundItems = [];
  
  service.getAllCategories = function() {
	  var promise = $http({
	        method: "GET",
	        url: (ApiBasePath + "/categories.json")

	      });

	  return promise;
  };

/*  service.getItemsForCategory = function(categoryShortName) {*/
  service.getItemsForCategory = function() {	
	  var categoryShortName = 'L';		
	  var promise = $http({
	        method: "GET",
	        url: (ApiBasePath + "/menu_items.json"),
	        params: {
	            category: categoryShortName
	          }

	      });
	    
	    return promise;
  };

  service.removeItem = function (itemIndex) {
	    foundItems.splice(itemIndex, 1);
  };


 }


})();
