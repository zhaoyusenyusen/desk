import React, { Component } from "react";
import { connect } from "react-redux";
import imgc from "../images/c_03.jpg";
import hoComponent from "../component/hoComponent.jsx";
import "./sua.css";
class Shopping extends Component {
  state = {
    imgc: imgc
  };
  render() {
    return (
      <div>
        <div>
          {this.props.data.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  this.props.history.push(`/detail/${item.nums}`);
                }}
              >
                <img src={this.state.imgc} />
                <p>{item.tit}</p>
                <p>{item.jiage}</p>
                <p>{item.nums}</p>
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

let initstateToprops = state => {
  return {
    data: state.reducer && state.reducer
  };
};
let shopping = hoComponent(Shopping)
export default connect(initstateToprops)(shopping);
