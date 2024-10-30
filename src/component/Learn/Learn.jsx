import React, {useState} from 'react';
import {Input} from "antd";
import './Learn.css'
import {Navigate, NavLink, Outlet, Route, Routes} from "react-router-dom";
import Poems from "../Poems/Poems.jsx";
import FamousSentences from "../FamousSentences/FamousSentences.jsx";
import Authors from "../Authors/Authors.jsx";
import AncientBooks from "../AncientBooks/AncientBooks.jsx";
import Bird from "./Bird/Bird.jsx";
import Recommend from "../Recommend/Recommend.jsx";

function Learn(props) {
    const {Search} = Input;
    const [content, setContent] = useState('');
    const onSearch = (value, _e, info) => {
        setContent(value)
    }


    return (
        // className={'bg'}
        <div >
            <div className='left' >
                <Bird/>
            </div>
            <div className='tab-container'>
                <NavLink to='/learn/recommend' className='tab'>推荐</NavLink>
                <NavLink to='/learn/poems' className='tab'>诗文</NavLink>
                <NavLink to='/learn/famousSentences' className='tab'>名句</NavLink>
                <NavLink to='/learn/authors' className='tab'>作者</NavLink>
                <NavLink to='/learn/ancientBooks' className='tab'>古籍</NavLink>
            </div>
            <div className='right' >
                {/*<img src={leftpng} alt="lunyu" width={'100%'} height={'100%'}/>*/}
            </div>
            {/*<Search onSearch={onSearch} enterButton style={{width: 304, position: 'fixed',}} className='near-right'/>*/}
            <div>
                <Routes>
                    <Route path="recommend" element={<Recommend />} />
                    <Route path="poems" element={<Poems />} />
                    <Route path="famousSentences" element={<FamousSentences />} />
                    <Route path="authors" element={<Authors />} />
                    <Route path="ancientBooks" element={<AncientBooks />} />
                    <Route path="" element={<Navigate to="/learn/recommend" />} />
                </Routes>
                <Outlet/>
            </div>
        </div>

    );
}

export default Learn;
