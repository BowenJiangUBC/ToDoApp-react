import React from 'react';
import List from './List';
import Input from './Input'

class ToDoApp extends React.Component{

    componentWillMount(){
        this.setState({
            list: ["thing1","thing2","thing3"],
            newToDo: "test"
        })
    };

    onInputChange = (event) => {

        this.setState(
            {newToDo: event.target.value}
        )
    };


    onInputSubmit = () =>{
        event.preventDefault();
        this.setState((previousState)=>(
            {
                list:[...previousState.list,previousState.newToDo],
                newToDo: "Add stuff"
            }
        ));
        console.log("suceed!")
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
                                listItem={this.state.list}/>

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