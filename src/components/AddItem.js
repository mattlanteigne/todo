import React, { Component } from 'react';

import List from './List';

class AddItem extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = { item: '', list: [], completed: [] }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();   
        var newItem = this.state.item;

        if (newItem !== '') {
            this.setState({
                list: [...this.state.list, newItem]
            })
        }

        console.log(this.state.list)

         this.setState({
            item: ''
         })
    }

    handleChange = (event) => { 
        this.setState({item: event.target.value})
    }

    handleComplete = (event) => {
    event.preventDefault();   
    var completedItem = event.target.value;
    this.state.completed.push(completedItem);

    // NEXT we must remove the item from the original array
    
    var newList = this.state.list;
    newList.splice(this.state.list.indexOf(completedItem), 1);
    this.setState({list: newList});
}

    handleRemove = (event) => {
        event.preventDefault();   
        var removeItem = event.target.value;
        var newList = this.state.list;
        newList.splice(this.state.list.indexOf(removeItem), 1);
        this.setState({list: newList});
    }

    render() {
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" className="" value={this.state.item} onChange={ this.handleChange } /> 
                    <input type="submit" />
                </form>

                <div>
                    <h3>Todo</h3>
                    {
                    this.state.list.map(
                    i => 
                    <li>
                        {i}
                        <button value = {i} onClick={ this.handleComplete }>Complete</button>
                        <button value = {i} onClick-={ this.handleRemove }>Remove</button>
                    </li>
                    ) }
                </div>

                <div>
                    <h3>Completed</h3>
                    {
                    this.state.completed.map(
                    i => 
                        <li>
                            {i}
                        </li>
                    ) 
                    }
                </div>
            </div>
        );
    }
}

export default AddItem;