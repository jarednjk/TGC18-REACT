import React from 'react';
import ContactForm from './ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className="Container">
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </React.Fragment>
  );
}

export default App;
