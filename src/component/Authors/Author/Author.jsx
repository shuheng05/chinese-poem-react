import React from 'react';
import './Author.css'
import {Avatar, List} from "antd";

function Author({author}) {
    return (
        <div>
            <List.Item.Meta
                avatar={<Avatar src={author.avatar} />}
                title={author.name}
                description={author.desc}
            />
        </div>
    );
}

export default Author;
