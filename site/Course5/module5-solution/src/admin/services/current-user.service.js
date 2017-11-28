(function() {
"use strict";

angular.module('public')
.service('CurrentUserService', CurrentUserService);

/**
 * Used to store and track information about the currently logged in user.
 * This is intended to be injected any time we need some user metadata
 * or to find out if the user is authenticated.
 **/
function CurrentUserService() {
  var service = this;

  var user  =  {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  dish: ''
  };

  /**
   * Load the current user with username and token
   */

  service.getCurrentUser = function() {
    return user;

  };

  service.setCurrentUser = function(newuser) {
    user.firstname = newuser.firstname;
    user.lastname = newuser.lastname;
    user.email = newuser.email;
    user.phone = newuser.phone;
    user.dish = newuser.dish;
    service.getMenuItem(newuser.dish);
    return true;
  } 

  service.resetCurrentUser = function(){
    user.firstname = '';
    user.lastname = '';
    user.email = '';
    user.phone = '';
    user.dish = '';
    
  };

  service.getMenuItem = function(shortname) {

  };

}


})();
