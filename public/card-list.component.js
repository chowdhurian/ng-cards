angular
// on the `cardList` module
  .module('cardList')
  // register the `cardList` component
  .component('cardList', {
    template:
      '<p>Total cards: {{ $ctrl.cards.length }}</p>' +
      '<ul>' +
        '<li ng-repeat="card in $ctrl.cards">' +
          '<h5>{{ card.firstname }}</h5>' +
          '<p>{{ card.lastname }}</p>' +
          '<p>{{ card.phone }}</p>' +
          '<p>{{ card.address }}</p>' +
          '<p>{{ card.email }}</p>' +
        '</li>' +
      '</ul>',
    controller: function CardListController() {
      this.cards = [
        {
          "firstname":"Steven",
          "lastname":"Zozula",
          "phone":"6045200192",
          "address":"100 Water St., Vancouver, BC, V8I 2G3",
          "email":"steven@changeheroes.com"
        },
        {
          "firstname":"Daryl",
          "lastname":"Chmyko",
          "phone":"6042240422",
          "address":"289 Cordova St., Vancouver, BC, V6B 2L4",
          "email":"daryl@changeheroes.com"
        },
        {
          "firstname":"Aaron",
          "lastname":"Vandenbrink",
          "phone":"6047581029",
          "address":"200 Abbott St., Vancouver, BC, V9M 3K2",
          "email":"aaron.vandenbrink@gmail.com"
        }
      ]
      this.name = 'world'
    }
  })
