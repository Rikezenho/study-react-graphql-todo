const TodoSchema = require('../db/TodoSchema');

module.exports = {
    createTodo: (_, { todo }) => TodoSchema.create({ todo, done: false }),
    updateTodoToDone: (_, { id }) => TodoSchema.findByIdAndUpdate(id, { $set: { done: true }}, { new: true }).catch(err => console.log(err)),
    updateTodoToUndone: (_, { id }) => TodoSchema.findByIdAndUpdate(id, { $set: { done: false }}, { new: true }).catch(err => console.log(err)),
    deleteTodo: (_, { id }) => TodoSchema.findByIdAndRemove(id).catch(err => console.log(err)),
}