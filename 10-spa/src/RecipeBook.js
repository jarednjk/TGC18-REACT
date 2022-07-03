import React from 'react';
import AddNew from './pages/AddNew';
import Listing from './pages/Listing';


export default class RecipeBook extends React.Component {

    state={
        active: 'listing'
    }
    
    renderContent() {
        if (this.state.active === "listing") {
            return <Listing />
        } else if (this.state.active === "add-new") {
            return <AddNew />
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <ul className="nav nav-tabs">
                        <li>
                            <button className=""></button>
                        </li>
                    </ul>
                </div>
                {this.renderContent()}
            </React.Fragment>
        )

    }
}