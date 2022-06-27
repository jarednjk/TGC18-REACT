import React from 'react';

export default class AlertBox extends React.Component{

    state = {
        message: this.props.initialValue
    }

    render() {
        return (
            <div style={{
                border: "black so 4px"
            }}>{this.state.message}</div>
        )
    }
}