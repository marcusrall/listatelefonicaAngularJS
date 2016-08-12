//localizar um modulo | Declara um controle0
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter){
    $scope.app = "Lista Telefonica";

    $scope.contatos = [
      {nome: $filter('uppercase')("Pedro"), telefone: "99998888", data: new Date(), cor: "blue"},
      {nome: "Ana", telefone: "99998877" , data: new Date(),cor: "yellow"},
      {nome: "Maria", telefone: "99998855" , data: new Date(),cor: "red"}
    ];

    $scope.operadoras = [
      {nome: "OI", codigo: 14, categoria: "Celular", preco: 2},
      {nome: "VIVO", codigo: 15, categoria: "Celular", preco: 1},
      {nome: "TIM", codigo: 41, categoria: "Celular", preco: 3},
      {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
      {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
    ];

    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
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

});
