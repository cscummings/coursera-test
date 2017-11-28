(function() {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);


/**
 * Handles login form credentials and redirects user to page.
 */
SignupController.$inject = ['$state', 'user','menuItems','CurrentUserService', 'MenuService'];
function SignupController($state, user, menuItems, CurrentUserService, MenuService) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.user.firstname = '';
  $ctrl.firstname = '';
  $ctrl.lastname = '';
  $ctrl.email = '';
  $ctrl.phone = '';
  $ctrl.dish = '';
  $ctrl.completed = false;
  $ctrl.error = 'Uh-oh, something went wrong. Call the restaurant';
  $ctrl.noMenuItem = 'No such menu number exists. Please check menu for list of available short names for your favorite item.';
  $ctrl.successMsg ='Your information has been saved!';
  $ctrl.failMsg = '';

  /**
   * Handles when user clicks the signup Submit button - modification needed....
   */
  $ctrl.signup = function() {
    console.log("controller signup");
// save user entered info, (remember dont use typsescript) using the signupservice (faking http)
// then set save info as current user if all is well, otherwise give a failure msg
    MenuService.getMenuItem(user.dish).then(function (response)
    {
      console.log("got item and it was: " + response);
      if( response.status == 200) {
        $ctrl.completed = CurrentUserService.setCurrentUser(user);
      } else {
        $ctrl.user.dish = '';
        $ctrl.failMsg = $ctrl.noMenuItem;
      }
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
