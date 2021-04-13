import React from 'react';
import  {Button, Dropdown} from "antd";
import DropdownMenu from "./DropdownMenu";
import {Link } from 'react-router-dom';
import { PlusOutlined, BellOutlined, SearchOutlined, UserAddOutlined, SplitCellsOutlined} from '@ant-design/icons';

const Header = () => {

    return(
        <div className="nav_bar">
            <div  className="nav_bar_1">
           <Link to='/'>
               <Button type='text'>TMDB</Button>
           </Link>
            <Dropdown overlay={<DropdownMenu name={"Movies"}/>} placement="bottomLeft" arrow>
                <Button type='text'>Movies</Button>
            </Dropdown>
            <Dropdown overlay={<DropdownMenu name={"TV Shows"}/>} placement="bottomLeft" arrow>
                <Button type='text'>TV Shows</Button>
            </Dropdown>
            <Dropdown overlay={<DropdownMenu name={"People"}/>} placement="bottomLeft" arrow>
                <Button type='text'>People</Button>
            </Dropdown>
            <Dropdown overlay={<DropdownMenu name={"More"}/>} placement="bottomLeft" arrow>
                <Button type='text'>More</Button>
            </Dropdown>
        </div>
            <div className="nav_bar_2">
                <Button type='text'><PlusOutlined /></Button>
                <Button type='text'><SplitCellsOutlined /></Button>
                <Button type='text'><BellOutlined /></Button>
                <Button type='text'><UserAddOutlined /></Button>
                <Button type='text'><SearchOutlined /></Button>
            </div>
        </div>
    );
}

export default Header;