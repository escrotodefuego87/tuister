tuister.controller('login', function($scope, $http){
    $scope.iniciarSesion = function () {
        $http.post("http://tuister.com/login", $scope.usuario).then(function (response) {
            $scope.respuesta = response.data;
            console.log($scope.respuesta);
            console.log(response);
            window.localStorage.setItem("token", $scope.repuesta.token);
            window.localStorage.setItem("user_id", $scope.respuesta.id);
        });
    }

})