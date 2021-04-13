import React from 'react';
import {Menu} from "antd";

const DropdownMenu = ({ name }) => {
    const menuData = {
        "Movies" : ["Popular", "Now Playing", "Upcoming", "Top Rated"],
        "TV Shows": ["Popular", "Airing Today", "On TV","Top Rated" ],
        "People": ["Popular People"],
        "More" : ["Discussions", "Leader board" , "Support", "API"]
    }

   const menuList = menuData[name].map(ele => {
       return(
           <Menu.Item>
               <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                   {ele}
               </a>
           </Menu.Item>
       );
   })

 return(
   <Menu>
       {menuList}
   </Menu>
 );
};

export default DropdownMenu;