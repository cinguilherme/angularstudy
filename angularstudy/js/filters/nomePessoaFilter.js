angular.module("listaTelefonica").filter("nomePessoa", function(){

  return function(input) {
    console.log(input);
    return input;
  };

});
