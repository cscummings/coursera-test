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
	        url: (ApiBasePath + "/categories.json"),
	        /*params: {
	            category: name
	          }*/

	      })
	      .then(function (response) {
	    	  console.log("in getAllCategories then function" + response);
		    })
		    .catch(function (error) {
		      console.log(error);
		    });
	    return promise;
  };

  service.getItemsForCategory = function(categoryShortName) {
	  var promise = $http({
	        method: "GET",
	        url: (ApiBasePath + "/menu_items.json"),
	        params: {
	            category: categoryShortName,
	            where: name
	          }

	      })
	      .then(function (response) {
	    	  console.log("in getItemsForCategory then function " + respose.data);
	    	  
		    })
		    .catch(function (error) {
		      console.log(error);
		    });
	    
	    return promise;
  };

  service.removeItem = function (itemIndex) {
	    foundItems.splice(itemIndex, 1);
  };


 }


})();
