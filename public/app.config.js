angular
  .module('contactList')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!')

      $routeProvider
        .when('/cards/:cardId', {
          template: '<card-detail></card-detail>'
        })
        .otherwise('/cards')
    }
  ])
