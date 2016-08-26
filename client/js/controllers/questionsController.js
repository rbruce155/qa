QAapp.controller('questionsController', function( questionsFactory, $scope, $location){


	$scope.username = {};
	$scope.questionsList = [];
	$scope.questionInfo = {};

	//set username
	$scope.setUser = function (user) {
		$scope.username = user;
		console.log($scope.username);
		$location.path('/dashboard');
	}

	//get questions from questionsfactory
	questionsFactory.showAll(function(questions){
		$scope.questionsList = questions;
	});

	$scope.addQuestion = function (newQuestion) {
		var newQuestionFull = {question_text: newQuestion.question_text, question_description: newQuestion.question_description};
		questionsFactory.addQuestion(newQuestionFull, function(data){
			$scope.questionsList = data;
			$location.path('/dashboard');
		})
	};

	$scope.showQuestion = function (question) {
		questionsFactory.showOne(question, function (data) {
			$location.path('/show_question');
			$scope.questionInfo = data;
			console.log($scope.questionInfo);

		})
	}





});
