const INITIAL_STATE = {
    popularPeople :{
        people: [],
        totalResults: 0
    },
    person: {
        personal: [],
        credits : 0,
        socialLinks : null,
    }
};

export default (state = INITIAL_STATE , action) => {

    if(action.type == 'GET_POPULAR_PERSON'){
      const popularPeople = {
        people: action.payload.data,
        totalResults: action.payload.totalResults
      }
        return {...state, popularPeople: popularPeople }
    }else if(action.type == 'GET_PERSON_DETAILS'){
         const person = {
                personal: action.payload.data,
                credits: action.payload.credit,
                socialLinks: action.payload.socialLinks,
              }
        return {...state, person: person}
    }else{
             return state;
         }
};