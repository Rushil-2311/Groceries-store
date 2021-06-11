import authAction from './action';

const initialState={
    counter:0,
    id:""
}

export default function rootReducer(state=initialState,action){
    switch(action.type){
        case authAction.ADD:
            return{
                ...state,
                counter:state.counter+1
            };
            case authAction.ID:
            return{
                ...state,
                id:action.id
            };
        case authAction.REMOVE:
            return{
                ...state,
                counter:state.counter-1
            };
        default:
            return state;
    }
}