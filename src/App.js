import React, { Component } from 'react';
import Index from './viwes/Index.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.jsx";
class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Index />
                </Provider>
               
            </div>
        );
    }
}

export default App;