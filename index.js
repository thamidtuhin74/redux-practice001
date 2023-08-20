const { createStore } = require("redux");
// import { createStore } from 'redux'
// import {createStore} from "store";
// const {createStore} = require("redux")

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = "RESET";
const INCREMENT_By_Value = "INCREMENT_By_Value";
const ADD_USER = "ADD_USER"

const incrementalCounterState= {
    count: 0,
}

const incrementalUserState= {
    users: ['Tuhin'],
    count: 1,
    age: '24'
}


const incrementalCountAction = ()=>{
    return {
        type: INCREMENT
    };
} 

const incrementalCountActionByValue = (value)=>{
    return {
        type: INCREMENT_By_Value,
        payload: value
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

const addUser = (user)=>{
    return{
        type: ADD_USER,
        payload: user
    }
}

// create reducer 
// reducer->> pure function that defintely returns a value

// const counterReducer = (state=incrementalCounterState , action) =>{
const counterReducer = (state=incrementalUserState , action) =>{
    switch (action.type) {
        // case INCREMENT:
        //     return{
        //         ...state,//for multiple state
        //         count: state.count + 1
        //     }
        // case INCREMENT_By_Value:
        //     return{
        //         ...state,//for multiple state
        //         count: state.count + action.payload
        //     }
        // case DECREMENT:
        //     return{
        //         ...state,//for multiple state
        //         count: state.count - 1
        //     }
        
        // case RESET:
        //     return{
        //         count: 0
        //     }

        case ADD_USER:
            return{
                users: [...state.users, action.payload,],
                count: state.count + 1
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

// store.dispatch(incrementalCountAction());
// store.dispatch(incrementalCountAction());
// store.dispatch(incrementalCountAction());

// store.dispatch(decrementalCountAction());
// store.dispatch(decrementalCountAction());

// store.dispatch(resetCounter());
// store.dispatch(incrementalCountAction());
store.dispatch(incrementalCountActionByValue(10));

store.dispatch(incrementalCountActionByValue(7));
store.dispatch(addUser("tahmid"));

store.dispatch(addUser("Masud"));
store.dispatch(addUser("Palash"));
store.dispatch(addUser("Rasel"));




// import createStore