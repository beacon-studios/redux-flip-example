import * as shortid from 'shortid';  
import {CREATE_TODO, COMPLETE_TODO, UPDATE_TODO} from '../constants/ActionTypes';

export const createTodo = (text) => ({  
  type: CREATE_TODO,
  payload: {
    id: shortid.generate(),
    text,
  },
});

export const completeTodo = (todoId) => ({  
  type: COMPLETE_TODO,
  payload: todoId,
});

export const updateTodo = (todoId, text) => ({  
  type: UPDATE_TODO,
  payload: {todoId, text},
});