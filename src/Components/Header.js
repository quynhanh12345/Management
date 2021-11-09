import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="p-5 bg-light text-center">
                <h1 className="display-3">Member management project</h1>
                <p className="lead">with JSON</p>
                <hr className="my-2" />
            </div>
        );
    }
}

export default Header;