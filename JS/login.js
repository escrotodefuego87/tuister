tuister.controller('login', function($scope, $http){
    $scope.iniciarSesion = function () {
        $http.post("http://tuister.com/login", $scope.usuario).then(function (response) {
            $scope.respuesta = response.data;
            console.log($scope.respuesta);
            console.log(response);
            window.localStorage.setItem("user_id", $scope.respuesta.id);
            window.location.href = "#/mostrar";
			window.location.reload();

        });
    }

    $scope.cerrarSesion = function()
	{
		$http.post("http://tuister.com/logout/"+window.localStorage.getItem("userid")).then(function(response)
		{
			window.localStorage.removeItem("token");
			window.localStorage.removeItem("userid");
			window.location.href = "#/login";
			window.location.reload();
		});
	}

})