import 'bootstrap/dist/css/bootstrap.min.css'
import SurveyForm from './SurveyForm';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Survey</h1>
        <SurveyForm />
      </div>
    </React.Fragment>
  );
}

export default App;
