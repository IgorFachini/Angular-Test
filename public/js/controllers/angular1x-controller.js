angular.module('angular1x',["firebase" ])
.controller('angular1xController',function($scope,$firebaseArray){


  var ref = firebase.database().ref();


  $scope.DB = $firebaseArray(ref);
   console.log(  $scope.DB );

  $scope.titulo='Angular1.x Test';
  $scope.generos=['Femenino','Masculino']


  $scope.app={nome:'',apelido:'',genero:'',idade:''}


  $scope.add=function(){
    $scope.DB.$add($scope.app);
    $scope.app={nome:'',apelido:'',genero:'',idade:''}

  }

  $scope.edit=function(value){
    $scope.app=value
  }
  $scope.delete=function(item){
    $scope.DB.$remove(item)
  }



});
