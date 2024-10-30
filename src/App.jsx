import {Route, Routes} from "react-router-dom";
import React from "react";
import Learn from "./component/Learn/Learn.jsx";
import './App.css'
import GridAnimation from "./component/GridAnimation/GridAnimation.jsx";
import Home from "./component/Home/Home.jsx";
import Start from "./component/Login/Start.jsx";
import User from "./component/User/User.jsx";


function App() {


    return (

        // className='header'
        <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        {/*<Route path="/Learn" element={<Learn />} />*/}
                        <Route path="/gridAnimation" element={<GridAnimation/>}/>
                        {/* 嵌套路由，所有以 /head 开头的路由都会匹配到 Learn 组件 */}
                        <Route path="/learn/*" element={<Learn/>}/>
                        <Route path="/login" element={<Start/>}/>
                        <Route path="/userIndex" element={<User/>}/>
                    </Routes>

        </div>

    );
}

export default App;
