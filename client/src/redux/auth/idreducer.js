import authAction from './action';

const initialState={
    id:""
}

export default function rootIdReducer(state=initialState,action){
    switch(action.type){
        case authAction.ID:
            return{
                ...state,
                id:action.id
            };
        default:
            return state;
    }
}