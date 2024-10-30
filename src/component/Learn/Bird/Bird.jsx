import React from 'react';
import './Bird.css'

function Bird(props) {
    return (
        <div className={'bodybird'}>
            <div id="sky">
                <div className="bird">
                    <div className="wind"></div>
                    <div className="wind"></div>
                    <div className="wind"></div>
                    <div className="wind"></div>
                    <div className="wind"></div>
                    <div className="wind"></div>
                    <div className="wind"></div>
                    <div className="wind"></div>
                    <div className="wind"></div>
                    <div className="wind"></div>
                    <div className="bird_body">
                        <div className="bird_head"></div>
                        <div className="bird_wing_left">
                            <div className="bird_wing_left_top"></div>
                        </div>
                        <div className="bird_wing_right">
                            <div className="bird_wing_right_top"></div>
                        </div>
                        <div className="bird_tail_left"></div>
                        <div className="bird_tail_right"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bird;
