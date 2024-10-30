import React from 'react';
import {pinyin} from 'pinyin-pro';
import './PoemWithPinyin.css';

function PoemWithPinyin({ content, showPinyin }) {

    // // 将诗的内容按换行符或标点符号分成不同的句子
    // const sentences = content.split(/(?<=。|！|？|：|\n)/); // 按标点符号或换行符分割
    const sentences = content.split(/(?<=[。！？：\n])|\n/);




    return (
        <div className={`poem-with-pinyin ${showPinyin ? 'showPinyin' : ''}`}>
            {sentences.map((sentence, sentenceIndex) => (
                <div key={sentenceIndex} className="poem-sentence">
                    {sentence.split('').map((char, index) => (
                        <div
                            key={index}
                            className={`pinyin-hanzi-pair ${/\p{P}/u.test(char) ? 'punctuation' : ''}`}
                        >
                            {/\p{Script=Han}/u.test(char) ? (
                                <>
                                    <div className="pinyin" style={{display: (showPinyin) ? 'block' : 'none'}}>
                                        {pinyin(char, { toneType: 'mark' })}
                                    </div>
                                    <div className="hanzi">{char}</div>
                                </>
                            ) : (
                                <div className="hanzi punctuation">{char}</div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default PoemWithPinyin;
