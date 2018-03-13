angular.module("listaTelefonica").directive("uiNumTel", function(){

  return {
    require: "ngModel",
    link: function(scope, element, attrs, ctrl){

      var formatNumTel = function(numero){
        numero = numero.replace(/[^0-9]+/g, "");

        if(numero.length > 2){
          numero = "(" + numero.substring(0,2) + ") " + numero.substring(2);
        }

        if(numero.length > 10){
          if(numero.length == 13){
            numero = numero.substring(0,9) + "-" + numero.substring(9,13);
          }
          else {
            numero = numero.substring(0,10) + "-" + numero.substring(10,14);
          }
        }

        return numero;
      }

      element.bind("keyup", function(){
        console.log(ctrl.$viewValue);
        ctrl.$setViewValue(formatNumTel(ctrl.$viewValue));
        ctrl.$render();
      });


    }
  }

});
