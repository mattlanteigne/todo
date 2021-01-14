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
                <p className="intro">Welcome to my Todo List! To start, enter an item below.</p>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" value={this.state.item} onChange={ this.handleChange } className="inputField" /> 
                    <input type="submit" className="submitButton btn btn-outline-primary" />
                </form>

                <div className="todoList">
                    <h3>Todo</h3>
                    {
                    this.state.list.map(
                    i => 
                    <div className="listItem">
                        <div className="item">
                            {i}
                        </div>
                        <button value = {i} onClick={ this.handleComplete } className="completeButton btn btn-outline-success">Complete</button>
                        <button value = {i} onClick={ this.handleRemoveTodo } className="removeButton btn btn-outline-danger">Remove</button>                        
                    </div>
                    ) }
                </div>

                <div className="completedList">
                    <h3>Completed</h3>
                    {
                    this.state.completed.map(
                    i => 
                        <div className="completeItem">
                            <div className="item">
                                {i}
                            </div>
                            <button value = {i} onClick= { this.handleReverse } className="reverseButton btn btn-outline-secondary">Reverse</button>
                            <button value = {i} onClick= { this.handleRemoveCompleted } className="removeButton btn btn-outline-danger">Remove</button>                   
                        </div>
                    ) 
                    }
                </div>
            </div>
        );
    }
}

export default List;