import React from 'react';

export default class TickleBox extends React.Component {

    state = {
        message: ""
    }

    enter = () => {
       this.setState({
        message: "that tickles"
       })
    }

    leave = () => {
        this.setState({
            message: ""
        })
    }


    render(){
        return (
            <div onMouseEnter={this.enter} onMouseLeave={this.leave} style={{
                border: "4px solid black",
                width: "100px",
                height: "50px"
            }}>{this.state.message}{this.leave}</div>
        )
    }

} 