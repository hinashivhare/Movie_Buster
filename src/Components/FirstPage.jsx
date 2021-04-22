import React from 'react';
import {Button} from 'antd'
import SearchBar from "./SearchBar";
import WhatsPopular from "./FirstPageMovieList/WhatsPopular";
import GetLatest from "./FirstPageMovieList/GetTrending";

class FirstPage extends React.Component {
    constructor(props) {
        super(props)

    }
    render(){
        return(
            <div className="first_page">
                <div className="first_page_header">
                    <h1>Welcome.</h1>
                    <h2>Millions of movies , TV shows and people to discover.</h2>
                    <h2>Explore now.</h2>
                    <SearchBar/>
                </div>
                <WhatsPopular/>
                <GetLatest/>
            </div>
        );
    }
}

export default FirstPage;