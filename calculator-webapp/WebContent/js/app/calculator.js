angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.calculate = function() {
            if ($scope.operator == '+') {
            	$scope.result =  $scope.operand1 + $scope.operand2;
            } else if ($scope.operator == '-') {
            	$scope.result =  $scope.operand1 - $scope.operand2;
            } else if ($scope.operator == '*') {
            	$scope.result =  $scope.operand1 * $scope.operand2;
            } else if ($scope.operator == '/') {
            	$scope.result =  $scope.operand1 / $scope.operand2;
            }
        };
        $scope.clear = function() {
        	$scope.result="";
        	$scope.operand1="";
        	$scope.operand2="";
        	$scope.operator="";
        };
    });