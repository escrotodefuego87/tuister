tuister.controller('Registro', function($scope, $http){
    $scope.crearCuenta = function () {
        $http.post("http://tuister.com/user", $scope.usuario).then(function (response) {
            $scope.respuesta = response.data;
            console.log($scope.usuario)
            window.localStorage.setItem("token", $scope.repuesta.token);
            window.localStorage.setItem("user_id",$scope.respuesta.id);
        });
    }

})