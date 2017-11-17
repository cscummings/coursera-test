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
  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'MainCategoriesController as list',
    resolve: {
       categories: ['MenuDataService', function (MenuDataService) {
         return MenuDataService.getAllCategories();
      }]
     }
    	
  })

/*  .state('categories.menuItems', {*/
  .state('menuItems', {	  
/*	url: '/categories/items/{catId}',*/
	url: '/items/{catId}',
    templateUrl: 'src/menuapp/templates/main-item.template.html',
    controller: 'MenuItemsController as catlist',
    resolve: {
        items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.catId);
       }]
      }
  });

}

})();
