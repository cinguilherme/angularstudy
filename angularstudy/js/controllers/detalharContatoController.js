angular.module("listaTelefonica").controller("detalheContatoController",
  function($scope, $routeParams, contatosAPI){

    $scope.contato = {};
    console.log($routeParams.serial);

    contatosAPI.getContato($routeParams.serial).success(function(data){
      console.log(data);
      $scope.contato = data;
    });

});
