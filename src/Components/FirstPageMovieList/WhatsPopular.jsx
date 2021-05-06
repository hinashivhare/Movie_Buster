import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {popularButtonAction} from "../../Actions";
import MovieCard from "./MovieCard";
import StreamingButton from "./StreamingButton";

const popularButton = [
    {
        title: "On TV",
        id: 1
    },
    {
        title: "In Theatres",
        id: 2
    },
];

const WhatsPopular = (props) => {
    const [activeID, setActiveID] = useState('1')

    useEffect(() => {
        props.popularButtonAction(activeID)
    }, [])

    const handleOnClick = (id) => {
        props.popularButtonAction(id)
        setActiveID(id);
    }

    const list = popularButton.map(ele => {
        return (
          <StreamingButton id={ele.id}
                           title = {ele.title}
                           activeId = {activeID}
                           handleOnClick={handleOnClick}
          />
        );
    });

    const popularList = props.whatsPopular.streaming.map(ele => {
        const imageLink = `https://www.themoviedb.org/t/p/w440_and_h660_face/${ele.backdrop_path}`
        return (
           <MovieCard imageLink={imageLink}
                      percentage={ele.vote_average * 10}
                      title = {ele.title? ele.title : ele.name}
                      date = {ele.release_date ? ele.relase_date : ele.first_air_date}
           />
        );
    });

    return (
        <div>
            <div className="popular_page">
                <h3>What's Popular</h3>
                <div className="whats_popular_streaming_button">
                    {list}
                </div>
            </div>
            <div id='growth' className="popular_page_content">
                {popularList}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        whatsPopular: state.whatsPopular,
    };
}

export default connect(mapStateToProps, {popularButtonAction})(WhatsPopular);