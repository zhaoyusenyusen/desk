import React  from 'react';
export default function hoComponent(Component){
return class  extends React.Component {
    componentDidMount() {
        if(!localStorage.getItem('token')){
            this.props.history.push('/Login')
          
        }
    }
    render() {
        return (
            <div>
                <Component {...this.props}/>
            </div>
        );
    }
}

}

