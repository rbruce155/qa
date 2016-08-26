var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
	question_text: {type:String, required: true},
	question_description: {type:String},
	question_answers: {type:Number, default: 0},
	created_at: {type: Date, default: Date()}
});

mongoose.model('Question', QuestionSchema);
