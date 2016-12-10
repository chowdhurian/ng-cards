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
  .factory('Messages', function() {
    var messages = {}

    messages.list = []

    messages.add = function(message) {
      messsages.list.push({id: messages.list.length, text: message})
    }

    return messages
  })
