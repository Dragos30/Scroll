import React, { Component } from "react";
import Form from "./Form";

class FormList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }
    onChange = (event) => {
        this.setState({ term: event.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }
    render() {
        return (
            <div className="form">
                <form onSubmit={this.onSubmit}>
                    <label>Reply to thread : #</label>
                    <input  type="text"/>
                    <label >Display name:</label>
                    <input  type="text"/>
                    <label >Message:</label> 
                    <textarea value={this.state.term} onChange={this.onChange} type="text" />
             
                    <button type="close" value="close">close</button>
                        <input type="submit" value="submit" />
                </form>
                <Form items={this.state.items} />
            </div>
        );

    }

}

export default FormList;