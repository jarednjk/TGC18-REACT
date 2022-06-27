import React from 'react';

export default class Dice extends React.Component {

    random() {
        return Math.floor( Math.random() * 6) + 1;
    }
    
    state = {
        "number": this.random()
    }    

    click = () => {
        this.setState({
            "number": this.random()
        })
    }

    changeColor() {
        if (this.state.number === 1) {
            return "red";
        }

        else if (this.state.number === 6) {
            return "green";
        }

        else {
            return "";
        }
    }

    render() {
        return (
            <div onClick={this.click} style={{
                "border": "1px solid black",
                "padding": "10px",
                "width": "50px",
                "color": this.changeColor()
            }}>
                {this.state.number}
            </div>
        )
    }
}