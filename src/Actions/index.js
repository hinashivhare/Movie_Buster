import axios from "axios";

export const querySearch = query => {
    return async (dispatch) => {
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2177adfc6aaa80b7670006d753956300&query=${query}`)
        const TVShowsResponse = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=2177adfc6aaa80b7670006d753956300&query=${query}`)
        const peopleResponse = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=2177adfc6aaa80b7670006d753956300&query=${query}`)
        const companiesResponse = await axios.get(`https://api.themoviedb.org/3/search/company?api_key=2177adfc6aaa80b7670006d753956300&query=${query}`)
        const keywordResponse = await axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=2177adfc6aaa80b7670006d753956300&query=${query}`)
        const collectionResponse = await axios.get(`https://api.themoviedb.org/3/search/collection?api_key=2177adfc6aaa80b7670006d753956300&query=${query}`)
        const networksResponse = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=2177adfc6aaa80b7670006d753956300&query=${query}`)
        const data = {
            searchResults: movieResponse.data.results,
            movieCount: movieResponse.data.total_results,
            TVShowsCount: TVShowsResponse.data.total_results,
            peopleCount: peopleResponse.data.total_results,
            companiesCount: companiesResponse.data.total_results,
            keywordsCount : companiesResponse.data.total_results,
            collectionsCount: collectionResponse.data.total_results,
            networkCount: networksResponse.data.total_results
        };
      //  console.log(data);
        dispatch({
            type: "SEARCH_QUERY",
            payload: data
        })
    }

}