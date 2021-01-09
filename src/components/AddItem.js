import React, { Component } from 'react';

class AddItem extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {item: '', list: []}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();   
        var newItem = this.state.item;
        this.setState({
            list: [...this.state.list, newItem]
         })

         this.setState({
            item: ''
         })
    }

    handleChange = (event) => { 
        this.setState({item: event.target.value})
    }

    render() {
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                <input type="text" className="" value={this.state.item} onChange={ this.handleChange } /> 
                <input type="submit" />
            </form>
            <ul>
               {
                   this.state.list.map(item => <li>{item}</li>)
                   
               }
            </ul>
            </div>
        );
    }
}

export default AddItem;