angular.module("listaTelefonica").factory("contatosAPI", function($http, config){

  var _getContatos = function(){
    return $http.get(config.baseUrl+config.contatosAPIPort+"/contatos");
  }

  var _saveContato = function(contato){
    return $http.post(config.baseUrl+config.contatosAPIPort+"/contatos/add", angular.copy(contato));
  }

  return {
    getContatos:_getContatos,
    saveContato:_saveContato
  }

});
