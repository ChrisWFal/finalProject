var bookReview = angular.module('bookReview', ['ngRoute'])
    //ROUTE
bookReview.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/rental', {
            templateUrl: 'pages/rentals.html',
            controller: 'rentalController'
        })
        .when('/map', {
            templateUrl: 'pages/map.html',
            controller: 'mapController'
        })
        .when('/results',{
            templateUrl: 'pages/results.html',
            controller: 'hotelController'
        })
});


//SERVICE
bookReview.service('bookDescription', function () {
    this.description = 'Movie Review';
})

bookReview.service('hotelLocation', function () {
    this.location = 'Denver';
})

//CONTROLLERS
bookReview.controller('homeController', ['$scope', 'bookDescription', 'hotelLocation', function ($scope, bookDescription, hotelLocation) {
    $scope.description = bookDescription.description;
    $scope.$watch('description', function () {
        bookDescription.description = $scope.description;

    })

    $scope.location = hotelLocation.location;
    $scope.$watch('location', function () {
        hotelLocation.location = $scope.location;
    })

 }]);
bookReview.controller('homeHotelController', ['$scope', 'bookDescription', 'hotelLocation', function ($scope, bookDescription, hotelLocation) {
    $scope.description = bookDescription.description;
    $scope.$watch('description', function () {
        bookDescription.description = $scope.description;

    })

    $scope.location = hotelLocation.location;
    $scope.$watch('location', function () {
        hotelLocation.location = $scope.location;
    })

 }]);

//bookReview.controller('bookController', ['$scope', '$http', 'bookDescription', function ($scope, $http, bookDescription) {
//
//    //    $scope.bookD = bookDescription.bookD;
//    //    $scope.$watch('bookD', function () {
//    //        bookDescription.bookD = $scope.bookD;
//    //    })
//
//    $http.get('http://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=9aa4f841c860bb510695c9a5ef49eb4e%3A8%3A74093662')
//        .success(function (data) {
//            console.log("success");
//            var index = 0;
//            
//            for (var i = 0; i < data.results.length; i++) {
//                    
//                if (bookDescription.description === data.results[i].sort_name) {
//    
//                    var index = i;
//                    console.log(index);
//                }
//                
//            }
//        console.log('you');
//
//            $scope.summary = data.results[index].summary_short;
//
//        })
//        .error(function (data) {
//            console.log('fail');
//        })
//}]);

bookReview.controller('hotelController', ['$scope', '$http', 'hotelLocation', function ($scope, $http, hotelLocation) {

    $http.get('https://api.sandbox.amadeus.com/v1.2/cars/search-airport?apikey=KQZRxKNqAZC5RfrAYwR81UngYJqkTxZN&location=NCE&pick_up=2016-06-04&drop_off=2016-06-08')
        .success(function (data) {
            console.log("success")
            var index2 = 0;
            for (var i = 0; i < data.results.length; i++) {
                if (hotelLocation.location === data.results[i].address.city) {
                    var index2 = i;
                    console.log(index2);

                }
            }
            $scope.price = data.results[index2].total_price.amount;

        })
        .error(function (data) {
            console.log('fail');

        })
}]);