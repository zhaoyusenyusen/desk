import React, { Component } from 'react';
import imgc from "../images/c_03.jpg";
 
class Detail extends Component {
  state = {
    imgc: imgc,
    id:this.props.match.params.id
  };
  render() {
     return (
       <>
         <img src={this.state.imgc} alt="" />
         <button
           onClick={() => {
             this.setState({
               id: this.state.id
             });
           }}
         >
           +
         </button>
         <span>{this.state.id++}</span>
         <button
           onClick={() => {
             this.setState({
               id: this.state.id
             });
           }}
         >
           -
         </button>
         <br />
         <span>
           数量:{ this.state.id++?this.state.id++:(this.state.id<=0 ? this.state.id--:"1")}
         </span>
         <span>总价:{"$5" && this.state.id * 5}元</span>
         {localStorage.setItem('num',this.state.id)}
       </>
     );
  }
}

export default Detail;