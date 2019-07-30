import constants from './constants';

export const add = todo => ({
  type: constants.ADD,
  payload: todo
});

export const remove = id => ({
  type: constants.REMOVE,
  payload: id
});

export const setTodoAsDone = id => ({
  type: constants.SET_TODO_AS_DONE,
  payload: id
});

export const setTodoAsUndone = id => ({
  type: constants.SET_TODO_AS_UNDONE,
  payload: id
});

export const changeView = type => ({
  type: constants.CHANGE_VIEW,
  payload: type
});
