import React from 'react';
import BoardComponent from './BoardComponent'

class Board extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mode: 6,
            colors: [],
            displays: [],
            colorDisplay: "",
            messageDisplay: "",
            resetContext: "",
            pickedColor: "",
            backgroundColor: "",
            modeButtons: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.modeHandler = this.modeHandler.bind(this)
        this.resetHandler = this.resetHandler.bind(this)
    }

    reset() {
        let updateDisplays = [];
        let updateColors = this.generateRandomColors(this.state.mode);
        let updatePickedColor = this.pickColer(updateColors);
        let updateModeButtons = [];
        if (this.state.mdoe === 3) {
            updateModeButtons.push("selected");
            updateModeButtons.push("");
        }
        else {
            updateModeButtons.push("");
            updateModeButtons.push("selected");
        }
        for (var i = 0; i < 6; i++) {
            if (updateColors[i]) {
                updateDisplays[i] = "block";
            }
            else {
                updateDisplays[i] = "none";
            }
        }
        this.setState({
            colors: updateColors,
            pickedColor: updatePickedColor,
            colorDisplay: updatePickedColor,
            backgroundColor: "steelblue",
            resetContext: "New Colors",
            messageDisplay: "",
            displays: updateDisplays
        })
    }

    resetHandler() {
        this.reset();
    }

    modeHandler(e) {
        const button = e.target;
        button.textContent === "EASY" ? this.setState({mode: 3}, this.reset) : this.setState({mode: 6}, this.reset);
    }

    pickColer(colors) {
        var random = Math.floor(Math.random() * this.state.mode);
        return colors[random];
    }

    generateRandomColors(num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(this.randomColor());
        }
        return arr;
    }

    randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }

    componentDidMount() {
        this.reset();
    }

    handleClick(e) {
        let clickedColor = e.target.style.backgroundColor;
        let updateColors = [];
        if (clickedColor === this.state.pickedColor) {
            for (let i = 0; i < this.state.colors.length; i++) {
                updateColors.push(clickedColor);
            }
            this.setState({
                messageDisplay: "Correct!",
                resetContext: "Play Again?",
                backgroundColor: clickedColor,
                colors: updateColors
            });
        }
        else {
            updateColors = this.state.colors;
            for (let i = 0; i < this.state.colors.length; i++) {
                if (this.state.colors[i] === clickedColor) {
                    updateColors[i] = "#232323";
                }
            }
            this.setState({
                messageDisplay: "Try Again",
                colos: updateColors
            });
        }

    }

    render() {
        return (
            <BoardComponent data={this.state} handleClick={this.handleClick} modeHandler={this.modeHandler} resetHandler={this.resetHandler}/>
        )
    }

}

export default Board;
