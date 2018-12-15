angular.module('myCtrl', []).controller('CommonCtrl', function($scope) {

  $scope.showMe = false;
  $scope.showFunction = function() {
    $scope.showMe = !$scope.showMe;
  };

  $scope.showMe2 = false;
  $scope.showFunction2 = function() {
    $scope.showMe2 = !$scope.showMe2;
  };

  $scope.showMe3 = false;
  $scope.showFunction3 = function() {
    $scope.showMe3 = !$scope.showMe3;
  };


});
