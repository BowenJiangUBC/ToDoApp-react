import React from 'react';
 // var React = require('react');
import List from './List';
import Input from './Input'



 class ToDoApp extends React.Component {
 	// componentWillMount(){
	 // 	this.setState({
	 // 		list:[{item:'thing1', done:false}],
	 // 		newToDo: ''
	 // 	})
 	// };

 	onInputChange = (event) =>{
 		this.props.inputChange(event.target.value);
	 	// console.log(this.state.newToDo)
	};

	onInputSubmit = (event) => {
		event.preventDefault();
		this.props.inputSubmit();
	};

	onListItemClick = (i)=>{
		this.props.clickItem(i);

	}

	deleteListItem = (i)=>{
		this.props.deleteItem(i);
	}



   	render() {

   		console.log(this.props);

     	return (
       		<div>
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
				 		<div className="panel panel-default">
					   		<div className="panel-body">
					     		<h1>Bowen's Simple ToDo App</h1>
					     		<hr/>
					     		<List 
						     		listItems={this.props.toDoApp.list} 
						     		onClick={this.onListItemClick}
						     		deleteItem={this.deleteListItem}
						     		/>
					     		<Input 
					     			value={this.props.toDoApp.newToDo} 
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