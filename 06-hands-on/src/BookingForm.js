import React from 'react';

export default class BookingForm extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        seating: "",
        smoking: "smoking",
        appetizer: []
    }

    updateBookingForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateAppetizer = (e) => {
        if (this.state.appetizer.includes(e.target.value)) {
            let indexToRemove = this.state.appetizer.indexOf(e.target.value);
            let cloned = [
                ...this.state.appetizer.slice(0, indexToRemove),
                ...this.state.appetizer.slice(indexToRemove + 1)
            ];
            this.setState({
                appetizer: cloned
            })
        } else {
            this.setState({
                appetizer: [...this.state.appetizer, e.target.value]
            })
        }
    }

    seating = [
        {
            display: 'Outdoors',
            value: 'outdoors'
        },
        {
            display: 'Indoors',
            value: 'indoors'
        },
        {
            display: 'VIP Indoors',
            value: 'vip-indoors'
        }
    ]

    smoking = [
        {
            display: 'Smoking',
            value: 'smoking'
        },
        {
            display: 'Non-smoking',
            value: 'non-smoking'
        }
    ]

    appetizer = [
        {
            display: 'Raw Fishes',
            value: 'raw-fishes'
        },
        {
            display: 'Salad',
            value: 'salad'
        },
        {
            display: 'Fried Cuttlefish',
            value: 'fried-cuttlefish'
        },
        {
            display: 'Peanuts',
            value: 'peanuts'
        }
    ]

    renderSeating() {
        return this.seating.map((s)=>{
           return <React.Fragment key={s.value}>
                <input type="radio"
                       name="seating"
                       className="form-check-input"
                       value={s.value}
                       onChange={this.updateBookingForm}
                       checked={this.state.seating === s.value}
                        />
                <label className="form-check-label">{s.display}</label>
            </React.Fragment>
        })
        // return seatingArray;
    }

    renderSmoking() {
        return this.smoking.map(sm=>
            <React.Fragment key={sm.value}>
                <option value={sm.value}>{sm.display}</option>
            </React.Fragment>
        )
    }

    renderAppetizer() {
        return this.appetizer.map( a => 
            <React.Fragment key={a.value}>
                <input type="checkbox"
                       name="appetizer"
                       value={a.value}
                       checked={this.state.appetizer.includes(a.value)}
                       onChange={this.updateAppetizer} />
                <label>{a.display}</label>
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input type="text" 
                           name="firstName"
                           value={this.state.firstName}
                           onChange={this.updateBookingForm} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text"
                           name="lastName"
                           value={this.state.lastName}
                           onChange={this.updateBookingForm} />
                </div>
                <div>
                    <label>Seating:</label>
                    {this.renderSeating()}
                </div>
                <div>
                    <label>Smoking or non-smoking:</label>
                    <select name="smoking"
                            value={this.state.smoking}
                            onChange={this.updateBookingForm}>{this.renderSmoking()}</select>
                </div>
                <div>
                    <label>Appetizers:</label>
                    {this.renderAppetizer()}
                </div>
            </React.Fragment>
        )
    }
}