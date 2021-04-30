import React from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";

const DropdownMenu = ({ name }) => {
    const menuData = {
        "Movies" : ["Popular", "Now Playing", "Upcoming", "Top Rated"],
        "TV Shows": ["Popular", "Airing Today", "On TV","Top Rated" ],
        "People": ["Popular People"],
        "More" : ["Discussions", "Leader board" , "Support", "API"]
    }

   const menuList = menuData[name].map(ele => {
       if(ele == 'Popular People'){
           return(
               <Menu.Item>
                  <Link to='/person'>
                      {ele}
                  </Link>
               </Menu.Item>
           );
       }else{
           return(
               <Menu.Item>
                   <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                       {ele}
                   </a>
               </Menu.Item>
           );
       }
   })

 return(
   <Menu>
       {menuList}
   </Menu>
 );
};

export default DropdownMenu;