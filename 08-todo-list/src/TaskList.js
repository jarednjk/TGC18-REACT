import React from 'react';


export default class TaskList extends React.Component {

    state = {
        tasks: [
            {
                _id: 1,
                description: "walk the dog",
                done: false
            },
            {
                _id: 2,
                description: "Water the plants",
                done: false
            },
            {
                _id: 3,
                description: "Pay the bills",
                done: false
            }
        ],
        newTaskName: ''
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Todo List</h1>
                {this.state.tasks.map(t => <React.Fragment key={t._id}>
                    <li>
                        {t.description}
                        <input type="checkbox"
                               name="newTaskName"
                               className="form-check-input ms-2"
                               checked={t.done} />
                    </li>
                <h2>Add a new task</h2>
                <div>
                    <label>Task Name:</label>
                    <input type="text"
                           className='form-control'
                           value="this.state.newTaskName"
                           onChange={this.updateFormField} />
                    <button className="btn btn-primary">Add</button>
                </div>
                </React.Fragment>)}
            </React.Fragment>
        )
    }
}