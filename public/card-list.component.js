angular

// on the `cardList` module
  .module('cardList')

  // register the `cardList` component
  .component('cardList', {
    // the url will be relative to `index.html`
    templateUrl: './card-list.template.html',
    controller: ['$http', 'LoadCardsService', '$scope',
      function CardListController($http, $rootScope, LoadCardsService) {
        var ctrl = this
        ctrl.orderProp = 'firstname'

        // $http.get('assets/contacts.json')
        //   .then(function(response) {
        //     ctrl.cards = response.data
        //   })
        $rootScope.cards = LoadCardsService.getCards()
      }
    ]
  })
