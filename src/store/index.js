import { createStore } from 'redux';
import constants from './constants.js'
console.log("what are the constants?",constants);

const initialState = {
    inputText: '',
    items: []
}

const reducer = (state = initialState, action) => {
    console.log('reducer', action);

    switch(action.type){

        case constants.CHANGE_INPUT_TEXT:
            return Object.assign({},state,{inputText: action.text})
        
        case constants.ADD_ITEM:
            return Object.assign({},state,{
                items: state.items.concat(state.inputText),
                inputText: '',
            })
        
        case constants.DELETE_ITEM:
            const copyOfItems = state.items.slice();
            copyOfItems.splice(action.index, 1);
            return Object.assign({}, state, { items: copyOfItems });

        default:
            return state;
    }
}


const store = createStore(reducer);

export default store;