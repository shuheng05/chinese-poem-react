import React, {useEffect, useState} from 'react';
import {AutoComplete, Button, FloatButton, Input, List, Menu, notification,} from 'antd';
import './Poems.css';
import PoemDetail from "./PoemDetail/PoemDetail.jsx";
import {SettingOutlined} from "@ant-design/icons";
import axios from "axios";

const Poems = () => {

    const items = [
        {
            key: 'type',
            label: '类型',
            icon: <SettingOutlined/>,
            children: [
                {key: '咏怀', label: '咏怀'},
                {key: '爱国', label: '爱国'},
                {key: '思想', label: '思想'},
                {key: '爱情', label: '爱情'},
            ],
        },
        {
            key: 'author',
            label: '作者',
            icon: <SettingOutlined/>,
            children: [
                {key: '李白', label: '李白'},
                {key: '杜甫', label: '杜甫'},
                {key: '苏轼', label: '苏轼'},
                {key: '王维', label: '王维'},
            ],
        },
        {
            key: 'dynasty',
            label: '朝代',
            icon: <SettingOutlined/>,
            children: [
                {key: '唐', label: '唐代'},
                {key: '宋', label: '宋代'},
                {key: '元', label: '元代'},
                {key: '明', label: '明代'},
            ],
        },
        {
            key: 'form',
            label: '形式',
            icon: <SettingOutlined/>,
            children: [
                {key: '诗', label: '诗'},
                {key: '词', label: '词'},
                {key: '曲', label: '曲'},
                {key: '文言文', label: '文言文'},
            ],
        },
    ];

    const [data, setData] = useState([]);
    const [page, setPage]= useState(1);  // Track the current page
    const [type, setType] = useState('');
    const [author,setAuthor] = useState('');
    const [dynasty,setDynasty] = useState('');
    const [form,setForm] = useState('');
    const [content, setContent] = useState('');



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
        if (data.length % 10 !== 0) {
            openNotification(true)();
            return;
        }
        //    /api/poems/get
        axios.post('/api/poems/get', {
            page: page,
            limit: 10,
            type: type,
            author: author,
            dynasty: dynasty,
            form: form,
            content: content
        })
            .then((response) => {
                setData(prevData => [...prevData, ...response.data.data]);
                setPage(page + 1)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const select = (e) => {
        // 在同一事件处理函数中连续发生的，React 会在所有状态更新完成后执行 useEffect, 执行一次
        setPage(1)
        setType('');
        setAuthor('')
        setDynasty('')
        setForm('')
        setData([]);
        const key = e.key;
        const category = e.keyPath[1]

        if (category === 'type') {
            setType(key)
        } else if (category === 'author') {
            setAuthor(key)
        } else if (category === 'dynasty') {
            setDynasty(key)
        } else if (category === 'form') {
            setForm(key)
        }
        // 只会对最后一次改变的状态作出反应
    };

    const onSearch = (value, _e, info) => {
        console.log('search', value)
        setPage(1)
        setData([]);
        setContent(value)
    }



    async function fetchUserList(prefix) {
        console.log('input', prefix);
        // /api/poems/getSuggestions/${prefix}
        let url = `/api/poems/getSuggestions/${prefix}`
        return fetch(url)
            .then((response) => response.json())
            .then((body) =>
                body.data.map((item) => ({
                    label: item,
                    value: item,
                }))
            );
    }

    const [options, setOptions] = useState([]);

    const handleSearch = (value) => {
        if (value) {
            // 模拟发送请求获取补全建议
            fetch(`/api/poems/getSuggestions/${value}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.data)
                    const suggestions = data.data.map((item) => ({
                        value: item,
                        label: item
                    }));
                    setOptions(suggestions);
                });
        } else {
            setOptions([]);
        }
    };

    const onSelect = (value) => {
        console.log('onSelect', value);
        // 进行搜索请求
        onSearch(value)
    };

    // const [isDianzhan, setIsDianzhan] = useState(0);
    // const [isCai, setIsCai] = useState(0);
    // const [isFavovite, setIsFavovite] = useState(0);

    // Initial load of data
    useEffect(() => {
        loadMoreData();
        // useEffect 依赖于 [type, author, dynasty, form] 数组中的状态变化来决定是否执行副作用函数
    }, [type, author, dynasty, form, content]);
    return (
        <div>
            {contextHolder}
            {/*<Search*/}
            {/*    onSearch={onSearch}*/}
            {/*    enterButton*/}
            {/*    style={{width: 304, position: 'fixed',}}*/}
            {/*    className='near-right'*/}
            {/*    onChange={(e) => console.log(e.target.value)}*/}
            {/*/>*/}
            <div>
            <AutoComplete
                options={options}
                onSearch={handleSearch}
                onSelect={onSelect}
                style={{
                    // width: 320,
                    position: 'fixed',
                }}
                className='near-right'
            >
                <Input.Search
                    size={'large'}
                    enterButton
                    onSearch={onSearch}
                />
            </AutoComplete>
            <Menu
                className='near-right'
                onClick={select}
                style={{
                    position: 'fixed',
                    // position: 'fixed',
                    // right: 1120, // 从右侧开始
                    top: 62, // 距离顶部的距离，可以根据需要调整
                    // height: 'calc(100% - 64px)', // 高度为剩余高度
                    // width: 320,
                    backgroundColor: 'rgba(73,118,107,0.2)',
                    // borderStyle: 'solid',
                    // borderColor: '#bde0fe',
                    // borderWidth: '10px',
                    paddingLeft: '20px',
                    borderRadius: '10px 10px 10px 10px',
                }}
                mode="inline"
                items={items}
            />
            </div>
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
                            <PoemDetail className={'list'} poem={poem}/>
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
};

export default Poems;
