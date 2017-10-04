import React from 'react';
 // var React = require('react');
import List from './List';
import Input from './Input'



 class ToDoApp extends React.Component {
 	componentWillMount(){
	 	this.setState({
	 		list:[{item:'thing1', done:false}],
	 		newToDo: ''
	 	})
 	};

 	onInputChange = (event) =>{
	 	this.setState({ newToDo: event.target.value});
	 	// console.log(this.state.newToDo)
	};

	onInputSubmit = (event) => {
		event.preventDefault();
		this.setState((previousState)=>({
			list: [...previousState.list, {item: previousState.newToDo, done: false }], // notice the change here
			// list: previousState.list.push(previousState.newToDo)
			newToDo: ''
		}));
	};

	onListItemClick = (i)=>{
		this.setState((previousState)=>({
			list:[
				...previousState.list.slice(0,i),
				Object.assign({}, previousState.list[i], {done: !previousState.list[i].done}),
				...previousState.list.slice(i+1)
			]
		}));

	}

	deleteListItem = (i)=>{
		this.setState((previousState)=>({
			list:[
				...previousState.list.slice(0,i),
				...previousState.list.slice(i+1)
			]
		}));
	}



   	render() {

   		console.log(this.props);

     	return (
       		<div>
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
				 		<div className="panel panel-default">
					   		<div className="panel-body">
					     		<h1>My To Do App</h1>
					     		<hr/>
					     		<List 
						     		listItems={this.state.list} 
						     		onClick={this.onListItemClick}
						     		deleteItem={this.deleteListItem}
						     		/>
					     		<Input 
					     			value={this.state.newToDo} 
					     			onChange={this.onInputChange} 
					     			onSubmit={this.onInputSubmit}
					     		/>
					   		</div>
				 		</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ToDoApp;