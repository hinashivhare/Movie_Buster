const INITIAL_STATE = {
    popularPeople :{
        people: [],
        totalResults: 0
    },
    person: []
};

export default (state = INITIAL_STATE , action) => {

    if(action.type == 'GET_POPULAR_PERSON'){
      const popularPeople = {
        people: action.payload.data,
        totalResults: action.payload.totalResults
      }

        return {...state, popularPeople: popularPeople }
    }else if(action.type == 'GET_PERSON_DETAILS'){
        return {...state, person: action.payload}
    }else{
             return state;
         }
};