import React from 'react';

export default class ContactForm extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        enquiry: "",
        country: "singapore",
        contactBy: []
    }

    updateContactForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = () => {
        alert(this.state.firstName, this.state.lastName, this.state.enquiry, this.state.country);
    }

    updateContactBy = (e) => {
        if (this.state.contactBy.includes(e.target.value)) {
            let indexToRemove = this.state.contactBy.indexOf(e.target.value);
            let cloned = [
                ...this.state.contactBy.slice(0, indexToRemove),
                ...this.state.contactBy.slice(indexToRemove+1)
            ]
            this.setState({
                contactBy: cloned
            })
        } else {
            this.setState({
                contactBy: [...this.state.contactBy, e.target.value]
            })
        }
    }

    render() {
        return (
            <React.Fragment>

                <div className="py-3">
                    <div>
                        <label>First Name:</label>
                        <input type="text"
                            name="firstName"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.updateContactForm} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text"
                            name="lastName"
                            className="form-control"
                            value={this.state.lastName}
                            onChange={this.updateContactForm} />
                    </div>

                    <div className="py-3">
                        <label>Enquiry:</label>
                        <br />
                        <input type="radio"
                            name="enquiry"
                            className="form-check-input"
                            value="support"
                            checked={this.state.enquiry === 'support'}
                            onChange={this.updateContactForm} />
                        <label className="form-check-label pe-3">Support</label>

                        <input type="radio"
                            name="enquiry"
                            className="form-check-input"
                            value="sales"
                            checked={this.state.enquiry === 'sales'}
                            onChange={this.updateContactForm} />
                        <label className="form-check-label pe-3">Sales</label>

                        <input type="radio"
                            name="enquiry"
                            className="form-check-input"
                            value="marketing"
                            checked={this.state.enquiry === 'marketing'}
                            onChange={this.updateContactForm} />
                        <label className="form-check-label pe-3">Marketing</label>
                    </div>
                    
                    <div className="py-3">
                        <label>Country:</label>
                        <select name="country" value={this.state.country}
                            onChange={this.updateContactForm} >
                            <option value="singapore">Singapore</option>
                            <option value="malaysia">Malaysia</option>
                            <option value="thailand">Thailand</option>
                        </select>
                    </div>

                    <div className='py-3'>
                        <label>How would you like to be contacted?</label>
                        <br />
                        <input type='checkbox'
                            name='contactBy'
                            value='email'
                            checked={this.state.contactBy.includes('email')}
                            onChange={this.updateContactBy} />
                        <label className="form-check-label pe-3">Email</label>

                        <input type='checkbox'
                            name='contactBy'
                            value='phone-number'
                            checked={this.state.contactBy.includes('phone-number')}
                            onChange={this.updateContactBy} />
                        <label className="form-check-label pe-3">Phone Number</label>

                        <input type='checkbox'
                            name='contactBy'
                            value='slow-mail'
                            checked={this.state.contactBy.includes('slow-mail')} 
                            onChange={this.updateContactBy} />
                        <label className="form-check-label pe-3">Slow Mail</label>

                    </div>
                </div>
                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </React.Fragment>
        )
    }
}