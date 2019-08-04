(function(angular, undefined) {
	'use strict';
  
  angular.module('myApp', [
  	'app.card'
	]);
  
	var appCard = [
    function() {
      return {
        restrict: 'A',
        template: '<div class="card-header">' +
        					'<h3>{{ ctl.cards[$index].title }}</h3>' +
        					'</div>' +
        					'<div class="card-body"><p>{{ ctl.cards[$index].body }}</p></div>'

      };
    }
  ];
  
  var CardController = [
    function() {
      // inject a service here and get your ng-repeat on in the html using objects
      var cardObject = {
      title: "Visión y Misión",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu viverra sem. Nam nec fermentum tellus, ut consectetur mi. Mauris fermentum tempus risus in finibus. Nullam ac ipsum faucibus, aliquam felis aliquam, faucibus mi. Suspendisse metus mauris, volutpat ac bibendum ac, elementum sit amet leo. Proin non tellus est. Pellentesque nibh justo, lacinia sit amet commodo id, venenatis id mi. Pellentesque vel magna eget dui pharetra semper nec ac odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eget velit ac tortor bibendum pellentesque non non enim. Sed quis metus non tortor hendrerit venenatis. Nunc eget quam in purus interdum lacinia sit amet at libero. Vivamus ac nunc tellus. Mauris mattis sit amet nisl sit amet blandit. Etiam convallis facilisis hendrerit. Donec egestas tempus iaculis."
      };
      
      this.cards = [cardObject, cardObject];
    }
  ];
  
  angular.module('app.card', [])
  				.directive('appCard', appCard)
  				.controller('CardController', CardController);
})(angular);