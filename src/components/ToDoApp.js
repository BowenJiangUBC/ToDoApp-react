import React from 'react';
import List from './List';
import Input from './Input'

class ToDoApp extends React.Component{

    componentWillMount(){
        this.setState({
            list: [{item:"Eat", done:true},
                {item:"Pray",done:true},
                {item:"Love",done:false}],
            newToDo: "test"
        })
    };

    onInputChange = (event) => {

        this.setState(
            {newToDo: event.target.value}
        )
    };


    onInputSubmit = (event) =>{
        event.preventDefault();
        this.setState((prevState)=>(
            {
                list: [...prevState.list,{item:prevState.newToDo,done:false}],
                newToDo: "Add stuff"
            }

        ))
    };

    deleteItem = (i) =>{
        this.setState((prevState)=>({
            list:[
                ...prevState.list.slice(0,i),
                ...prevState.list.slice(i+1)
            ]
        }))
    };

    onItemClick = (i) =>{
        this.setState((prevState)=>({
            list: [...prevState.list.slice(0,i),
                    Object.assign({},prevState.list[i],{done:!prevState.list[i].done}),
                    ...prevState.list.slice(i+1)]
        }))
    };





    render(){
        return(
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>Ugh....What should I do now?</h1>
                            <hr/>
                            <List
                                listItem={this.state.list}
                                deleteItem={this.deleteItem}
                                itemClick={this.onItemClick}/>

                            <Input
                                value={this.state.newToDo}
                                onChange={this.onInputChange}
                                onSubmit={this.onInputSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ToDoApp;