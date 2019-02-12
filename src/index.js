import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
    render(){
        return <h1>Hello World</h1>
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );