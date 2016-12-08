angular
// on the `cardList` module
  .module('cardList')
  // register the `cardList` component
  .component('cardList', {
    // the url will be relative to `index.html`
    templateUrl: './card-list.template.html',
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
