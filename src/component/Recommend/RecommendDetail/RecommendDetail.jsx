import React, {useEffect, useState} from 'react';
import './RecommendDetail.css'
import axios from "axios";
import {NavLink, useNavigate} from "react-router-dom";
import {Button, Drawer, message, Modal, Popover, Space} from "antd";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import pinyinjson from "../../Poems/PoemDetail/data/pinyin.json";
import langdujson from "../../Poems/PoemDetail/data/langdu.json";
import shiyijson from "../../Poems/PoemDetail/data/shiyi.json";
import shangxijson from "../../Poems/PoemDetail/data/shangxi.json";
import shipingjson from "../../Poems/PoemDetail/data/shiping.json";
import dianzan from "../../Poems/PoemDetail/img/dianzan.png";
import yidianzan from "../../Poems/PoemDetail/img/yidianzan.png";
import cai from "../../Poems/PoemDetail/img/cai.png";
import yicai from "../../Poems/PoemDetail/img/yicai.png";
import shoucang from "../../Poems/PoemDetail/img/shoucang.png";
import yishoucang from "../../Poems/PoemDetail/img/yishoucang.png";
import Video from "../../common/Video/Video.jsx";
import RecommendDetailPinyin from "./RecommendDetailPinyin/RecommendDetailPinyin.jsx";

