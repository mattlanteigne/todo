// import React from 'react';

// import AddItem from './AddItem';

// var completed = [];

// var handleComplete = (event) => {
//     var completedItem = event.target.value;
//     completed.push(completedItem);

//     // NEXT we must remove the item from the original array


//     console.log(completed)
// }

// const Complete = props => (
//     <div>
//         <ul>
//             <button value={props.item} onClick={handleComplete}>Complete</button>
//         </ul>
//     </div>
// );

// export default Complete;



// import React, { Component } from 'react';

// class Complete extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { item: props.item, list: [] }
//         var list2 = [];

//         this.handleComplete = this.handleComplete.bind(this);
//     }

//     handleComplete = (event) => {
//         event.preventDefault();  
//         this.setState({item: event.target.value})
//         var newItem = this.state.item;

//         if (newItem !== '') {
//             this.setState({
//                 list: [...this.state.list, newItem]
//             })
//         }

//         console.log(newItem)
//         console.log(this.state.list)
//     }

//     render(){
//         return(
//             <div>
//                 <ul>
//                     <button value={this.state.item} onClick={this.handleComplete}>Complete</button>
//                 </ul>

//                 <p>
//                     {this.state.list}
//                 </p>
//             </div>
//         );
//     }
// }

// export default Complete;