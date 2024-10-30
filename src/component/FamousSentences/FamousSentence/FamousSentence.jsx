import React, {useState} from 'react';
import {Button, Drawer, Space} from "antd";
import {EyeOutlined, PlayCircleOutlined} from "@ant-design/icons";
import './FamousSentence.css'


function FamousSentence({famousSentence}) {

    const [showLangdu, setShowLangdu] = useState(false);
    const [showShiyi, setShowShiyi] = useState(false);
    const handleSpeech = () => {
        const speech = new SpeechSynthesisUtterance(famousSentence.content);
        speech.lang = 'zh-CN';
        window.speechSynthesis.speak(speech);
    };
    const handlePauseResume = () => {
        if (window.speechSynthesis.speaking) {
            if (showLangdu) {
                window.speechSynthesis.resume(); // 恢复朗读
                setShowLangdu(false);
            } else {
                window.speechSynthesis.pause(); // 暂停朗读
                setShowLangdu(true);
            }
        }
    };
    const showDrawer = () => {
        setShowShiyi(true);
    };
    const onClose = () => {
        setShowShiyi(false);
    };
    return (
        <div>
            <h3 style={{fontFamily: 'Times,serif'}}>
            {famousSentence.content} —— {famousSentence.author} 《{famousSentence.title}》
            </h3>
            <div className='ButtonGroupContainer'>
                <Button.Group>
                    <Button type="text" icon={<PlayCircleOutlined />} onClick={handleSpeech}>开始朗读</Button>
                    <Button type="text" icon={<PlayCircleOutlined />} onClick={handlePauseResume}>{showLangdu ? '继续' : '暂停'}</Button>
                </Button.Group>
                <Button type="text" icon={<EyeOutlined />} onClick={showDrawer}>查看释义</Button>
            </div>


            <Drawer
                title={famousSentence.title + '-' + famousSentence.author}
                placement={'bottom'}
                width={500}
                onClose={onClose}
                open={showShiyi}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <p>{famousSentence.translation}</p>
            </Drawer>

        </div>
    );
}

export default FamousSentence;
