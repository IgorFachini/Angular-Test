console.log("controller");
app.controller('MainController',function($scope,$firebaseArray){
console.log("dentro do MainController");

  var ref = firebase.database().ref();


  $scope.DB = $firebaseArray(ref);
  console.log(  $scope.DB );

  $scope.titulo='Angular1.x Test';
  $scope.mensagem = '';

  $scope.generos=['Femenino','Masculino']

  $scope.app={nome:'',apelido:'',genero:'',idade:''}


  $scope.submeter = function() {
    if ($scope.formulario.$valid) {
      add();
    }
  };
  function add(){
    $scope.DB.$add($scope.app);
    $scope.app={nome:'',apelido:'',genero:'',idade:''};
    $scope.mensagem = "cadastrado";

  }
  $scope.edit=function(value){
    $scope.app=value
  }
  $scope.delete=function(item){
    $scope.DB.$remove(item)
    $scope.mensagem = "Deletado";
    toastr["success"]("My name is Inigo Montoya. You killed my father. Prepare to die!");
  }



});
