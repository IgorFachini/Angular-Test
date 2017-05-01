var diretivas = angular.module('minhasDiretivas', []).directive('deletar', function() {
  var ddo = {};
  ddo.restrict = "E";
  ddo.scope = {
    nome: '@',
    acao : '&'
  }
  ddo.template = '<button class="btn btn-danger" type="button" ng-click="acao(value)">{{nome}}</button>';

  return ddo;
});
