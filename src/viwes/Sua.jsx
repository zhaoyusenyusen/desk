import React, { Component } from 'react';
import hoComponent from '../component/hoComponent.jsx'
import {connect} from 'react-redux'
import imgc from '../images/c_03.jpg'
import './sua.css'
class Sua extends Component {
       state={
           imgc:imgc
       }
       render() {
        return (
            <div>
                
                   
                    <div>
                    {this.props.data.map((item,index)=>{
                        return (
                          <p key={index} onClick={()=>{
                              this.props.history.push(`/detail/${item.nums}`,)
                          }}>
                            <img src={this.state.imgc}/> 
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
let sua=hoComponent(Sua)
let initstateToprops=(state)=>{
    return {
      data: state.reducer && state.reducer
    };
}
export default connect(initstateToprops)(sua);