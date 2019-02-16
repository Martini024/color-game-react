import React from 'react';
import './App.css';

function Square(props) {
    return (<div style={{backgroundColor: props.backgroundColor, display: props.display}} className="square" onClick={props.handleClick}></div>);
}

export default Square;
