//localizar um modulo | Declara um controle0
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatoAPI, operadorasAPI){


    $scope.app = "Lista Telefonica";

    $scope.contatos = [];


    var carregarContatos = function (){
      contatoAPI.getContatos().success(function(data){
          $scope.contatos = data;
      }).error(function (data, status){

      });
    }

    var carregarOperadoras = function (){

    operadorasAPI.getOperadoras().success(function(data){
          $scope.operadoras = data;
      });

    }

    $scope.adicionarContato = function(contato){

        contato.data = new Date();

        contatoAPI.saveContato(contato).success(function (data){
          console.log(data);
          delete $scope.contato;
          $scope.contatoForm.$setPristine();
          carregarContatos();
        });

    };

    $scope.apagarContatos = function(contatos){

        $scope.contatos = contatos.filter(function(contato){
            if(!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function(contatos) {
      return contatos.some(function (contato){
          return contato.selecionado;
      });
    }
    $scope.ordenarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }

    carregarContatos();
    carregarOperadoras();

});
