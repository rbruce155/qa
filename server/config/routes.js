var answers = require('./../controllers/answers.js');
var questions = require('./../controllers/questions.js');

module.exports = function(app){
	app.get('/questions', function(req, res){
		questions.show(req, res);
	});

	app.post('/addQuestion', function(req, res){
		questions.add(req, res);
	});

	app.get('/showQuestion/:questid', function (req, res) {
		questions.showOne(req, res);
	});

}
