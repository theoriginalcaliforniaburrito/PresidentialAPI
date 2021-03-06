import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <div id="nav-container" className="container row">
                <div className="col-md-4">
                    <Link to="/">
                        <h3>Home</h3>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/about">
                        <h3>About</h3>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/search">
                        <h3>Search</h3>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;