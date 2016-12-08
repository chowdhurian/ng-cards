'use strict'

describe('listController', function() {

  //load the module that has the `cardList` component before each test
  beforeEach(module(cardList))

  it('should create a `cards` model with 3 cards', inject(function($componentController) {
    var ctrl = $componentController('cardList')
    expect(ctrl.cards.length).toBe(3)
  }))
})
