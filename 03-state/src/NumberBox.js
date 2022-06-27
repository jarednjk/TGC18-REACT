import React from 'react';

export default class NumberBox extends React.Component {
    // state is an object that contains key/value pairs
    // intended for data that is accessible by the component itself
    // it's a private data so no other components can access or change it

    state = {
        "count": 10
    }

    render() {
        return (
            <div style={
                {
                    "border": "1px solid black",
                    "padding": "10px",
                    "width": "20px"
                }
            }>{this.state.count}</div>
        )
    }
}