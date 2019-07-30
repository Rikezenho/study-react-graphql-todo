const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: String,
    done: Boolean,
});

module.exports = mongoose.model('Todo', TodoSchema);