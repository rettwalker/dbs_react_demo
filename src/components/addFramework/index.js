import React, { Component } from 'react';

export default class AddFramework extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (e) => {
        return this.props.submitChange({ name: this.state.name, description: this.state.description })
    }

    render() {
        return <div className="d-flex flex-column pl-3" >
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name} />
            </div>
            <div className="input-group mb-3">
                <textarea className="form-control" placeholder="Description" name="description" onChange={this.handleChange} value={this.state.description} aria-label="Description"></textarea>
            </div>
            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
        </div>
    }
}