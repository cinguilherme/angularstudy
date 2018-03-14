angular.module("listaTelefonica").controller("novoContatoController",
  function($scope, $filter, contatosAPI, serialGenerator, $location, operadoras){


  $scope.operadoras = [];

  $scope.addContato = function(contato){

    contato.serial = serialGenerator.generate();

    contatosAPI.saveContato(angular.copy(contato)).
    success(function(data){
      console.log("sucess -> " + data);
      $location.path("/contatos")
    }).
    error(function(data){
      console.log("error -> " + data);
    });

    delete $scope.contato;
    $scope.contatoForm.$setPristine();
  }


    var carregarOperadoras = function() {

        $scope.operadoras = operadoras.data;

    };

    carregarOperadoras();

});
