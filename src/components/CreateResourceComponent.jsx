import React, { Component } from 'react'
import ResourceService from '../services/ResourceService';

class CreateResourceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            title: '',
            description: '',
            category: '',
            type: '',
            price: '',
            empId: ''

        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeEmpidHandler = this.changeEmpidHandler.bind(this);
    }


    saveResource = (e) => {
        e.preventDefault();
        let Resource = {
            title: this.state.title, description: this.state.description, category: this.state.category,
            type: this.state.type, price: this.state.price, empId: this.state.empId
        };
        // console.log('resource => ' + JSON.stringify(Resource));

        ResourceService.addResource(Resource).then(res => {
            this.props.history.push('/getallresourcesbyid/');
        });
        window.alert("Added Successfully");
    };
    

    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });

    }

    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }

    changeCategoryHandler = (event) => {
        this.setState({ category: event.target.value });
    }

    changeTypeHandler = (event) => {
        this.setState({ type: event.target.value });
    }

    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }

    changeEmpidHandler = (event) => {
        this.setState({ empId: event.target.value });
    }

    cancel() {
        this.props.history.push('/resources');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Resource </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Enter Resource Title: </label>
                                        <input placeholder="Name of the Resource" name="title" className="form-control"
                                            value={this.state.title} onChange={this.changeTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Description:  </label>
                                        <input placeholder="Information about the Resource" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Category:  </label>
                                        <input placeholder="Enter the tier- Premium/Midrange/Budget" name="category" className="form-control"
                                            value={this.state.category} onChange={this.changeCategoryHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Type:  </label>
                                        <input placeholder="Type of operation- buy/sell/rent" name="type" className="form-control"
                                            value={this.state.type} onChange={this.changeTypeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Price:  </label>
                                        <input placeholder="Enter a price" name="price" className="form-control"
                                            value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> EmpId:  </label>
                                        <input placeholder="Enter 1" name="empid" className="form-control"
                                            value={this.state.empId} onChange={this.changeEmpidHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveResource}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ margin: "10px" }}> Cancel </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateResourceComponent;
