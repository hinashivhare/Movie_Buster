import React from 'react';
import {Button} from 'antd'
import SearchBar from "./SearchBar";

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
                <div className="first_page_2">
                    <h3>What's Popular</h3>
                   <div className="first_page_streaming_button">
                       <Button type="text">Streaming</Button>
                       <Button type="text">On TV</Button>
                       <Button type="text">On Rent</Button>
                       <Button type="text">In Theaters</Button>
                   </div>
                </div>
            </div>
        );
    }
}

export default FirstPage;