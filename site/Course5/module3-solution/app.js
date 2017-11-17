(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
	  var ddo = {
	    templateUrl: 'foundItems.html',
	    scope: {
	      items: '<',
	      myTitle: '@title',
	      badRemove: '=',
	      onRemove: '&'
	    },
	    controller: FoundItemsDirectiveController,
	    controllerAs: 'list',
	    bindToController: true
	  };

	  return ddo;
	}


	function FoundItemsDirectiveController() {
	  var list = this;

	  list.foundInList = function () {
	    for (var i = 0; i < list.items.length; i++) {
	      var name = list.items[i].name;
	      if (name.toLowerCase().indexOf("cookie") !== -1) {
	        return true;
	      }
	    }

	    return false;
	  };
	}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.errorMsg = "Nothing Found!";
  list.searchTerm = "";
  var emptyList = true;
  // List of found items
  list.found = [];

  list.logMenuItems = function (searchTerm) {
	  	if (searchTerm === undefined) { 
	  		return errorMsg;
	  	}

	  	searchTerm = searchTerm.trim();
	  	if (searchTerm.length == 0) {
	  		return errorMsg;
	  	}
	  	
	    list.found = MenuSearchService.getMatchedMenuItems(searchTerm);
	    
	    if (list.found.length == 0) {
	    	return errorMsg;
	    } else {
	    	list.emptyList = false;
	    	return list.found;
	    }	
  }
  
  list.emptyList = function() {
	  return emptyList;
  }
  
  list.removeItem = function (itemIndex) {
	    console.log("'this' is: ", this);
	    MenuSearchService.removeItem(itemIndex);
	  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  // List of found items
  var foundItems = [];
  
  service.getMatchedMenuItems = function(searchTerm) {
	  searchTerm = searchTerm.toLowerCase();
	  searchTerm = searchTerm.trim();

	  var promise = $http({
	        method: "GET",
	        url: (ApiBasePath + "/menu_items.json"),
	        /*params: {
	            category: name
	          }*/

	      })
	      .then(function (response) {

			    for (var i = 0; i < response.data.menu_items.length; i++) {
			        var description = response.data.menu_items[i].description;
			        console.log("search term :" + searchTerm);
			        console.log("searching in : " + description);
			        console.log(description.toLowerCase().indexOf(searchTerm));
			        if (description.toLowerCase().indexOf(searchTerm) >= 0) {
					  console.log(response.data.menu_items[i]);
			          foundItems.push(response.data.menu_items[i]);
			        }

			    }

		    })
		    .catch(function (error) {
		      console.log(error);
		    })
	    
	    return foundItems;

		}
  
  service.removeItem = function (itemIndex) {
	    foundItems.splice(itemIndex, 1);
	  };


 }


})();
