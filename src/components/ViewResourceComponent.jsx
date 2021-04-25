import React, { Component } from 'react'
import ResourceService from '../services/ResourceService';

class ViewResourceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            resource: {}
        }
    }
    componentWillMount(){}
    componentDidMount(){
        ResourceService.getResourceById(this.state.id).then( res => {
            this.setState({resource: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Resource Title: </label>
                            <div> { this.state.resource.title }</div>
                        </div>
                        <div className = "row">
                            <label> Description: </label>
                            <div> { this.state.resource.description }</div>
                        </div>
                        <div className = "row">
                            <label> Category: </label>
                            <div> { this.state.resource.category }</div>
                        </div>
                        <div className = "row">
                            <label> Type: </label>
                            <div> { this.state.resource.type }</div>
                        </div>
                        <div className = "row">
                            <label> Price: </label>
                            <div> { this.state.resource.price }</div>
                        </div>
                        <div className = "row">
                            <label> Employee ID: </label>
                            <div> { this.state.resource.empId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewResourceComponent
