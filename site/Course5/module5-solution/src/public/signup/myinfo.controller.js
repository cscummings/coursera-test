(function() {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);


/**
 * Handles display of user profile.
 */
MyinfoController.$inject = ['$state', 'user','ApiPath','CurrentUserService', 'MenuService'];
function MyinfoController($state, user, ApiPath, CurrentUserService, MenuService) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.completed = false;
  $ctrl.basePath = ApiPath;
  $ctrl.error = 'Uh-oh, something went wrong. Call the restaurant';
  $ctrl.noMenuItem = 'Not Signed up Yet.';
  $ctrl.successMsg ='You are signed up for our newsletter!';
  $ctrl.failMsg = '';
  $ctrl.menuItem = {};

  MenuService.getMenuItem(user.dish).then(function (response)
  {
    console.log("got item and it was: " + response);
    if( response.status == 200) {
      $ctrl.menuItem = response.data;
      $ctrl.completed = CurrentUserService.setCurrentUser(user);
    } else {$ctrl.failMsg = $ctrl.noMenuItem;}
  });


  /**
   * Handles when user clicks the signup Submit button - modification needed....
   */
  $ctrl.retrieveProfile = function() {
    console.log("controller myinfo");
    $ctrl.user = CurrentUserService.getCurrentUser();
// save user entered info, (remember dont use typsescript) using the signupservice (faking http)
// then set save info as current user if all is well, otherwise give a failure msg

    MenuService.getMenuItem(user.dish).then(function (response)
    {
      console.log("got item and it was: " + response);
      if( response.status == 200) {
        $ctrl.completed = true;
      } else {$ctrl.failMsg = $ctrl.noMenuItem;}
    });
    // if(MenuService.getMenuItem(user.dish)) {
    //   console.log("ready to set user");
    //   $ctrl.completed = CurrentUserService.setCurrentUser(user);
    //   return;
    // } else {
    //    $ctrl.failMsg = $ctrl.noMenuItem;
    //   return;
    // }
  };


  $ctrl.valid = function() {
    return ($ctrl.firstname !== '' && $ctrl.lastname !== '');
  };

}


})();
