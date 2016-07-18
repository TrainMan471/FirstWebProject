var app = angular    
		  .module("myModule", [])
		  .controller("myController", function($scope) {
		  var mysteries = [
		  { name: "Sorrowful Mysteries", OneStar: 0, TwoStar: 0, ThreeStar: 0, FourStar: 0, FiveStar: 0 },
		  { name: "Joyful Mysteries", OneStar: 0, TwoStar: 0, ThreeStar: 0, FourStar:0, FiveStar: 0 },
		  { name: "Luminous Mysteries", OneStar: 0, TwoStar: 0, ThreeStar: 0, FourStar: 0, FiveStar: 0 },
		  { name: "Glorious Mysteries",  OneStar: 0, TwoStar: 0, ThreeStar: 0, FourStar: 0, FiveStar: 0 },
		  ];
		  
		  
		  $scope.mysteries = mysteries;
		  
		  function emptyFunction() {
		  }
		  
		  
		  $scope.incrementOneStar = function (mystery) {
		  mystery.OneStar++;
		  
		  }
		  
		  
		  
		  $scope.incrementTwoStar = function (mystery) {
		  mystery.TwoStar++;
		  
		  
		  }
		  
		  $scope.incrementThreeStar = function(mystery) {
		  mystery.ThreeStar++;
		  
		  }
		  
		  $scope.incrementFourStar = function(mystery) {
		  mystery.FourStar++;
		  
		  }
		  
		  $scope.incrementFiveStar = function(mystery) {
		  mystery.FiveStar++;
		  
		  }
		  
		  });



	 