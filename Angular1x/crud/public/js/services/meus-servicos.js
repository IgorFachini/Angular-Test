var meusServicos = angular.module('meusServicos', []).factory("cadastro", function(recursoFoto, $q, $rootScope) {

	var evento = 'Cadastrada';

	var service = {};

	service.cadastrar = function(app) {
		return $q(function(resolve, reject) {
			recurso.save(app, function() {
				$rootScope.$broadcast(evento);
				resolve({
					mensagem: ' ' + app.nome + ' incluída com sucesso',
					inclusao: true
				});
			}, function(erro) {
				console.log(erro);
				reject({
					mensagem: 'Não foi possível incluir a  ' + foto.app
				});
			});

		});
	};
	return service;
});
