import React, {useEffect, useState} from 'react';
import './Recommend.css'
import {SettingOutlined} from "@ant-design/icons";
import {AutoComplete, Button, FloatButton, Input, List, Menu, notification} from "antd";
import axios from "axios";
import RecommendDetail from "./RecommendDetail/RecommendDetail.jsx";

function Recommend(props) {


    useEffect(() => {
        loadMoreData();
    }, [])

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (pauseOnHover) => () => {
        api.open({
            message: '😭😭😭😭😭😭',
            description:
                '没有更多数据啦😭',
            showProgress: true,
            pauseOnHover,
        });
    };
    const loadMoreData = () => {
        const token = localStorage.getItem("token");
        if (data.length % 10 !== 0) {
            openNotification(true)();
            return;
        }
        //    /api/poems/get
        axios.post('/api/recommend/getUserRecommend',
            {
                page: page,
                limit: 10,
            },
            {
                headers: {
                    token: token
                }
            }
        )
            .then((response) => {
                setData(prevData => [...prevData, ...response.data.data]);
                setPage(page + 1)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            {contextHolder}
            <div className={'near-left'}>
                <List
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={(poem) => (
                        <List.Item key={poem.id}
                                   className={'outer'}
                                   style={{
                                       backgroundColor: 'rgba(219,228,197,0.3)',
                                       // borderStyle: 'solid',
                                       // borderColor: '#bde0fe',
                                       // borderWidth: '10px',
                                       paddingLeft: '20px',
                                       borderRadius: '10px 10px 10px 10px',
                                       marginBottom: '50px',
                                       transitionProperty: 'all',
                                       transitionDuration: '3s',
                                       fontFamily: 'Times,serif',
                                   }}
                        >
                            <RecommendDetail className={'list'} poem={poem}/>
                        </List.Item>
                    )}
                />
                <Button
                    onClick={loadMoreData}
                    block
                    size={'large'}
                >
                    加载更多
                </Button>
                <FloatButton.BackTop/>
            </div>
        </div>
    );
}

export default Recommend;
