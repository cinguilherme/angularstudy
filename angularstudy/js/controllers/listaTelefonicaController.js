angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope, $filter, contatosAPI, operadorasAPI, serialGenerator){

  $scope.app = "Lista Telefonica!!!";

  $scope.contatos = [];

  $scope.operadoras = [];

  $scope.addContato = function(contato){

    contato.serial = serialGenerator.generate();
    contato.data = new Date();
    $scope.contatos.push(angular.copy(contato));

    contatosAPI.saveContato(angular.copy(contato)).
    success(function(data){
      console.log("sucess -> " + data);
    }).
    error(function(data){
      console.log("error -> " + data);
    });

    delete $scope.contato;
    $scope.contatoForm.$setPristine();
  }

  $scope.delContatos = function(contatos){

    $scope.contatos = contatos.filter(function(contato){
      if(!contato.selecionado) return contato;
    });
  }

  $scope.isContatosSelecionados = function(contatos){
    return !contatos.some(function(contato){
      return contato.selecionado;
    });
  }

  $scope.ordenarPor = function(coluna){

    $scope.criterioDeOrdenacao = coluna;
    $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
  }

  var carregarContatos = function(){
    contatosAPI.getContatos().success(function(data, status){
      console.log("sucess -> load contatos from backend as JSON");
      $scope.contatos = data;
    }).error(function(data, status){
      //console.log("erro -> " + JSON.stringify(data) );
      console.log("erro contatos api");
      $scope.errorContatos = "Não foi possivel carregar os contatos.";
    });
  }

  var carregarOperadoras = function() {
    operadorasAPI.getOperadoras().success(function(data,status){
      $scope.operadoras = data;
    }).error(function(data,status){
      console.log("erro -> " + JSON.stringify(data) );
    });
  }

  carregarContatos();
  carregarOperadoras();

});
