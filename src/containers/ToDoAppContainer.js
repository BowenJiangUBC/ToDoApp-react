import {connect} from 'react-redux';
import ToDoApp from '../components/ToDoApp.js';
import {
    inputChange,
    inputSubmit,
    clickItem,
    deleteItem
} from '../redux/modules/toDoApp';


function mapStateToProps(state){
	return{
		toDoApp: state.toDoApp 	// gives our component access to state through props.toDoApp
	};
}

function mapDispatchToProps(dispatch){
	return{
	    inputChange: (value)=>dispatch(inputChange(value)),
        inputSubmit: ()=>dispatch(inputSubmit()),
        clickItem: (index)=>dispatch(clickItem(index)),
        deleteItem: (index)=>dispatch(deleteItem(index))
    };	// here we'll soon be mapping actions to props
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ToDoApp);