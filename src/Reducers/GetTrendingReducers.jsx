const INITIAL_STATE = {
    streaming : [],
};

export default (state = INITIAL_STATE , action) => {
    if(action.type == 'GET_TRENDING'){
        return {...state, streaming: action.payload}
    }else{
        return state;
    }
}