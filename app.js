var app = angular
		  .module("myModule", [])
		  .controller("myController", function($scope) {
		  var mysteries = [
		  { name: "Sorrowful Mysteries", likes: 0, dislikes: 0 },
		  { name: "Joyful Mysteries", likes: 0, dislikes: 0 },
		  { name: "Luminous Mysteries", likes: 0, dislikes: 0 },
		  { name: "Glorious Mysteries", likes: 0, dislikes: 0 },
		  ];
		  
		  $scope.mysteries = mysteries;
		  
		  $scope.incrementLikes = function (mystery) {
		  mystery.likes++;
		  }
		  
		  $scope.incrementDislikes = function (mystery) {
		  mystery.dislikes++;
		  
		  }
		  
		 });





	 