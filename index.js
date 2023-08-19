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
