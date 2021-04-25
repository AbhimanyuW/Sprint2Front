import React, { Component } from 'react'
//some change

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
    }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="#" className="navbar-brand">InHouse Marketplace </a></div>
        
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
