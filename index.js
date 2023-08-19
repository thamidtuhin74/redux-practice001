const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


const incrementalCounterState= {
    count: 0
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

// create reducer 
// reducer->> pure function that defintely returns a value

const counterReducer = (state , action) =>{
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
        default:
            state;
    }
}