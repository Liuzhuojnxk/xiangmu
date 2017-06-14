/**
 * Created by lenovo on 2017/6/9.
 */
app.controller("Aaa1",function ($scope,$http,$timeout) {
    $http.get("data/data.json").success(function (data) {
// $scope.shuju=data[0];
        $scope.tu1=data[0].tu1;
        $scope.tu2=data[1].tu2;
        $scope.zi1=data[2].zi1;
        $scope.tu3=data[3].tu3;
        $scope.zi2=data[4].zi2;
        $scope.tu4=data[5].tu4;
        $scope.tu5=data[6].tu5;
        $scope.tu6=data[7].tu6;
        $scope.tu7=data[8].tu7;
        $scope.tu8=data[9].tu8;
        $scope.tu9=data[10].tu9;
        $scope.tu10=data[11].tu10;
        $scope.tu11=data[12].tu11;
// alert($scope.tu2);


    });
    var h1=document.getElementsByTagName("h1");
    $timeout(function () {
      
        
    },500)
});
