import React from 'react';


class List extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = { item: '', list: [], completed: [] }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        this.handleReverse = this.handleReverse.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();   
        var newItem = this.state.item;

        if (newItem !== '') {
            this.setState({
                list: [...this.state.list, newItem]
            })
        }

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

        // Removing the item from the array
    
        var newList = this.state.list;
        newList.splice(this.state.list.indexOf(completedItem), 1);
        this.setState({list: newList});
    }      

    handleRemoveTodo = (event) => {
        event.preventDefault();   
        var removeItem = event.target.value;
        var newList = this.state.list;
        newList.splice(this.state.list.indexOf(removeItem), 1);
        this.setState({list: newList});
    }

    handleReverse = (event) => {
        event.preventDefault();   
        var reverseItem = event.target.value;
        this.state.list.push(reverseItem);

        // Removing item from the array
    
        var newList = this.state.completed;
        newList.splice(this.state.completed.indexOf(reverseItem), 1);
        this.setState({completed: newList});
    }     
    
    handleRemoveCompleted = (event) => {
        event.preventDefault();   
        var removeItem = event.target.value;
        var newList = this.state.completed;
        newList.splice(this.state.completed.indexOf(removeItem), 1);
        this.setState({completed: newList});
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
                        <button value = {i} onClick={ this.handleRemoveTodo }>Remove</button>
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
                            <button value = {i} onClick= { this.handleReverse }>Add Todo</button>
                            <button value = {i} onClick= { this. handleRemoveCompleted }>Remove</button>
                        </li>
                    ) 
                    }
                </div>
            </div>
        );
    }
}

export default List;