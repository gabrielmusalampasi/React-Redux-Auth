import React, { Component } from 'react'
import Header from "../containers/header";
import {Route, Switch} from "react-router-dom";
import Home from "./home";
import Ressources from "./ressources";
import requireAuth from "../helpers/requireAuth";

require("../style.css");
export default class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/ressources" component={requireAuth(Ressources)}></Route>
          </Switch>

        </div>
    )
  }
}
