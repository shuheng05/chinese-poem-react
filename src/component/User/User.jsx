import React, {useEffect, useState} from 'react';
import './static/css/root.css'
import './static/css/style.css'
import './User.css'

import logokuang from './static/img/logokuang.png'
import i1 from './static/img/i1.png'
import i2 from './static/img/i2.png'
import i4 from './static/img/i4.png'
import skillPc from './static/svg/skillPc.svg'
import skillWap from './static/svg/skillWap.svg'
import axios from "axios";
import {List, message, Modal, notification} from "antd";
import {useNavigate} from "react-router-dom";
import PoemDetail from "../Poems/PoemDetail/PoemDetail.jsx";
import one from "../Home/SVG/1.svg";
import two from "../Home/SVG/2.svg";
import three from "../Home/SVG/3.svg";
import four from "../Home/SVG/4.svg";
import five from "../Home/SVG/5.svg";
import six from "../Home/SVG/6.svg";
import seven from "../Home/SVG/7.svg";
import eight from "../Home/SVG/8.svg";
import nine from "../Home/SVG/9.svg";
import ten from "../Home/SVG/10.svg";
import p from "../Home/SVG/p.svg";
import qq from './static/img/qq.jpg'
import wxmoney from './static/img/wxmoney.jpg'


function User() {

    const [favoritePage, setFavoritePage] = useState(1)
    const [favoritePoems, setFavoritePoems] = useState([]);
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token)
        axios.post("/api/user/info", {},
            {
                headers: {
                    token: token
                }
            }

        ).then(
            response => {
                console.log(response.data)
                if (response.data == null || response.data === "") {
                    navigate('/login')
                }

                setUserInfo(response.data.data)

            },
            error => {
                errorMsg("网络错误")
            }
        )
        loadmoreFavoritePoems()
    },[])
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

    const loadmoreFavoritePoems = () => {
        if ((favoritePoems.length) % 8 !== 0 || favoritePoems.length === 0) {
            openNotification(true)();
            return;
        }
        const token = localStorage.getItem("token");
        axios.post("/api/user/getFavoritePoems",
            {
                page: favoritePage,
                limit: 8
            },
            {
                headers: {
                    token: token
                }
            }

        ).then(
            response => {
               // console.log(response.data)
                if (response.data == null || response.data === "") {
                    navigate('/login')
                }
                setFavoritePoems(prevData => [...prevData, ...response.data.data]);
                setFavoritePage(favoritePage + 1)
            },
            error => {
                errorMsg("网络错误")
            }
        )
    }

    const [api, contextHolder1] = notification.useNotification();
    const openNotification = (pauseOnHover) => () => {
        api.open({
            message: '😭😭😭😭😭😭',
            description:
                '没有更多收藏数据啦😭',
            showProgress: true,
            pauseOnHover,
        });
    };



    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const showModal1 = () => {
        setIsModalOpen1(true);
    };
    const handleOk1 = () => {
        setIsModalOpen1(false);
    };
    const handleCancel1 = () => {
        setIsModalOpen1(false);
    };

    return (

        <div className={'bodyUser'}>
            {contextHolder}
            {contextHolder1}
            {/*<div id="zyyo-loading">*/}
            {/*    <div id="zyyo-loading-center">*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="zyyo-filter"></div>*/}

            {/*userBg*/}
            <div className="zyyo-main">
                <div className="zyyo-left">
                    <div className="logo" style={{backgroundImage: `url(${userInfo.avatar})`}}>
                        {/*<img style={{position: 'absolute',top:'-15%',left:'-10%',width: '120%', aspectRatio: 1}}*/}
                        {/*     src={logokuang} alt=''/>*/}
                    </div>
                    <div className="left-div left-des">
                        <div className="left-des-item">
                            <svg d="1705773709627" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M512 249.976471c-99.388235 0-180.705882 81.317647-180.705882 180.705882s81.317647 180.705882 180.705882 180.705882 180.705882-81.317647 180.705882-180.705882-81.317647-180.705882-180.705882-180.705882z m0 301.17647c-66.258824 0-120.470588-54.211765-120.470588-120.470588s54.211765-120.470588 120.470588-120.470588 120.470588 54.211765 120.470588 120.470588-54.211765 120.470588-120.470588 120.470588z"
                                ></path>
                                <path
                                    d="M512 39.152941c-216.847059 0-391.529412 174.682353-391.529412 391.529412 0 349.364706 391.529412 572.235294 391.529412 572.235294s391.529412-222.870588 391.529412-572.235294c0-216.847059-174.682353-391.529412-391.529412-391.529412z m0 891.482353C424.658824 873.411765 180.705882 686.682353 180.705882 430.682353c0-183.717647 147.576471-331.294118 331.294118-331.294118s331.294118 147.576471 331.294118 331.294118c0 256-243.952941 442.729412-331.294118 499.952941z"
                                ></path>
                            </svg>
                            {userInfo.address}
                        </div>
                        <div className="left-des-item">
                            <svg d="1705773906032" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M729.6 234.666667H294.4V157.866667a51.2 51.2 0 0 1 51.2-51.2h332.8a51.2 51.2 0 0 1 51.2 51.2v76.8z m179.2 51.2a51.2 51.2 0 0 1 51.2 51.2v512a51.2 51.2 0 0 1-51.2 51.2H115.2a51.2 51.2 0 0 1-51.2-51.2v-512a51.2 51.2 0 0 1 51.2-51.2h793.557333z m-768 172.032c0 16.384 13.312 29.696 29.696 29.696h683.008a29.696 29.696 0 1 0 0-59.392H170.410667a29.696 29.696 0 0 0-29.696 29.696z m252.416 118.784c0 16.384 13.312 29.696 29.696 29.696h178.176a29.696 29.696 0 1 0 0-59.392H422.912a29.738667 29.738667 0 0 0-29.696 29.696z"
                                ></path>
                            </svg>
                            {userInfo.email}
                        </div>
                    </div>
                    <div className="left-div left-tag">
                        <div className="left-tag-item">诗歌
                        </div>
                        <div className="left-tag-item">文学
                        </div>
                        <div className="left-tag-item">灵感
                        </div>
                        <div className="left-tag-item">创作
                        </div>
                        <div className="left-tag-item">心灵
                        </div>
                        <div className="left-tag-item">探索
                        </div>
                        <div className="left-tag-item">艺术
                        </div>
                        <div className="left-tag-item">文化</div>
                    </div>
                    <div className="left-div left-time">
                        <ul id="line">
                            <li>
                                <div className="focus"></div>
                                <div>
                                    挖掘多元视角
                                </div>
                                <div>2024.6</div>
                            </li>
                            <li>
                                <div className="focus"></div>
                                <div>
                                    锤炼自己的诗歌技艺
                                </div>
                                <div>2024.5</div>
                            </li>
                            <li>
                                <div className="focus"></div>
                                <div>
                                    吸收前人的智慧
                                </div>
                                <div>2024.4</div>
                            </li>
                            <li>
                                <div className="focus"></div>
                                <div>
                                    诗友交流，分享作品
                                </div>
                                <div>2024.3</div>
                            </li>
                            <li>
                                <div className="focus"></div>
                                <div>
                                    寻找创作的灵感
                                </div>
                                <div>2024.2</div>
                            </li>
                            <li>
                                <div className="focus"></div>
                                <div>踏上诗歌的旅程</div>
                                <div>2024.1</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="zyyo-right">
                    <header>
                        <div className="index-logo logoAvatar">
                            <img
                                style={{position: 'absolute', top: '-15%', left: '-10%', width: '120%', aspectRatio: 1}}
                                src={logokuang} alt=''/>
                        </div>
                        <div className="welcome">
                            {/*Hello I' m*/}
                            <span className="gradientText">
                                {userInfo.username}
                            </span>
                        </div>
                        <div className="description">

                            <span className="purpleText">
                                探索诗意世界，感受心灵的震撼。
                            </span>
                        </div>
                        <div className="description">

                            <span className="purpleText textBackground">
                                在诗岛，字里行间，发现无限可能。
                            </span>
                            <span className="purpleText textBackground">
                               与我们一起，领略诗歌的魅力与深度。
                          </span>

                        </div>

                        <div className="iconContainer">
                            <a className="iconItem" href="https://github.com/shuheng05">
                                <svg d="1704870335945" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                                    ></path>
                                </svg>
                                <div className="iconTip">Github</div>
                            </a>
                            <a className="iconItem"  href="mailto:3070735368@qq.com">
                            <svg d="1704870588438" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M926.47619 355.644952V780.190476a73.142857 73.142857 0 0 1-73.142857 73.142857H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142857V355.644952l304.103619 257.828572a170.666667 170.666667 0 0 0 220.745142 0L926.47619 355.644952zM853.333333 170.666667a74.044952 74.044952 0 0 1 26.087619 4.778666 72.704 72.704 0 0 1 30.622477 22.186667 73.508571 73.508571 0 0 1 10.678857 17.67619c3.169524 7.509333 5.12 15.652571 5.607619 24.210286L926.47619 243.809524v24.380952L559.469714 581.241905a73.142857 73.142857 0 0 1-91.306666 2.901333l-3.632762-2.925714L97.52381 268.190476v-24.380952a72.899048 72.899048 0 0 1 40.155428-65.292191A72.97219 72.97219 0 0 1 170.666667 170.666667h682.666666z"
                                ></path>
                            </svg>
                            <div className="iconTip">Mail</div>
                        </a>
                            <a className="iconItem" onClick={showModal1} href="#">
                            <svg d="1705247464964" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M995.575172 725.451034c-12.358621-26.835862-38.488276-64.794483-92.689655-94.27862-62.146207-33.721379-136.297931-40.96-208.860689-20.303448l-99.928276 28.424827-279.304828-126.057931H22.775172v489.401379h509.704828l432.375172-195.266207c15.006897-6.708966 26.835862-19.42069 32.662069-34.957241 5.649655-15.36 4.943448-31.955862-1.942069-46.962759z m-482.162758 188.910345H111.051034V601.688276h184.673104l166.664828 75.387586-3.354483 0.882759h-170.372414v88.275862H471.393103l246.819311-70.267586c49.434483-14.124138 101.517241-9.357241 142.653793 12.888275 18.184828 9.886897 30.72 20.833103 39.371034 30.896552l-386.824827 174.609655z"
                                ></path>
                                <path
                                    d="M695.437241 163.486897l58.615173-142.30069h-397.24138l66.736552 143.36c-121.82069 53.142069-207.095172 174.433103-207.095172 315.674483 0 28.601379 3.531034 57.202759 10.593103 84.744827l85.627586-21.715862c-5.12-20.48-7.768276-41.666207-7.768275-63.028965 0-141.241379 114.758621-256 256-256s256 114.758621 256 256c0 51.023448-14.830345 100.104828-43.078621 142.300689l73.268965 49.08138c37.958621-56.673103 58.085517-122.88 58.085518-191.382069-0.176552-141.947586-86.686897-264.121379-209.743449-316.733793zM467.508966 91.983448h180.965517l-21.009655 50.846897a348.16 348.16 0 0 0-66.913104-6.708966c-23.834483 0-46.962759 2.471724-69.384827 7.062069l-23.657931-51.2z"
                                ></path>
                                <path
                                    d="M683.431724 427.431724v-70.62069h-38.311724l30.190345-30.190344-49.964138-49.964138-62.49931 62.49931h-6.002759L494.344828 276.656552l-49.787587 49.964138 30.013793 30.190344h-38.311724v70.62069h88.275862v35.310345h-88.275862v70.62069h88.275862v52.965517h70.62069v-52.965517h88.275862v-70.62069h-88.275862v-35.310345z"
                                ></path>
                            </svg>
                            <div className="iconTip">赞助</div>
                        </a>
                            <a className="iconItem" onClick={showModal} href="#">
                            <svg d="1712319361023" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                                ></path>
                            </svg>
                            <div className="iconTip">QQ</div>
                            </a>
                        {/*    <a className="switchUser" href="#">*/}
                        {/*    <div className="onoffswitch">*/}
                        {/*        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox"*/}
                        {/*               id="myonoffswitch"*/}
                        {/*               checked/>*/}
                        {/*        <label className="onoffswitch-label" htmlFor="myonoffswitch">*/}
                        {/*            <span className="onoffswitch-inner"></span>*/}
                        {/*            <span className="onoffswitch-switch"></span>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*</a>*/}

                        </div>

                        {/*<div className="tanChiShe">*/}
                        {/*    <img id="tanChiShe" src={snakeLight} alt=""/>*/}
                        {/*</div>*/}
                    </header>


                    {/*<content>*/}
                        <div className="titleUser">
                            <svg d="1705257422086" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M629.333333 202.666667v213.333333h277.333334v448h-512v-213.333333h-277.333334v-448h512z m213.333334 277.333333h-213.333334v170.666667h-170.666666v149.333333h384v-320z m-277.333334-213.333333h-384v320h213.333334v-170.666667h170.666666v-149.333333z m0 213.333333h-106.666666v106.666667h106.666666v-106.666667z"
                                ></path>
                            </svg>
                            收藏
                        </div>
                        <div className="projectList">
                            {
                                favoritePoems.map((poem) => (
                                    <a key={poem.poemId} className="projectItem a"  href="#">
                                        <div className="projectItemLeft">
                                            <h1>{poem.poemTitle}</h1>
                                            <p>{poem.poemHeadContent}</p>
                                        </div>
                                        <div className="projectItemRight">
                                            <h4 style={{color: 'white'}}>{poem.poemAuthor}</h4>
                                            {/*<img src={i1} alt=""/>*/}
                                        </div>
                                    </a>
                                ))
                            }
                            {/*<a className="projectItem a" target="_blank" href="https://blog.zyyo.net">*/}
                            {/*    <div className="projectItemLeft">*/}
                            {/*        <h1>无题</h1>*/}
                            {/*        <p>相见时难别亦难</p>*/}
                            {/*    </div>*/}
                            {/*    <div className="projectItemRight">*/}
                            {/*        <img src={i1} alt=""/>*/}
                            {/*    </div>*/}
                            {/*</a>*/}
                            {/*<a className="projectItem a" target="_blank" href="https://blog.zyyo.net">*/}
                            {/*    <div className="projectItemLeft">*/}
                            {/*        <h1>无题</h1>*/}
                            {/*        <p>相见时难别亦难</p>*/}
                            {/*    </div>*/}
                            {/*    <div className="projectItemRight">*/}
                            {/*        <img src={i1} alt=""/>*/}
                            {/*    </div>*/}
                            {/*</a>*/}

                            {/*<a className="projectItem a" target="_blank" href="https://i.zyyo.cc">*/}
                            {/*    <div className="projectItemLeft">*/}
                            {/*        <h1>行路难</h1>*/}
                            {/*        <p>金樽清酒斗十千</p>*/}
                            {/*    </div>*/}
                            {/*    <div className="projectItemRight">*/}
                            {/*        <img src={i2} alt=""/>*/}
                            {/*    </div>*/}
                            {/*</a>*/}
                            {/*<a className="projectItem a" target="_blank" href="https://zyyo.cc">*/}
                            {/*    <div className="projectItemLeft">*/}
                            {/*        <h1>唐多令</h1>*/}
                            {/*        <p>与买桂花同载酒</p>*/}
                            {/*    </div>*/}
                            {/*    <div className="projectItemRight">*/}
                            {/*        <img src={i4} alt=""/>*/}
                            {/*    </div>*/}

                            {/*</a>*/}
                            {/*<a className="projectItem a" target="_blank" href="https://zyyo.cc">*/}
                            {/*<div className="projectItemLeft">*/}
                            {/*    <h1>登高</h1>*/}
                            {/*    <p>风急天高猿啸哀</p>*/}
                            {/*</div>*/}
                            {/*<div className="projectItemRight">*/}
                            {/*    <img src={i4} alt=""/>*/}
                            {/*</div>*/}
                            {/*</a>*/}
                            <button className={'buttonUSer'} onClick={loadmoreFavoritePoems}>更多</button>
                        </div>
                        <div className="titleUser">
                            <svg d="1705257422086" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M629.333333 202.666667v213.333333h277.333334v448h-512v-213.333333h-277.333334v-448h512z m213.333334 277.333333h-213.333334v170.666667h-170.666666v149.333333h384v-320z m-277.333334-213.333333h-384v320h213.333334v-170.666667h170.666666v-149.333333z m0 213.333333h-106.666666v106.666667h106.666666v-106.666667z"
                                ></path>
                            </svg>
                            创作
                        </div>
                        <div className="projectList"><a className="projectItem b" target="_blank"
                                                        href="https://blog.zyyo.net">
                            <div className="projectItemLeft">
                                <h1>创造1</h1>
                                <p>创造1</p>
                            </div>
                            <div className="projectItemRight">
                                <img src={i1} alt=""/>
                            </div>

                        </a><a className="projectItem b" target="_blank" href="https://i.zyyo.cc">
                            <div className="projectItemLeft">
                                <h1>创造2</h1>
                                <p>创造2</p>
                            </div>
                            <div className="projectItemRight">
                                <img src={i2} alt=""/>
                            </div>

                        </a>
                            <a className="projectItem b" target="_blank" href="https://zyyo.cc">
                                <div className="projectItemLeft">
                                    <h1>创造3</h1>
                                    <p>创造3</p>
                                </div>
                                <div className="projectItemRight">
                                    <img src={i4} alt=""/>
                                </div>

                            </a>
                            <a className="projectItem b" target="_blank" href="https://zyyo.cc">
                                <div className="projectItemLeft">
                                    <h1>创造4</h1>
                                    <p>创造4</p>
                                </div>
                                <div className="projectItemRight">
                                    <img src={i4} alt=""/>
                                </div>

                            </a>
                            <button className={'buttonUSer'}>更多</button>
                        </div>


                        <div className="titleUser">
                            <svg d="1705257823317" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333zM416.714667 138.666667L270.453333 522.581333h166.869334a32 32 0 0 1 30.933333 40.181334l-61.130667 230.954666 322.176-367.114666H565.312c-22.72 0-38.208-23.018667-29.632-44.064l99.36-243.882667H416.714667z"
                                ></path>
                            </svg>
                            作者
                        </div>
                        <div className="skill">
                            <img id="skillPc" src={skillPc} alt="" srcSet=""/>
                            <img id="skillWap" src={skillWap} alt="" srcSet=""/>
                        </div>
                    {/*</content>*/}
                </div>
            </div>
            {/*<footer>*/}
            {/*    Zyyo © 2024 |*/}
            {/*    <a href="https://beian.miit.gov.cn/">*/}
            {/*        豫ICP备2023015852号-1 </a>*/}
            {/*</footer>*/}
            <div className="tc">
                <div  className="tc-main">
                    <img className="tc-img" src="" alt="" srcSet=""/>
                </div>

            </div>

            <Modal title="QQ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <img className={'imgUser'} src={qq} alt="qq"/>
            </Modal>

            <Modal title="WeChat" open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}>
                <img className={'imgUser'} src={wxmoney} alt="Wechat"/>
            </Modal>
        </div>
    );
}

export default User;
