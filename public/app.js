'use strict'

// declare module
var app = angular.module('contactList', [])

// configure module
app.filter('greet', function() {
  return function(name) {
    return 'Hello, ' + name + '! See math.'
  }
})

app.controller('listController', function listController($scope) {
  $scope.cards = [
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
})
