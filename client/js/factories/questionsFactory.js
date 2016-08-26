QAapp.factory('questionsFactory', function($http){
	var factory = {};

	factory.showAll = function(callback){
		$http.get('/questions').success(function(output){
			callback(output);
		});
	};

	factory.addQuestion = function(newQuestion, callback){
		$http.post('/addQuestion', newQuestion).success(function(output){
			callback(output);
		});
	};

	factory.showOne = function (question, callback) {
		$http.get('/showQuestion/' + question._id ).success(function (output) {
			callback(output);
		});
	};

	return factory;
});
