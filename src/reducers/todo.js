import {CREATE_TODO, COMPLETE_TODO, UPDATE_TODO} from '../constants/ActionTypes';

const initialState = {  
  all: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case CREATE_TODO:
      return {
        ...state,
        all: [...state.all, action.payload],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        all: state.all.filter(todo => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      const {todoId, text} = action.payload;
      const todoIndex = state.all.findIndex(todo => todo.id === todoId);
      if(todo >= 0) {
        return {
          ...state,
          all: state.all.splice(todoIndex, 1, {
            ...state.all[todoIndex],
            text,
          }),
        };
      } else {
        return state;
      }

    default:
      return state;
  }
}
