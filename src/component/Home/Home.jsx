import React, {useEffect, useState} from 'react';
import './Home.css'
import './starList.css'
import './default.css'
import logo from './SVG/诗岛探幽.svg'
import user from './SVG/user.svg'
import slogan from './SVG/slogan.svg'
import global from './SVG/global.svg'
import netflix from "./SVG/netflix.svg"
import HBO from "./SVG/HBO.svg"
import hulu from "./SVG/hulu.svg"
import am from "./SVG/am.svg"
import disney from "./SVG/disney.svg"
import SHO from "./SVG/SHO.svg"
import roku from "./SVG/roku.svg"
import p from "./SVG/p.svg"
import one from './SVG/1.svg'
import two from './SVG/2.svg'
import three from './SVG/3.svg'
import libai from "./pic/李白.png";
import four from "./SVG/4.svg";
import five from "./SVG/5.svg";
import six from "./SVG/6.svg";
import seven from "./SVG/7.svg";
import eight from "./SVG/8.svg";
import nine from "./SVG/9.svg";
import ten from "./SVG/10.svg";
import doggo from './SVG/doggo.svg'
import {Carousel, message} from "antd";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Home(props) {
    let index = 0;
    const [topPoems, setTopPoems] = useState([]);
    useEffect(() => {
        axios.get("/api/recommend/getCommonRecommend")
            .then(
                response => {
                    console.log(response.data.data)
                    setTopPoems(response.data.data)
                },
                error => {
                    errorMsg("网络错误")
                }
            )
    }, [])
    const navigate = useNavigate()
    const contentStyle = {
        margin: 0,
        height: '500px',
        color: '#fff',
        lineHeight: '50px',
        // textAlign: 'center',
        // background: '#364d79',
        // background: '#f8b3c2',
        background: '#49766b'
        // backgroundImage: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)'

    };
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
    return (

        <div className='body3'>
            {/*头部 */}
            <div className="header">
                {/* 导航 */}
                <div className="nav">
                    {/*导航左侧悬浮区域 */}
                    <div className="nav_left">
                        <embed src={logo} type="image/svg+xml"/>
                    </div>
                    {/*导航右侧悬浮区域 */}
                    <div className="nav_right">
                        {/*<object className="search" data={search} type="image/svg+xml"></object>*/}
                        <a href={'./userIndex'} target={'_blank'}>
                            <img className="user" src={user} alt={'个人头像'}></img>
                        </a>
                    </div>
                    {/* 中间区域*/}
                    <div className="nav_middle">
                        <a href="#">🥰🥰Explore</a>
                        <a href="#">😍The😍</a>
                        <a href="#">🤩Island</a>
                        <a href="#">Of🤗🤗</a>
                        <a href="#">😎Poetry</a>
                    </div>
                </div>
            </div>

            {/*内容区 */}
            <div className="container">
                {/*第一行大slogan */}
                <div className="title">
                    <embed src={slogan} type="image/svg+xml"/>
                </div>
                {/*第二行文字*/}
                <div className="slogan">
                    <p>诗词平台推荐他们的热门作品。<br/>
                        找到最适合你的诗篇，而不是他们的推荐。</p>
                </div>
                {/*第三行流媒体*/}
                <div className="media_table">
                    <a href="#">
                        <span><embed src={global} type="image/svg+xml"/></span>
                    </a>
                    <a href="#">
                        <span><embed src={netflix} type="image/svg+xml"/></span>
                    </a>
                    <a href="#">
                        <span><embed src={HBO} type="image/svg+xml"/></span>
                    </a>
                    <a href="#">
                        <span><embed src={hulu} type="image/svg+xml"/></span>
                    </a>
                    <a href="#">
                        <span><embed src={am} type="image/svg+xml"/></span>
                    </a>
                    <a href="#">
                        <span><embed src={disney} type="image/svg+xml"/></span>
                    </a>
                    <a href="#">
                        <span><embed src={SHO} type="image/svg+xml"/></span>
                    </a>
                    <a href="#">
                        <span><embed src={roku} type="image/svg+xml"/></span>
                    </a>
                    <a href="#">
                        <span><embed src={p} type="image/svg+xml"/></span>
                    </a>
                </div>
                {/*  第四行两个按钮 */}
                <div className="btn_table">
                  <span>
                    <button onClick={() => navigate('/login')}>登录</button>
                    <button onClick={() => navigate('/learn/recommend')}>开始学习</button>
                  </span>
                </div>
                {/*第五行文本和登录*/}
                <div className="text">
                    <p>未注册账号？</p>
                    <a href="/login">注册</a>
                </div>
            </div>

            {/*介绍区 */}
            <div className="introduce homeBg">
                {/*提供的服务*/}
                <div className="step_table">
                    {/* item */}
                    <div className="step_item">
                        <span>
                          <embed src={one} type="image/svg+xml"/>
                        </span>
                        <p>告诉我们你已经读过的诗篇</p>
                        <p>用我们的引导工具快速建立你的诗词收藏</p>
                    </div>
                    {/* item */}
                    <div className="step_item">
                        <span>
                          <embed src={two} type="image/svg+xml"/>
                        </span>
                        <p>我们为你推荐佳作名篇</p>
                        <p>在你常用的服务中实现个性化诗词推荐</p>
                    </div>
                    {/* item */}
                    <div className="step_item">
                        <span>
                          <embed src={three} type="image/svg+xml"/>
                        </span>
                        <p>欣赏你喜爱的全新诗篇</p>
                        <p>只需一键，我们将为你呈现合适的诗集，随时开始阅读</p>
                    </div>
                </div>
                {/*item下的文本 */}
                <div className="txt">
                    <p>With just one click we’ll tune into the right service and start playing</p>
                </div>
            </div>

            <div className="stats homeBg">
                {/*标题 */}
                <div className="sub_title">See Your Stats</div>
                <p className="tips">We'll analyze all of the poems and profile shows you've seen and generate your
                    stats</p>
                <div className="box">
                    {/*数据统计左侧(明星卡片)*/}
                    <div className="card_list">
                        {/*题目 */}
                        <p>Top Poets</p>
                        {/*  卡片表 */}
                        <div className="card_table">

                            {/*<div className="star_list">*/}
                            <Carousel autoplay={true}>
                                <div>
                                    <h3 style={contentStyle}>
                                        李白
                                        <img src={libai} alt={'李白'}/>
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>2</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>3</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>4</h3>
                                </div>
                            </Carousel>
                            {/*</div>*/}

                            {/*两个按钮 */}
                            <div className="btn_comb">
                                {/*<button>Actors</button>*/}
                                {/*           <button>Directors</button>*/}
                            </div>
                        </div>
                    </div>

                    {/*数据统计右侧(热点) */}
                    <div className="topic">
                        {/* 题目 */}
                        <p>Top Poems</p>
                        {/*热点话题列表*/}
                        <ul>
                            {
                                topPoems.map((poem) => (
                                    <li key={index++}>
                                        <embed src={
                                            index === 0 ? one :
                                            index === 1 ? two :
                                            index === 2 ? three :
                                            index === 3 ? four :
                                            index === 4 ? five :
                                            index === 5 ? six :
                                            index === 6 ? seven :
                                            index === 7 ? eight :
                                            index === 8 ? nine : ten
                                        }
                                               type="image/svg+xml"/>
                                        <p className="topic_item">{poem.poemTitle + '   😍' + poem.poemAuthor}</p>
                                    </li>
                                ))
                            }
                            {/*<li>*/}
                            {/*    <embed src={one} type="image/svg+xml"/>*/}
                            {/*    <p className="topic_item">《将进酒》李白</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <embed src={two} type="image/svg+xml"/>*/}
                            {/*    <p className="topic_item">《水调歌头》苏轼</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <embed src={three} type="image/svg+xml"/>*/}
                            {/*    <p className="topic_item">《沁园春·雪》毛泽东</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <embed src={four} type="image/svg+xml"/>*/}
                            {/*    <p className="topic_item">《长恨歌》白居易</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <embed src={five} type="image/svg+xml"/>*/}
                            {/*    <p className="topic_item">《念奴娇·赤壁怀古》苏轼</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <embed src={six} type="image/svg+xml"/>*/}
                            {/*    <p className="topic_item">《虞美人》李煜</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <embed src={seven} type="image/svg+xml"/>*/}
                            {/*    <p className="topic_item">《天净沙·秋思》马致远</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <embed src={eight} type="image/svg+xml"/>*/}
                            {/*    <p className="topic_item">《春江花月夜》张若虚</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <embed src={nine} type="image/svg+xml"/>*/}
                            {/*    <p className="topic_item">《离骚》屈原</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <embed src={ten} type="image/svg+xml"/>*/}
                            {/*    <p className="topic_item">《蜀道难》李白</p>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>

            </div>

            {/*电影选择区*/}
            <div className="p_box">
                <div className="pick">
                    {/*标题和slogan */}
                    <div>领略千年诗韵，感悟华夏智慧</div>
                    <div>一座诗词宝库，承载着历史与文化的精髓</div>

                    <div className="film_intro">
                        {/*🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄*/}
                        海量古诗词资源
                        {/*🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄*/}
                    </div>
                    <div className="film_intro">
                        {/*🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄*/}
                        精细分类，快速查找
                        {/*🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄*/}
                    </div>
                    <div className="film_intro">
                        {/*😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀*/}
                        专业注解与赏析
                        {/*😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀*/}
                    </div>
                    <div className="film_intro">
                        {/*😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍*/}
                        互动社区，分享感悟
                        {/*😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍*/}
                    </div>
                    <div className="film_intro">
                        {/*🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒*/}
                        随时随地，移动端畅享
                        {/*🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒*/}
                    </div>
                    <div className="film_intro">
                        {/*🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏*/}
                        开启诗意生活，从这里开始
                        {/*🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏*/}
                    </div>


                </div>
            </div>

            {/*底部 */}
            <div className="footer">
                <div className="cell">
                    {/*标题 */}
                    <div>I’M JUST A WEBSITE STANDING IN FRONT OF A PERSON ASKING THEM TO SIGN UP</div>
                    {/*副标题*/}
                    <div>(If you don’t get this reference, you need to sign up so we can introduce you to this 90's
                        classic)
                    </div>
                    {/*钮组 */}
                    <div className="btn_table">
                    <span>
                      <button>注册</button>
                      <button style={{backgroundColor: '#f3f3f6', color: '#0e123d'}}
                              onClick={() => navigate('/learn/poems')}>
                          开始学习
                      </button>
                    </span>
                    </div>
                    {/*copyright*/}
                    <div className="copyright">Powered by The ShuHeng Team ®</div>
                    {/*商标 */}
                    <div className="meta">
                        <p>© 2024</p>
                        <embed src={doggo} type="image/svg+xml"/>
                        <span>|</span>
                        <a href="#" style={{color: '#49766b'}}>舒恒</a>
                        <span>|</span>
                        <a href="#" style={{color: '#49766b'}}>朱思路</a>
                        <span>|</span>
                        <a href="#" style={{color: '#49766b'}}>刘嫩</a>
                        <span>|</span>
                        <a href="#" style={{color: '#49766b'}}>田锦宇</a>
                        <span>|</span>
                        <a href="#" style={{color: '#49766b'}}>郭铮敏</a>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Home;

