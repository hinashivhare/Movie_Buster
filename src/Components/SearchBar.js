import React from "react";
import { withRouter } from 'react-router-dom'
import {Button} from "antd";
import { connect } from "react-redux";
import { querySearch } from "../Actions";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
    }
     handleOnChange = event => {
       this.setState({
           query: event.target.value
       })
    };

     handleOnClick = () => {
        this.props.history.push({
            pathname: '/search',
            search:   `?query=${this.state.query}`
        })
        this.props.querySearch(this.state.query);
    }

   render(){
       return(
           <div className="header_form">
               <input
                   style={{width: "80%"}}
                   onChange={this.handleOnChange}
                   placeholder = "Search for movies, TV Shows, persons....."
               />
               <Button type="primary" onClick={this.handleOnClick}>Search</Button>
           </div>
       );
   }
}

export default connect(null, {querySearch})(withRouter(SearchBar));