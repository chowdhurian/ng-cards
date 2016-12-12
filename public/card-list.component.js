angular

// on the `cardList` module
  .module('cardList')

  // register the `cardList` component
  .component('cardList', {
    // the url will be relative to `index.html`
    templateUrl: './card-list.template.html',
    controller: ['$http',
      function CardListController($http, Messages) {
        var ctrl = this
        ctrl.orderProp = 'firstname'

        $http.get('assets/contacts.json')
          .then(function(response) {
            ctrl.cards = response.data
            console.log(response.data)
          })
      }
    ]
  })
