/**
 * Created by joe on 16/5/27.
 */

export const LOAD_TODOS = 'LOAD_TODOS';
export const SELECT_TODO = 'SELECT_TODO';
export const APPEND_TODO = 'APPEND_TODO';
export const DEFAULT_ACTION = 'DEFAULT_ACTION';

let loadTodos = () => {
  return (dispatch) => {
    setTimeout(()=> {
      dispatch({type: LOAD_TODOS});
    }, 1000);
  };
};

let selectTodo = (selected)=> {
  return {
    type: SELECT_TODO,
    selected
  };
};

let appendTodo = (text, cleanUIState)=> {
  if (text) {
    if (cleanUIState) {
      cleanUIState();
    }

    return {
      type: APPEND_TODO,
      todo: {text}
    };
  }

  return {
    type: DEFAULT_ACTION
  };
};

export default {
  loadTodos,
  selectTodo,
  appendTodo
};
