const TodoSchema = require('../db/TodoSchema');

module.exports = {
    todos: (_, { done }) => typeof done === 'undefined' ? TodoSchema.find() : TodoSchema.find({ done }),
    todo: (_, { id }) => TodoSchema.findById(id),
};