function RecommendDetail({poem}) {
    useEffect(() => {

        axios.post("/api/poems/likeDislikeFavoriteCount",
            {
                poemId: poem.id
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
        ).then(
            async response => {
                console.log(response.data)

                const likeCount = response.data.data.likeCount;
                const dislikeCount = response.data.data.dislikeCount;
                const favoriteCount = response.data.data.favoriteCount;
                setLikeCount(likeCount)
                setDisikeCount(dislikeCount)
                setFavoriteCount(favoriteCount)
            },
            error => {
                errorMsg("网络错误")
            }
        )


        const token = localStorage.getItem("token");
        axios.post("/api/poems/isLikeDislikeFavorite",
            {
                poemId: poem.id,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: token
                }
            }
        ).then(
            async response => {
                console.log(response.data)
                if (response.data == null || response.data.data == null || response.data.data === "") {
                    setIsDianzhan(0);
                    setIsCai(0)
                    setIsFavorite(0);
                } else {

                    const isLiked = response.data.data.isLiked;
                    const isDisliked = response.data.data.isDisliked;
                    const isFavorite = response.data.data.isFavorite;

                    setIsDianzhan(isLiked);
                    setIsCai(isDisliked)
                    setIsFavorite(isFavorite);

                }
            },
            error => {
                errorMsg("网络错误")
            }
        )
    })
    const navigate = useNavigate();
    const [showPinyin, setShowPinyin] = useState(false); // 初始状态为不显示拼音
    const [showLangdu, setShowLangdu] = useState(false);
    const [showShiyi, setShowShiyi] = useState(false);
    const [showShangxi, setShowShangxi] = useState(false);
    const [shiyi, setShiyi] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDianzhan, setIsDianzhan] = useState(0);
    const [isCai, setIsCai] = useState(0);
    const [isFavorite, setIsFavorite] = useState(0);
    const [likeCount, setLikeCount] = useState(0)
    const [dislikeCount, setDisikeCount] = useState(0)
    const [favoriteCount, setFavoriteCount] = useState(0)
    const togglePinyin = () => {
        setShowPinyin(!showPinyin);
    };
    const handleSpeech = () => {
        const speech = new SpeechSynthesisUtterance(poem.title + poem.author + poem.content);
        speech.lang = 'zh-CN';
        window.speechSynthesis.speak(speech);
    };

    const showDrawerShiyi = () => {
        setShowShiyi(true);
    };
    const onCloseShiyi = () => {
        setShowShiyi(false);
    };
    const showDrawerShangxi = () => {
        setShowShangxi(true);
    };
    const onCloseShangxi = () => {
        setShowShangxi(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [openToLogin, setOpenToLogin] = useState(false);
    const showModalToLogin = () => {
        setOpenToLogin(true);
    };
    const handleOkToLogin = () => {
        navigate(`/login`)
        setOpenToLogin(false);
    };
    const handleCancelToLogin = () => {
        setOpenToLogin(false);
    };
    const giveALike = () => {
        const token = localStorage.getItem("token");
        axios.post("/api/poems/like",
            {
                poemId: poem.id,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: token
                }
            }
        ).then(
            async response => {
                console.log(response.data)
                if (response.data == null || response.data.data == null || response.data.data === "") {
                    showModalToLogin()
                } else {

                    const likeCount = response.data.data.likeCount;
                    const isLiked = response.data.data.isLiked;
                    const dislikeCount = response.data.data.dislikeCount;
                    const isDisliked = response.data.data.isDisliked;
                    setIsDianzhan(isLiked);
                    setIsCai(isDisliked)
                    setLikeCount(likeCount)
                    setDisikeCount(dislikeCount)
                    success(response.data.msg)
                }
            },
            error => {
                errorMsg("网络错误")
            }
        )
    }

    const giveADisLike = () => {
        const token = localStorage.getItem("token");
        axios.post("/api/poems/dislike",
            {
                poemId: poem.id,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: token
                }
            }
        ).then(
            async response => {
                console.log(response.data)
                if (response.data == null || response.data.data == null || response.data.data === "") {
                    showModalToLogin()
                } else {

                    const likeCount = response.data.data.likeCount;
                    const isLiked = response.data.data.isLiked;
                    const dislikeCount = response.data.data.dislikeCount;
                    const isDisliked = response.data.data.isDisliked;
                    setIsDianzhan(isLiked);
                    setIsCai(isDisliked)
                    setLikeCount(likeCount)
                    setDisikeCount(dislikeCount)
                    success(response.data.msg)
                }
            },
            error => {
                errorMsg("网络错误")
            }
        )
    }
    const giveAFavorite = () => {
        const token = localStorage.getItem("token");
        axios.post("/api/poems/favorite",
            {
                poemId: poem.id,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: token
                }
            }
        ).then(
            async response => {
                console.log(response.data)
                if (response.data == null || response.data.data == null || response.data.data === "") {
                    showModalToLogin()
                } else {

                    const favoriteCount = response.data.data.favoriteCount;
                    const isFavorite = response.data.data.isFavorite;
                    setIsFavorite(isFavorite);
                    setFavoriteCount(favoriteCount)
                    success(response.data.msg)
                }

            },
            error => {
                errorMsg("网络错误")
            }
        )
    }
    const [messageApi, contextHolder] = message.useMessage();
    const errorMsg = (msg) => {
        messageApi.open({
            type: 'error',
            content: msg,
        });
    };
    const success = (msg) => {
        messageApi.open({
            type: 'success',
            content: msg,
        });
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div>
            {contextHolder}
            <Popover content="点击进入沉浸式学习" placement={'leftBottom'}>
                <NavLink to={'/gridAnimation'} target={'_blank'}>
                    <h1 style={{color: 'black'}}>{poem.title}</h1>
                </NavLink>
            </Popover>
            <h2>作者：{poem.author}</h2>
            <RecommendDetailPinyin content={poem.content} showPinyin={showPinyin}/>
            <Button.Group style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                {/* <Button style={{width: '100px', height: '100px',}} type="text" icon={<EditOutlined />} onClick={togglePinyin}>{showPinyin ? '隐藏拼音' : '显示拼音'}</Button>
                <Button style={{width: '100px', height: '100px',}} type="text" icon={<PlayCircleOutlined />} onClick={handleSpeech}>开始朗读</Button>
                <Button style={{width: '100px', height: '100px',}} type="text" icon={<PlayCircleOutlined />} onClick={handlePauseResume}>{showLangdu ? '继续' : '暂停'}</Button>
                <Button style={{width: '100px', height: '100px',}} type="text" icon={<EyeOutlined />} onClick={showDrawerShiyi}>查看释义</Button>
                <Button style={{width: '100px', height: '100px',}} type="text" icon={<EyeOutlined />} onClick={showDrawerShangxi}>查看赏析</Button>*/}
                <Popover content={showPinyin ? '隐藏拼音' : '显示拼音'}>
                    <DotLottieReact
                        onClick={togglePinyin}
                        // src='https://lottie.host/07259447-a29b-4729-a0ac-8600b668eee0/x8Ml4w5lQD.json'
                        data={pinyinjson}
                        loop
                        autoplay
                        style={{width: '50px', height: '50px',}}

                    />
                </Popover>

                <Popover content="朗读">
                    <DotLottieReact
                        onClick={handleSpeech}
                        // src='https://lottie.host/af1a5ded-6fdd-47b7-9221-6024ebd63c90/kb1lVCm99E.json'
                        data={langdujson}
                        loop
                        autoplay
                        style={{width: '45px', height: '45px',}}

                    />
                </Popover>
                <Popover content="查看释义">
                    <DotLottieReact
                        onClick={showDrawerShiyi}
                        // src='https://lottie.host/0885466b-0513-4d49-ae5b-a01cf97ddcd9/CCyE3zjnFm.json'
                        loop
                        data={shiyijson}
                        autoplay
                        style={{width: '70px', height: '70px', marginRight: '20px'}}

                    />
                </Popover>
                <Popover content="查看赏析">
                    <DotLottieReact
                        onClick={showDrawerShangxi}
                        // src='https://lottie.host/23ea87bd-e0a2-44a8-93a6-d4417f94e21a/jvA2LQ9BrJ.json'
                        data={shangxijson}
                        loop
                        autoplay
                        style={{width: '70px', height: '70px',}}
                    />
                </Popover>
                <Popover content="观看视频">
                    <DotLottieReact
                        onClick={showModal}
                        // src='https://lottie.host/f51ea841-6e07-4df7-943a-9c61c1f808d6/34FQF7OsF6.json'
                        data={shipingjson}
                        loop
                        autoplay
                        style={{width: '80px', height: '80px',}}
                    />
                </Popover>
                <div className={'anniuright'}>
                    <div>
                        <Popover content={isDianzhan === 0 ? '点赞' : '取消点赞'}>
                            <img src={isDianzhan === 0 ? dianzan : yidianzan} alt={'点赞'}
                                 onClick={giveALike}
                                 style={{width: '70px', height: '70px',}}
                            />
                        </Popover>
                        <p>点赞：{likeCount}</p>
                    </div>
                    <div>
                        <Popover content={isCai === 0 ? '踩' : '取消踩'}>
                            <img src={isCai === 0 ? cai : yicai} alt={'踩'}
                                 onClick={giveADisLike}
                                 style={{width: '50px', height: '50px',}}
                            />

                        </Popover>
                        <p>不喜欢：{dislikeCount}</p>
                    </div>
                    <br/>
                    <div>
                        <Popover content={isFavorite === 0 ? '收藏' : '取消收藏'}>
                            <img src={isFavorite === 0 ? shoucang : yishoucang} alt={'收藏'}
                                 style={{width: '50px', height: '50px',}}
                                 onClick={giveAFavorite}
                            />
                        </Popover>
                        <p>收藏：{favoriteCount}</p>
                    </div>
                </div>

            </Button.Group>

            <Drawer
                title={poem.title + '-' + poem.author}
                placement={'bottom'}
                width={500}
                onClose={onCloseShiyi}
                open={showShiyi}
                extra={
                    <Space>
                        <Button onClick={onCloseShiyi}>Cancel</Button>
                        <Button type="primary" onClick={onCloseShiyi}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <p><p>{poem.translation}</p></p>
            </Drawer>


            <Drawer
                title={poem.title + '-' + poem.author}
                placement={'right'}
                width={500}
                onClose={onCloseShangxi}
                open={showShangxi}
                extra={
                    <Space>
                        <Button onClick={onCloseShangxi}>Cancel</Button>
                        <Button type="primary" onClick={onCloseShangxi}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <p>{poem.appreciate}</p>
            </Drawer>

            <Modal title={poem.title + '-' + poem.author} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                   centered={true}
            >
                <Video mp4Url={poem.mp4Url}/>
            </Modal>


            <Modal
                open={openToLogin}
                title="对不起还未登录🥺"
                onOk={handleOkToLogin}
                onCancel={handleCancelToLogin}
                footer={(_, {OkBtn, CancelBtn}) => (
                    <>
                        {/*<Button>Custom Button</Button>*/}
                        <CancelBtn/>
                        <OkBtn/>
                    </>
                )}
            >
                <p>是否现在去登录或者注册？😎</p>
            </Modal>
        </div>
    );
}

export default RecommendDetail;
