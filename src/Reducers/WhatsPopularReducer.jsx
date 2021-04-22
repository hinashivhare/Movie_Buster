const INITIAL_STATE = {
    streaming : [],
};

export default (state = INITIAL_STATE , action) => {
    if(action.type === 'GET_WHATS_POPULAR'){
        return {...state, streaming: action.payload.data}
    }else{
        return state;
    }
}