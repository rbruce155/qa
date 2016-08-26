var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
	return{
		show: function(req, res){
			Question.find({}, function(err, results){
				if(err){
					console.log(err);
					res.json(err);
				}else{
					res.json(results);
				}
			})
		},
		add: function(req, res){
			console.log('hello from add customer!', req.body.name, req.body.created_at);
			var new_question = new Question({question_text: req.body.question_text, question_description: req.body.question_description});
			new_question.save(function(err){
				if(err){
					console.log('fail to add to database!');
					res.json(err);
				}else{
					console.log('successfully added to the database');
					module.exports.show(req, res);
				}
			})
		},
		showOne: function (req, res) {
			Question.findById(req.params.questid, function (err, question) {
				if (err) {
					console.log('there was and error getting that id');
				}
				else {
					console.log('successfully got quetion from db');
					res.json(question);
				}
			})
		}

	}

})();
