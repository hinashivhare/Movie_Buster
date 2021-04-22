import React from 'react';
import {Card, Progress, Tooltip} from "antd";

const MovieCard = ({ imageLink, percentage, title, date }) => {
    const {Meta} = Card;
    return (
        <Card
            hoverable={true}
            style={{width: 280, padding: " 15px", margin: '10px'}}
            cover={<img
                style={{width: 240, borderRadius: '20px 20px'}}
                alt="example"
                src={imageLink}/>}
            bordered={true}
        >
            <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={percentage}
                          strokeColor='green'
                          strokeWidth={10}
                          width={60}
                          type="circle"
                />
            </Tooltip>
            <Meta
                title={<h5 style={{fontWeight: '700', marginTop: 6}}>{title}</h5>}
                description={<h6>{date}</h6>}/>
        </Card>
    );
}

export default MovieCard;