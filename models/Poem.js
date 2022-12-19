const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poemSchema = new Schema({
  intro: {
    type: String,
    required: true
  },
  poet: {type: Schema.Types.ObjectId, ref: 'Poet', required: true},
  verses: [
    {
      first: String,
      sec: String,
    }
  ],
  reviewed: {
    type: Boolean,
    default: false
  }
}, {timestamps: true})

const Poem = mongoose.model('Poem', poemSchema);
module.exports = Poem;