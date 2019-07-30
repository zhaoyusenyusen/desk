import React, { Component } from 'react';

class Login extends Component {
    state={
        num:''
    }
    render() {
        return (
            <div>
                <input value={this.state.num} onChange={(e)=>{
                   this.setState({
                       num:e.target.value
                   })
                }}/>
                <button onClick={()=>{
                    if(!this.state.num){
                        alert('不能为空')
                    }else{
                    localStorage.setItem('token',this.state.num)
                    this.props.history.push('/sua')
                   alert('登录成功')
                    }
                   
                }}>登录</button>
            </div>
        );
    }
}

export default Login;