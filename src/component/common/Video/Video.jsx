import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import './Video.css';
import tang from '../../data/唐多令.mp4'

function Video() {
    return (
        <div>
                <Plyr
                    source={{
                        type: 'video',
                        sources: [
                            {
                                src: tang,
                                type: 'video/mp4',
                            },
                        ],
                    }}
                />
        </div>
    );
}

export default Video;
