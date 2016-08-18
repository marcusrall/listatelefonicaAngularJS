angular.module("listaTelefonica").service("operadorasAPI", function ($http, config){

    this.getOperadoras = function(){
      return $http.get(config.baseUrl + "/api/v1/operadora");
    }
});
