import React, {useState} from 'react';
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Switch from "./Switch/Switch";
import "./Start.css"
import {useParams} from "react-router-dom";

function Start() {
    const [flag, setFlag] = useState(true);
    return (
        <div className="start-body">
            <div className="main">
                <Signup flag={flag}/>
                <Signin flag={flag}/>
                <Switch flag={flag} setFlag={setFlag}/>
            </div>
        </div>

    );
}

export default Start;
