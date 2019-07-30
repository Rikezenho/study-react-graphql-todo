import constants from './constants';

export const initialState = {
  todos: [{
    id: 'ffdsfdsfdfs',
    todo: 'Teste',
    done: false,
  }],
  currentView: 'all'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case [constants.ADD]:
      return {
        ...state,
        todos: [
          {
            title: action.payload,
            done: false
          },
          ...state.todos
        ]
      };
    case [constants.REMOVE]:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload)
      };
    case [constants.SET_TODO_AS_DONE]:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo === action.payload) {
            return {
              todo: todo.todo,
              done: true
            };
          }
          return todo;
        })
      };
    case [constants.SET_TODO_AS_UNDONE]:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo === action.payload) {
            return {
              todo: todo.todo,
              done: false
            };
          }
          return todo;
        })
      };
    case [constants.CHANGE_VIEW]:
      return {
        ...state,
        currentView: action.payload
      };
    default:
      return state;
  }
}
