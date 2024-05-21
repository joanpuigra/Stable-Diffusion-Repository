const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    minlength: 5,
    maxlength: 20,
  },
  author: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  base: {
    type: String,
    required: true,
  },
  license: {
    type: [String],
    required: false,
  },
  file: {
    type: Object,
    required: false,
  },
  img: {
    type: Object,
    required: false,
  },
})

const Model = mongoose.model('Model', modelSchema)

module.exports = Model
