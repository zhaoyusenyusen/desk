import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom'
import Sua from './Sua.jsx';
import Fen from './Fen.jsx';
import Fa from './Fa.jsx';
import Shopping from './Shopping.jsx';
import My from './My.jsx';
import Detail from './Detail.jsx';
import Login from "./Login.jsx";
import './index.css'
import request from "../api/request.jsx";
import { connect } from "react-redux";
import Footer from '../component/Footer.jsx'
class Index extends Component {
  componentDidMount() {
    this.props.save(request);
  }  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/sua" component={Sua} />
            <Route path="/fen" component={Fen} />
            <Route path="/fa" component={Fa} />
            <Route path="/shopping" component={Shopping} />
            <Route path="/my" component={My} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/login" component={Login} />
            <Redirect from="/" to="/sua" />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}
let initstateToprops = state => {
  return {};
};
let initDispatchToprops = dispatch => {
  return {
    save: obj => {
      dispatch(obj);
    }
  };
};

export default connect(
  initstateToprops,
  initDispatchToprops
)(Index);