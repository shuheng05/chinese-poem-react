import React, {useEffect, useState} from 'react';
import {Divider, List, Skeleton} from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import './FamousSentences.css'
import FamousSentence from "./FamousSentence/FamousSentence.jsx";
import famouseSentences from "./famouseSentence.json";

const FamousSentences = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true)
        const body = famouseSentences;
        setData([...data, ...body]);
        setLoading(false)
    };
    useEffect(() => {
        loadMoreData();
    }, []);
    return (
        <div className={'near-left'}>
        <div

            id="scrollableDiv"
            style={{
                // height: 600,
                overflow: 'auto',
                padding: '0 16px',
                border: '1px solid rgba(140, 140, 140, 0.35)',
            }}
        >
            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 50}
                loader={
                    <Skeleton
                        avatar
                        paragraph={{
                            rows: 1,
                        }}
                        active
                    />
                }
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    itemLayout="vertical" // 修改为垂直布局
                    dataSource={data}
                    renderItem={(famousSentence) => (
                        <List.Item
                            key={famousSentence.id}
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
                                fontFamily: 'Times,serif'

                            }}
                        >
                            <FamousSentence famousSentence={famousSentence}/>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
</div>
    );
};
export default FamousSentences;
