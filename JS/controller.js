tuister.controller('Demo', function ($scope, $http, fileUpload, $routeParams) {
    $scope.hola = "Hola 5A";
    $scope.nombre = "";

    $scope.nombres = ["Randy", "Chuy", "Wario"];
    $scope.alumnos =
        [
            {
                "nombre": "David",
                "matricula": "1703150047",
                "calificacion": 10
            },
            {
                "nombre": "Randy",
                "matricula": "1703150032",
                "calificacion": 8
            },
            {
                "nombre": "Chuy (La cosa morada)",
                "matricula": "1703150033",
                "calificacion": 6
            }
        ];
    $scope.respuesta = {};
    $scope.usuario = {};
    $scope.newUsuario = {};
    $scope.posts = {};
    
    let dato=$routeParams.id;
    $scope.mostrarNombre = function (al) {
        $scope.alumno =
            {
                nombre: al.nombre,
                matricula: al.matricula,
                calificacion: al.calificacion
            }
    }
    
    $scope.crearCuenta = function () {
        $http.post("http://tuister.com/user", $scope.usuario).then(function (response) {
            $scope.respuesta = response.data;
            console.log($scope.usuario)
            window.localStorage.setItem("token", $scope.repuesta.token);
            window.localStorage.setItem("user_id",$scope.respuesta.id);
        });
    }
    
    $scope.uploadFile = function () {
        var file = $scope.myFile;
        var uploadUrl = "http://tuister.com/post";
        var data =
        {
            "title": "Titulo de la imagen",
            "body": "body de la imagen",
            "user_id": 1
        }
        fileUpload.uploadFileToUrl(file, uploadUrl, data);
    };



});