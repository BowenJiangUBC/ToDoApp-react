const initialState = {
  list: [
      {item: 'eat', done: true},
      {item: 'pray', done: true},
      {item: 'love', done: false}
  ],
  newToDo: ''
}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)

const INPUT_CHANGED = 'INPUT_CHANGED';

export function inputChange(value){
	return{
		type: INPUT_CHANGED,
		value
	}
}

const INPUT_SUBMIT = 'INPUT_SUBMIT';

export function inputSubmit(){
    return {
        type: INPUT_SUBMIT
    }
}

const CLICK_ITEM = 'CLICK_ITEM';

export function clickItem(index){
    return{
        type: CLICK_ITEM,
        index
    }
}

const DELETE_ITEM = 'DELETE_ITEM';

export function deleteItem(index){
    return{
        type: DELETE_ITEM,
        index
    }
}



export default function reducer(state = initialState, action){// a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
	switch(action.type){
        case DELETE_ITEM:
            return Object.assign(
                {},
                state,
                {list:[
                    ...state.list.slice(0,action.index),
                    ...state.list.slice(action.index+1)
                ]}
            );
        case CLICK_ITEM:
            return Object.assign(
                {},
                state,
                {list:[
                    ...state.list.slice(0,action.index),
                    Object.assign({},state.list[action.index], {done: !state.list[action.index].done}),
                    ...state.list.slice(action.index+1)
                ]}
            );
        case INPUT_SUBMIT:
	        return Object.assign(
                {},
                state,
                {list: [...state.list, {item: state.newToDo, done:false}],
                newToDo:''}
            );
        case INPUT_CHANGED:
            return Object.assign(
                {},
                state,
                {newToDo: action.value}
            );
	    default:
		    return state;
	}
}