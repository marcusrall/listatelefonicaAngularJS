angular.module("listaTelefonica").factory("contatoAPI" , function($http, config){

    var _getContatos = function (){
          return $http.get(config.baseUrl + "/api/v1/contato");
    };

    var _saveContato = function (contato){
          return $http.get(config.baseUrl + "/api/v1/contato", contato);
    };


    return {
      getContatos: _getContatos,
      saveContato: _saveContato
    };

});
