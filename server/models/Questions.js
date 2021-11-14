const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  answer: {
    type: String
  },
  image: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Questions = mongoose.model('Questions', questionSchema);

module.exports = Questions;
