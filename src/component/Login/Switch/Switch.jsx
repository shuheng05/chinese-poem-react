import React from 'react';
import "./Switch.css"


function Switch(props) {
    const {flag, setFlag} = props;
    return (
        <div>
            <div className={flag ? "switch" : "switch is-txr"} id="switch-cnt">
                <div className={flag ? "switch__circle" : "switch__circle is-txr"}></div>
                <div className={flag ? "switch__circle switch__circle--t" : "switch__circle switch__circle--t is-txr"}></div>
                <div className={flag ? "switch__container" : "switch__container is-hidden"} id="switch-c1">
                    <h2 className="switch__title titleSwitch">Welcome Back !</h2>
                    <p className="switch__description descriptionSwitch">To keep connected with us please login with your
                        personal info</p>
                    <button className="switch__button button switch-btn" onClick={() => {setFlag(!flag)}}>SIGN IN</button>
                </div>
                <div className={flag ? "switch__container is-hidden" : "switch__container"} id="switch-c2">
                    <h2 className="switch__title titleSwitch">Hello Friend !</h2>
                    <p className="switch__description descriptionSwitch">Enter your personal details and start journey with
                        us</p>
                    <button className="switch__button button switch-btn" onClick={() => {setFlag(!flag)}}>SIGN UP</button>
                </div>
            </div>
        </div>
    );
}

export default Switch;
