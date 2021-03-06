angular.module("listaTelefonica").directive("uiDate", function($filter){

  return {
    require: "ngModel",
    link: function(scope, element, attrs, ctrl){

      var formatDate = function(date) {
        date = date.replace(/[^0-9]+/g, "");
        if(date.length > 2){
            date = date.substring(0,2) + "/" + date.substring(2);
        }
        if(date.length > 5){
            date = date.substring(0,5) + "/" + date.substring(5,9);
        }
        return date;
      };

      element.bind("keyup", function() {
        ctrl.$setViewValue(formatDate(ctrl.$viewValue));
        ctrl.$render();
      });


      ctrl.$formatters.push(function(value){
        return $filter("date")(value,"dd/MM/yyyy");
      });


      ctrl.$parsers.push(function(value){
        if(value.length == 10){
          valores = value.split("/");
          return new Date(valores[2],valores[1]-1,valores[0]).getTime();
        }
        return value;
      });

    }
  };

});
