import React, { Component } from 'react';
import ResourceService from '../services/ResourceService';

class ListResourceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resources: []
        }
        this.addResource = this.addResource.bind(this);
    }

    componentDidMount() {
        console.log("After list emp component intialized called automatically")
        ResourceService.getResourcesAll().then((res) => {
            console.log(res,"okay");
            this.setState({ resources: res.data });
        });

    }

    addResource() {
        this.props.history.push('/addresource/_add');
    }

    getallresourcesby(id) {
        this.props.history.push(`/getallresourcesbyid/${id}`);
    }

    getResourcesAll(){
        this.props.history.push('/getallresources');
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Resources List </h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addResource}> Add Resource </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Resource Name </th>
                                <th> Description  </th>
                                <th> Category </th>
                                <th> Type </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                        {
                                    this.state.resources.map(
                                        resource => 
                            <tr key={resource.resId}>
                                <td> {resource.title} </td>
                                <td> {resource.description} </td>
                                <td> {resource.category} </td>
                                <td> {resource.price} </td>
                                <td> {resource.empId} </td>
                            </tr>
                                    )}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListResourceComponent;