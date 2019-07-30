import React, { Component } from 'react';
import hoComponent from "../component/hoComponent.jsx";
class My extends Component {
    render() {
        return (
            <div>
            <h2>我的</h2>   
            </div>
        );
    }
}

export default hoComponent(My);