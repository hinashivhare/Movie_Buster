import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { trendingAction } from '../../Actions'
import StreamingButton from "./StreamingButton";
import MovieCard from "./MovieCard";

const trending = [
    {
        title: "Today",
        id: 1
    },
    {
        title: "This Week",
        id: 2
    },
];

const GetTrending = (props) => {
    const[activeID, setActiveID] = useState(1)

    useEffect(() => {
        props.trendingAction(activeID)
    }, [])

    const handleOnClick = id => {
        props.trendingAction(id)
        setActiveID(id);

    }

    const list = props.trendingList.streaming.map( ele => {
        const imageLink = `https://www.themoviedb.org/t/p/w440_and_h660_face/${ele.backdrop_path}`
        return (
            <MovieCard imageLink={imageLink}
                       percentage={ele.vote_average * 10}
                       title = {ele.title? ele.title : ele.name}
                       date = {ele.release_date ? ele.relase_date : ele.first_air_date}
            />
        );
    })


    const trendingOptions = trending.map(ele  => {
        return(
            <StreamingButton id={ele.id}
                             title = {ele.title}
                             activeId = {activeID}
                             handleOnClick={handleOnClick}
            />
        );
    })

    return(
        <div>
            <div className="popular_page">
                <h3>Trending</h3>
                <div className="whats_popular_streaming_button">
                    {trendingOptions}
                </div>
            </div>
            <div className="popular_page_content">
                {list}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        trendingList: state.trendingList,
    };
}

export default connect(mapStateToProps, { trendingAction })(GetTrending);