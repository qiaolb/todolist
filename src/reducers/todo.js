/**
 * Created by joe on 16/5/27.
 */

import {ListView} from "react-native";
import {combineReducers} from "redux";
import {LOAD_TODOS, APPEND_TODO, SELECT_TODO} from "../actions/TodoActions";

const defaultTodos = [
  {text: '吃饭'},
  {text: '睡觉'},
  {text: '打豆豆'},
  {text: '写代码'}
];

const initialState = {
  type: 'INITIAL_TODOS',
  todos: []
};

export default function todo(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODOS:
    {
      var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
      dataSource = dataSource.cloneWithRows(defaultTodos);
      return {
        ...state,
        ...action,
        todos: defaultTodos,
        dataSource
      };
    }
    case APPEND_TODO:
    {
      let todos = [...state.todos];
      todos.unshift(action.todo);
      dataSource = state.dataSource.cloneWithRows(todos);

      return {
        ...state,
        ...action,
        todos: todos,
        dataSource
      };
    }
    case SELECT_TODO:
    {
      let selected = action.selected;
      let todos = [...state.todos];
      let index = todos.indexOf(selected);
      if (todos[index].selected) {
        todos[index] = {text: todos[index].text};
        // delete todos[index].selected;
      } else {
        // 不能直接修改,需要创建一个新的对象
        // todos[index].selected = true;
        todos[index] = { text: todos[index].text, selected: true };
      }

      dataSource = state.dataSource.cloneWithRows(todos);

      return {
        ...state,
        ...action,
        todos: todos,
        dataSource
      };
    }
  }

  return {
    ...state
  }
}

