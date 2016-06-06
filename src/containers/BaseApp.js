/**
 * Created by joe on 16/5/27.
 */

import React, {Component} from "react";
import {Navigator, View, Text} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import actions from "../actions";
import List from "./List";

// import * as actions from "../actions";

// @connect(state => ({
//   state: state
// }))
// export default class BaseApp extends Component {
class BaseApp extends Component {
  constructor(props) {
    super(props);

    this.initialRoute = {
      name: 'List',
      component: List
    };
  }

  configureScene() {
    Navigator.SceneConfigs.VerticalDownSwipeJump;
  }

  renderScene(route, navigator) {
    let Component = route.component;
    const {state, dispatch} = this.props;
    const action = bindActionCreators(actions, dispatch);
    return (
      <Component state={state}
                 actions={action} {...route.params}
                 navigator={navigator}/>
    );
  }

  render() {
    return (
      <Navigator initialRoute={this.initialRoute}
                 configureScene={this.configureScene.bind(this)}
                 renderScene={this.renderScene.bind(this)}/>
    );
  }
}


export default connect(
  state => ({
    state: state
  })
)(BaseApp);
