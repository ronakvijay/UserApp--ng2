var myApp = angular.module('myApp' ,[]);

myApp.controller('AppCtrl' , ['$scope' , '$http', function($scope , $http) {
console.log("Hello from controller");


var refresh = function() {
    $http({
    method:'GET',
    url:'/users'
}).then( function successCallback(response) {
    console.log("I got the data");
    console.log(response.data);
    $scope.users = response.data;
},function errorCallback(response){

});
};
 refresh();
$scope.addUsers = function(){
    console.log($scope.user);
    $http({
        method:'POST',
        url:'/users',
        data:$scope.user
    });
    refresh();
    
};

$scope.removeUsers = function(id) {
    console.log(id);

    $http.delete('/users/' + id );
    refresh();
};

}]);