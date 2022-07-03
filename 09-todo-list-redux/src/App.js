import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './TaskList';

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <TaskList />
      </div>
    </React.Fragment>
  )
}