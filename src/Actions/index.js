import axios from "axios";

const KEY = '2177adfc6aaa80b7670006d753956300';

export const querySearch = query => {
    return async (dispatch) => {
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`)
        const TVShowsResponse = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${KEY}&query=${query}`)
        const peopleResponse = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${KEY}&query=${query}`)
        const companiesResponse = await axios.get(`https://api.themoviedb.org/3/search/company?api_key=${KEY}&query=${query}`)
        const keywordResponse = await axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=${KEY}&query=${query}`)
        const collectionResponse = await axios.get(`https://api.themoviedb.org/3/search/collection?api_key=${KEY}&query=${query}`)
        const networksResponse = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${KEY}&query=${query}`)
        const data = {
            searchResults: movieResponse.data.results,
            movieCount: movieResponse.data.total_results,
            TVShowsCount: TVShowsResponse.data.total_results,
            peopleCount: peopleResponse.data.total_results,
            companiesCount: companiesResponse.data.total_results,
            keywordsCount: companiesResponse.data.total_results,
            collectionsCount: collectionResponse.data.total_results,
            networkCount: networksResponse.data.total_results
        };
        dispatch({
            type: "SEARCH_QUERY",
            payload: data
        })
    }
}

export const popularButtonAction = id => {
    return async (dispatch) => {
        let popularResponse;
        let data;
        if(id == 1){
            popularResponse = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${KEY}`);
            data = popularResponse.data.results;
        }else if(id == 2){
            popularResponse = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}`);
            data = popularResponse.data.results;
        }
        dispatch({
            type: 'GET_WHATS_POPULAR',
            payload: {
                data : data,
                id : id
            }
        })
    }
}

export const trendingAction = id => {
    return async (dispatch) => {
        let trendingResponse;
        let data;
        if(id == 1){
            trendingResponse = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`);
            data = trendingResponse.data.results;
        }else if(id == 2){
            trendingResponse = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${KEY}`)
            data = trendingResponse.data.results;
        }
        dispatch({
            type: 'GET_TRENDING',
            payload: data
        })
    }
}

export const getPopularPeopleAction = pageNo => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${KEY}&language=en-US&page=${pageNo}`);
        const data = response.data.results;
        const totalResults = response.data.total_results;
        dispatch({
            type: 'GET_POPULAR_PERSON',
            payload: {
                data: data,
                totalResults: totalResults
            },
        })
    }
}

export const personDetailsAction = id => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${KEY}`);
        const data = response.data;
        dispatch({
            type: 'GET_PERSON_DETAILS',
            payload: data
        })
    }

}