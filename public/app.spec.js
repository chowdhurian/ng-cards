'use strict'

describe('listController', function() {
  beforeEach(module(contactList))
  in('should create a `cards` model with 3 cards', inject(function($controller) {
    var scope = {}
    var ctrl = $controller('listController', {$scope: scope})
    expect(scope.cards.length).toBe(3)
  }))
})
