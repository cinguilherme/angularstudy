angular.module("listaTelefonica").filter("nomePessoa", function(){

  return function(input) {

    var nomes = input.split(" ");
    var nomeFiltrado = "";

    for(var i = 0; i < nomes.length; i++){
      nomeFiltrado += nomes[i].length > 2? nomes[i][0].toUpperCase()+nomes[i].substring(1) + " ": nomes[i]+" ";
    }

    console.log(nomeFiltrado.trim());

    return nomeFiltrado;
  };

});
