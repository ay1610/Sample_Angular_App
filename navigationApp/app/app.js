'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'ui.utils'
  ]).config(function($routeProvider){
    'use strict';

    $routeProvider.when('/registration', {
      templateUrl: 'views/registration.html',
      controller: 'RegistrationCtrl',
      controllerAs: 'registration'
    }).otherwise({
      redirectTo: '/registration'
    });
}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  });
}).filter('tel', function () {
  return function (tel) {
    if (!tel) { return ''; }

    var value = tel.toString().trim().replace(/^\+/, '');

    if (value.match(/[^0-9]/)) {
      return tel;
    }

    var city, number;

        city = value.slice(0, 3);
        number = value.slice(3);


    number = number.slice(0, 3) + '-' + number.slice(3);

    return (" 1-" + city + "-" + number).trim();
  };
});

