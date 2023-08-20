const { createStore } = require("redux");
// import { createStore } from 'redux'
// import {createStore} from "store";
// const {createStore} = require("redux")

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = "RESET";

const incrementalCounterState= {
    count: 0,
}

const incrementalUserState= {
    name: 'Tuhin',
    age: '24'
}


const incrementalCountAction = ()=>{
    return {
        type: INCREMENT
    };
} 

const decrementalCountAction = ()=>{
    return {
        type: DECREMENT
    };
} 

const resetCounter = ()=>{
    return{
        type: RESET
    }
}

// create reducer 
// reducer->> pure function that defintely returns a value

const counterReducer = (state=incrementalCounterState , action) =>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,//for multiple state
                count: state.count + 1
            }
        case DECREMENT:
            return{
                ...state,//for multiple state
                count: state.count - 1
            }
        
        case RESET:
            return{
                count: 0
            }
    }
}
// store -  getState , dispatch , subscribe

// create store --> subscribe --> dispatch

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch action
// dispatch is a object

store.dispatch(incrementalCountAction());
store.dispatch(incrementalCountAction());
store.dispatch(incrementalCountAction());

store.dispatch(decrementalCountAction());
store.dispatch(decrementalCountAction());

store.dispatch(resetCounter());
store.dispatch(incrementalCountAction());



// import createStore