(function () {
'use strict';

angular.module("LunchCheck", [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.messageStyle = {
			"color" : "green",
			"font-size" : "16px",
			"padding" : "5px"
			};

	$scope.lunchItems = "";
    $scope.lunchCommentary = "";

    var comma = ',';
    
    $scope.checkButton = function () {
        console.log("button Pressed");
        var parsedStringArray = $scope.lunchItems.split(comma);
        if (parsedStringArray == "" || parsedStringArray.length ==  0) {
        	$scope.lunchCommentary = "Please enter data first.";
            $scope.messageStyle.color = "red";
            
        } else {
        	if (parsedStringArray.length <= 3) { 
        		$scope.lunchCommentary = "Enjoy!";
        	} else $scope.lunchCommentary = "Too Much!";
            $scope.messageStyle.color = "green";

        }
        

        $scope.printMessage();
    };
    
    $scope.printMessage = function () {
        return $scope.lunchCommentary;
    };
};


})();

