angular.module("listaTelefonica").controller("detalheContatoController",
  function($scope, $routeParams, contato){

    $scope.contato = contato.data;
    

});
