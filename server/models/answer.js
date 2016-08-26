var mongoose = require('mongoose');
var AnswerSchema = new mongoose.Schema({
	answer_text: {type:String, required: true},
	answer_details: {type:String},
	answer_by: {type:String, required: true},
	answer_likes: {type:Number}
});

mongoose.model('Answer', AnswerSchema);
