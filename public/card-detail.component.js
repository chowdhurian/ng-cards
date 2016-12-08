angular

  // on the `cardDetail` module
  .module('cardDetail')

  // register the `cardDetail` component
  .component('cardDetail', {
    templateUrl: './card-detail.template.html',
    controller: function CardDetailController() {
      var self = this
    }
  })
