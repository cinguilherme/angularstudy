angular.module("listaTelefonica").config(function($routeProvider){

  $routeProvider.when("/contatos", {
    templateUrl: "view/contatos.html",
    controller: "listaTelefonicaController",
    resolve: {
      operadoras: function(operadorasAPI){
        return operadorasAPI.getOperadoras();
      }
    }
  });

  $routeProvider.when("/novoContato", {
    templateUrl: "view/novoContato.html",
    controller: "novoContatoController",
    resolve: {
      operadoras: function(operadorasAPI){
        return operadorasAPI.getOperadoras();
      }
    }
  });

  $routeProvider.when("/detalharContato/:serial",{
    templateUrl: "view/detalheContato.html",
    controller: "detalheContatoController"
  });

  $routeProvider.otherwise({ redirectTo: "/contatos"});

});
