import React  from "react";
import {Form} from "antd";
import { connect} from "react-redux";
import { InfoCircleFilled } from '@ant-design/icons';
import { List, Avatar, Row, Col, Card} from 'antd';
import SearchBar from "./SearchBar";

const Search = (props) => {
    return(
       <div className="search_page">
         <div className="searchbar">
             <SearchBar/>
         </div>
         <Row>
             <Col span={4}>
                 <div className="site-card-border-less-wrapper">
                     <Card className="card_total_results" title="Search Results" bordered={true} style={{ width: 300 }}>
                        <div className="search_card_contents">
                            <p>Movies</p>
                            <p>{props.movies.totalResults.movieCount}</p>
                        </div>
                         <div className="search_card_contents">
                             <p>TV Shows</p>
                             <p>{props.movies.totalResults.TVShowsCount}</p>
                         </div>
                         <div className="search_card_contents">
                             <p>People</p>
                             <p>{props.movies.totalResults.peopleCount}</p>
                         </div>
                         <div className="search_card_contents">
                             <p>Companies</p>
                             <p>{props.movies.totalResults.companiesCount}</p>
                         </div>
                         <div className="search_card_contents">
                             <p>Keywords</p>
                             <p>{props.movies.totalResults.keywordsCount}</p>
                         </div>
                         <div className="search_card_contents">
                             <p>Collections</p>
                             <p>{props.movies.totalResults.collectionsCount}</p>
                         </div>
                         <div className="search_card_contents">
                             <p>Networks</p>
                             <p>{props.movies.totalResults.networksCount}</p>
                         </div>
                     </Card>
                 </div>
                 <div className="search_page_inform">
                     <p>{<InfoCircleFilled/>} Tip: You can use the 'y:' filter to narrow
                         your results by year. Example: 'star wars
                         y:1977'.
                     </p>
                 </div>
             </Col>
             <Col span={20}>
                 <List
                     itemLayout="horizontal"
                     dataSource={props.movies.movies}
                     renderItem={item => (
                         <List.Item>
                             <List.Item.Meta
                                 avatar={<img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.backdrop_path}`} />}
                                 title={<a href="https://ant.design">{item.title}</a>}
                                 description={<div>
                                     <p>{item.release_date}</p>
                                     <p>{item.overview}</p>
                                 </div>}
                             />
                         </List.Item>
                     )}
                 />
             </Col>
         </Row>
       </div>
    );
}

const mapStateToProps = state => {
    return{
        movies: state.movies,
    };
}

export default connect(mapStateToProps)(Search);