import React from 'react';
import AddNewTask from './components/AddNewTask';
import Task from './components/Task';

export default class Tasklist extends React.Component {

    state = {
        'tasks': [
            {
                _id: 1,
                description: "Wash the car",
                done: false
            },
            {
                _id: 2,
                description: "Clean the toilet",
                done: false
            },
            {
                _id: 3,
                description: "Pay the bills",
                done: false
            }
        ],
        newTaskDescription: "",
        modifiedTaskDescription: "",
        taskBeingEdited: {
            _id: 0 
        }
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addTask = (event) => {
        let newTask = {
            _id: Math.floor(Math.random() * 99999 + 10000),
            description: this.state.newTaskDescription,
            done: false
        }

        // const cloned = this.state.tasks.slice();
        // cloned.push(newTask);
        
        // this.setState({
        //     tasks: cloned
        // })

        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }

    updateTaskDone = (task) => {
        const modifiedTask = {
            ...task,
            done: !task.done
        }

        const index = this.state.tasks.findIndex( t => t._id === task._id);

        let cloned = [
            ...this.state.tasks.slice(0, index),
            modifiedTask,
            ...this.state.tasks.slice(index + 1)
        ]

        this.setState({
            tasks: cloned
        })
    }

    beginEdit = (task) => {
        this.setState({
            taskBeingEdited: task,
            modifiedTaskDescription: task.description
        })
    }

    processUpdate = () => {
        const modifiedTask = {
            ...this.state.taskBeingEdited,
            description: this.state.modifiedTaskDescription
        }

        const index = this.state.tasks.findIndex( t => t._id === modifiedTask._id);

        const cloned = this.state.tasks.slice();

        cloned.splice(index, 1, modifiedTask);

        this.setState({
            tasks: cloned,
            taskBeingeEdited: {
                _id: 0
            }
        })
    }

    render() {
        return(
            <React.Fragment>
                <h1>Task List</h1>
                <ul className="list-group">
                {
                    this.state.tasks.map( t => <Task task={t} key={t._id} 
                                                    updateTaskDone={this.updateTaskDone}
                                                    beginEdit={this.beginEdit} />)
                }
                </ul>

                <AddNewTask newTaskDescription={this.state.newTaskDescription}
                            updateFormField={this.updateFormField}
                            addTask={this.addTask} />

            </React.Fragment>
        )
    }

}