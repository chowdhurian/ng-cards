'use strict'

angular

  // on the `cardDetail` module
  .module('cardDetail')

  // register the `cardDetail` component
  .component('cardDetail', {
    templateUrl: './card-detail.template.html',
    controller: ['$http', '$routeParams',
      function CardDetailController($http, $routeParams) {
        // var self = this
        const ctrl = this

        ctrl.cardId = $routeParams.cardId

        $http.get('assets/contacts.json')
          .then(function(response) {
            ctrl.card = (response.data.filter(function(card) {
              return card.phone == $routeParams.cardId
            }))[0]
          })
      }
    ]
  })
