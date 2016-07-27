var app = angular.module('flapperNews', []);

app.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}]);

app.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){
		$scope.posts = posts.posts;
		$scope.posts = [
			{title: 'Celtics', upvotes: 5},
			{title: 'Nets', upvotes: 2},
			{title: 'Lakers', upvotes: 12},
			{title: 'Mavericks', upvotes: 9},
			{title: 'Trail Blazers', upvotes: 4}
		];
		$scope.addPost = function(){
			if(!$scope.title || $scope.title === ''){ return; }
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0
			});
			$scope.title = '';
			$scope.link = '';
		};
		$scope.incrementUpvotes = function(post){
			post.upvotes += 1;
		}
		$scope.deductUpvotes = function(post){
			post.upvotes -= 1;
		}
	}]);