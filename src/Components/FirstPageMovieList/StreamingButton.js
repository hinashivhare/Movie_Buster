import React from 'react';
import {Button} from "antd";

const StreamingButton = ({ id, title, handleOnClick, activeId}) => {
    const styling = {backgroundColor: 'black', color: 'white'};
    return(
        <Button
            style = {id == activeId ? styling : null}
            onClick={() => handleOnClick(id)}
            id={id}
            type="text">{title}</Button>
    );
}

export default StreamingButton;
