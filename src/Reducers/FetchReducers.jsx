
const INITIAL_STATE = {
    movies: [],
    totalResults: {
        movieCount : null,
        TVShowsCount: null,
        peopleCount: null,
        companiesCount: null,
        keywordsCount: null,
        collectionsCount: null,
        networksCount: null
    }
};

export default (state = INITIAL_STATE, action ) => {
    switch (action.type){
        case "SEARCH_QUERY" :
            console.log(action.payload.movieCount)
            return {...state, movies: action.payload.searchResults,
                totalResults: {
                movieCount: action.payload.movieCount,
                TVShowsCount: action.payload.TVShowsCount,
                peopleCount: action.payload.peopleCount,
                keywordsCount: action.payload.keywordsCount,
                companiesCount: action.payload.companiesCount,
                collectionsCount: action.payload.collectionsCount,
                networksCount: action.payload.networkCount
                } }
        default:
            return state;
    }
}