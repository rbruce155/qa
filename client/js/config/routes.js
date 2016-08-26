QAapp.config(function($routeProvider){

	 $routeProvider
	 		.when('/', {
	 			templateUrl: './../static/partials/main.html',
	 			controller: "questionsController"
	 		})
	        .when('/dashboard',{
	            templateUrl: './../static/partials/dashboard.html',
	            controller: "questionsController"
	        })
	        .when('/new_question',{
	            templateUrl: './../static/partials/new_question.html',
	            controller: "questionsController"
	        })
					.when('/show_question',{
							templateUrl: './../static/partials/show_question.html',
							controller: "questionsController"
					})
	        .otherwise({
	          redirectTo: '/'
	        });
})
