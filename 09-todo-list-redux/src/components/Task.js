import React from 'react';

export default function Task(props) {
    return (
        <React.Fragment>
            <li className="list-item">
                <label className="form-check-label me-2">{props.task.description} </label>
                <input className="form-check-input" type="checkbox" checked={() => { props.updateTaskDone(props.task) }} />
                <button onClick={() => { props.beginEdit(props.task); }}>Edit</button>
            </li>
        </React.Fragment>)

}