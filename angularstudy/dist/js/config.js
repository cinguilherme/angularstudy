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
    controller: "detalheContatoController",
    resolve: {
      contato: function(contatosAPI, $route){
        var serial = $route.current.params.serial;
        return contatosAPI.getContato(serial);
      }
    }
  });

  $routeProvider.otherwise({ redirectTo: "/contatos"});

});

angular.module("listaTelefonica").config(function(serialGeneratorProvider){

  serialGeneratorProvider.setLength(10);

});
