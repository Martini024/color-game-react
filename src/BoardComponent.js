import React from 'react';
import Square from './Square'
import './App.css'

function BoardComponent(props) {
    return (
        <div>
            <h1 style={{backgroundColor: props.data.backgroundColor}}>The Great
                <span id="colorDisplay">{props.data.colorDisplay}</span>
                Gussing Game
            </h1>
            <div id="stripe">
                <button onClick={props.resetHandler}>{props.data.resetContext}</button>
                <span id="message">{props.data.messageDisplay}</span>
                <button className={props.data.modeButtons[0]} onClick={props.modeHandler}>EASY</button>
                <button className={props.data.modeButtons[1]} selected="selected" onClick={props.modeHandler}>HARD</button>
            </div>
            <div id="container">
                <Square display={props.data.displays[0]} backgroundColor={props.data.colors[0]} handleClick={props.handleClick}></Square>
                <Square display={props.data.displays[1]} backgroundColor={props.data.colors[1]} handleClick={props.handleClick}></Square>
                <Square display={props.data.displays[2]} backgroundColor={props.data.colors[2]} handleClick={props.handleClick}></Square>
                <Square display={props.data.displays[3]} backgroundColor={props.data.colors[3]} handleClick={props.handleClick}></Square>
                <Square display={props.data.displays[4]} backgroundColor={props.data.colors[4]} handleClick={props.handleClick}></Square>
                <Square display={props.data.displays[5]} backgroundColor={props.data.colors[5]} handleClick={props.handleClick}></Square>
            </div>
        </div>
    );
}

export default BoardComponent;
