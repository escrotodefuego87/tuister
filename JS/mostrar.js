tuister.controller('mostrarPosts', function($scope, $http){
    $scope.post={};
    $scope.post.user_id = window.localStorage.getItem("user_id");

    $scope.obtenerPosts = function () {
        $http.get("http://tuister.com/posts").then(function (response) {
    
            $scope.posts = response.data[0];
            console.log($scope.posts);
        });
    }
    $scope.obtenerPosts();

    $scope.newPost=function(){
        $http.post("http://tuister.com/post", $scope.post).then(function(response){
            $scope.post = response.data;
            console.log($scope.post)
            $scope.post.user_id=window.localStorage.getItem("user_id");
        });
    }
    $scope.deletePost=function(){
        $http.post("http://tuister.com/post/:", $scope.post).then(function(response){
            $scope.post = response.data;
            console.log($scope.post)
            $scope.post.user_id=window.localStorage.getItem("user_id");
        });
    }

});
