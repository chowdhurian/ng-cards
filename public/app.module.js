'use strict'

// define the `contactList` module
angular
  .module('contactList', [
    'ngRoute',
    // which depends on the `cardList` and `cardDetail` modules
    'cardList',
    // 'cardSearch',
    'cardDetail'
  ])
  .factory('LoadCardsService', function($rootScope, $http) {
    var LoadCardsService = {}
    LoadCardsService.data = {}

    LoadCardsService.getCards = function() {
      $http.get('assets/contacts.json')
        .then(function(response) {
          LoadCardsService.data.cards = response.data
        })

      return LoadCardsService.data
    }
    return LoadCardsService
  })
