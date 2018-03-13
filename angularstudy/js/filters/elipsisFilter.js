angular.module("listaTelefonica").filter("elipsis", function(){

  return function(input, tam){
    tam = tam || 10;
    if(input.length < tam) return input;
    return input.substring(0,tam-1)+"...";
  }

});
