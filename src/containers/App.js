/**
 * Created by joe on 16/5/27.
 */

import React, {Component} from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import BaseApp from "./BaseApp";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.devToolsExtension ? window.devToolsExtension() : f => f
);

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <BaseApp/>
//       </Provider>
//     );
//   }
// }


const App = () => (
  <Provider store={store}>
    <BaseApp/>
  </Provider>
);

export default App;
