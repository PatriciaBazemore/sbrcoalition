angular.module('Restaurant', ['ngRoute', 'ngResource'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        // controller: 'WelcomeController'
    })
    .when('/aboutus', {
        templateUrl: 'views/aboutus.html',
        // controller: 'AboutusController'
    })
    .when('/contactus', {
        templateUrl: 'views/contactus.html',
        // controller: 'ContactusController'
    })
    .when('/directions', {
        templateUrl: 'views/directions.html',
        // controller: 'DirectionsController'
    })
    .when('/menu', {
        templateUrl: 'views/menu.html',
        // controller: 'MenuController'
    })
    // .when('/category/:id', {
    //     templateUrl: 'views/category.html',
    //     controller: 'CategoryController'
    // })
    // .when('/product/:id', {                          Can make optional add on to provide description for each menu item
    //     templateUrl: 'views/singleProduct.html',
    //     controller: 'productController'
    // })
    // .when('/checkout', {                             Can add on option to order and pay online
    //     templateUrl: 'views/checkout.html',
    //     controller: 'CheckoutController'
    // })
    
    // .when('/cart', {                                 Can add on online ordering
    //     templateUrl: 'views/cart.html',
    //     controller: 'CartController'
    // })
    
    .otherwise({
        redirectTo: '/'
    });
}]);