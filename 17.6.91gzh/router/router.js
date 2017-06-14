/**
 * Created by lenovo on 2017/6/9.
 */

angular.module('AppRoute',[])
.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("aaa",{
            url:"/aaa",
            templateUrl:"html/1.html",
            // controller:function () {
            //     console.log('ddddd')
            // }
    

        })
        .state("yi",{
            url:"/yi",
            templateUrl:"html/1.1.html"
        })
        .state("er",{
            url:"/er",
            templateUrl:"html/1.2.html"
        })
        .state("san",{
            url:"/san",
            templateUrl:"html/1.3.html"
        })
        .state("bbb",{
            url:"/bbb",
            templateUrl:"html/2.html"
        })
        .state("liu",{
            url:"/liu",
            templateUrl:"html/1.6.html"
        })
        .state("qi",{
            url:"/qi",
            templateUrl:"html/1.7.html"
        })
        .state("ba",{
            url:"/ba",
            templateUrl:"html/1.8.html"
        })
        .state("jiu",{
            url:"/jiu",
            templateUrl:"html/1.9.html"
        })
        .state("shi",{
            url:"/shi",
            templateUrl:"html/1.10.html"
        })
        .state("shiyi",{
            url:"/shiyi",
            templateUrl:"html/1.11.html"
        })
        .state("shier",{
            url:"/shier",
            templateUrl:"html/1.12.html"
        })
        .state("shisan",{
            url:"/shisan",
            templateUrl:"html/1.13.html"
        })
        .state("shisi",{
            url:"/shisi",
            templateUrl:"html/1.114.html"
        })
        .state("shiwu",{
            url:"/shiwu",
            templateUrl:"html/1.15.html"
        })
        .state("ccc",{
            url:"/ccc",
            templateUrl:"html/3.html"
        })
        .state("ddd",{
            url:"/ddd",
            templateUrl:"html/4.html"
        })
        .state("si",{
            url:"/si",
            templateUrl:"html/1.4.html"
        })
        .state("wu",{
            url:"/wu",
            templateUrl:"html/1.5.html"
        })
        .state("eee",{
            url:"/eee",
            templateUrl:"html/5.html"
        })
        .state("fff",{
            url:"/fff",
            templateUrl:"html/6.html"
        })
        .state("ggg",{
            url:"/ggg",
            templateUrl:"html/7.html"
        });
    $urlRouterProvider.otherwise("yi");
    


});