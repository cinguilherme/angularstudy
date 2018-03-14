
angular.module("listaTelefonica").directive("uiAccordions", function(){

  return {
    controller: function($scope, $element, $attrs){

      var accordions = [];

      this.registerAccordion = function(accordionScope){
        accordions.push(accordionScope);
      };

      this.closeAllAcordions = function() {
        accordions.forEach(function(accordion){
          accordion.isOpened = false;
        });
      };

    }
  };

});

angular.module("listaTelefonica").directive("uiAccordion", function(){

  return {
    templateUrl: "view/accordion.html",
    transclude: true,
    scope: {
      title: "@"
    },
    require: "^uiAccordions",
    link: function(scope, elements, attrs, controler){
      controler.registerAccordion(scope);
      scope.open = function(){
        controler.closeAllAcordions();
        scope.isOpened = !scope.isOpened;
      };

    }
  };

});
