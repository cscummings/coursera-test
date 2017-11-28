(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getAllMenuItems = function () {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortname) {
    var promise = $http.get(ApiPath + '/menu_items/' + shortname + '.json')
                .then(function success (response) {
                      return response;
                }, function error (response) {
                  console.log("got an error: " + response);
                  return response;
                });
                return promise;
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
