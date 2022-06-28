import React from 'react';

export default class SurveyForm extends React.Component{
    state = {
        'name': '',
        'email': '',
        'color': '',
        'country': ''
    }

    updateName = (event) => {
        this.setState({
            'name': event.target.value
        })
    }

    updateEmail = (event) => {
        this.setState({
            'email': event.target.value
        })
    }

    updateColor = (event) => {
        this.setState({
            'color': event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Name:</label>
                    <input type="text"
                    className="form-control" 
                    value={this.state.name}
                    onChange={this.updateName}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.updateEmail} />
                </div>
                <div>
                    <label>Favorite Color:</label>
                    <input type="radio" name="colors" value='red' className='form-check-input' onChange={this.updateColor} checked={this.state.color === 'red'}/>
                    <label className="form-check-label">Red</label>

                    <input type="radio" name="colors" value='green' className='form-check-input' onChange={this.updateColor} checked={this.state.color === 'green'}/>
                    <label className="form-check-label">Green</label>

                    <input type="radio" name="colors" value='blue' className='form-check-input' onChange={this.updateColor} checked={this.state.color === 'blue'}/>
                    <label className="form-check-label">Blue</label>
                </div>
                <button>Submit</button>
            </React.Fragment>
        )
    }
}