(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })
  .state('items', {
    url: '/items/{shortname}',
    templateUrl: 'src/menuapp/templates/main-item.template.html',
    controller: 'MenuItemsController as list',
    resolve: {
        items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.shortname);
       }]
      }
  })

  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'MainCategoriesController as list',
    resolve: {
       items: ['MenuDataService', function (MenuDataService) {
         return MenuDataService.getAllCategories();
      }]
     }
    	
  });
}

})();
