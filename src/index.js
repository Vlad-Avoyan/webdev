import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Global = () =>{
    return (
     <App />
    )
}

ReactDOM.render(<Global />, document.getElementById('root'))