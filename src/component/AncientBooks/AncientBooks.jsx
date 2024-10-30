import React from 'react';
import './AncientBooks.css'
import lunyu from '../data/论语.jpg';
import shijing from '../data/诗经.jpg';
import zhongyong from '../data/中庸.jpg';
import shiji from '../data/史记.jpg';
import shanghaijing from '../data/山海经.jpg';
import simafa from '../data/司马法.jpg';
import sunzibinfa from '../data/孙子兵法.jpg';
import zhanguoce from '../data/战国策.jpg';
import shuihuzhuang from '../data/水浒传.jpg';
import huinanzi from '../data/淮南子.jpg';
import zizhitongjian from '../data/资治通鉴.jpg';
import caikengtan from '../data/菜根谭.jpg';

function AncientBooks(props) {
    return (
        <div className='body2 near-left'>
            <ul className="polaroids">
                <li>
                    <a href="#" title="论语">
                        <img src={lunyu} alt="图片加载失败..."/>
                    </a>
                </li>
                <li>
                    <a href="#" title="诗经">
                    <img src={shijing} alt="图片加载失败..."/>
                    </a>
                </li>
                <li><a href="#" title="中庸"><img src={zhongyong} alt="图片加载失败..."/></a></li>
                <li><a href="#" title="史记"><img src={shiji} alt="图片加载失败..."/></a></li>
                <li><a href="#" title="山海经"><img src={shanghaijing} alt="图片加载失败..."/></a></li>
                <li><a href="#" title="司马法"><img src={simafa} alt="图片加载失败..."/></a></li>
                <li><a href="#" title="孙子兵法"><img src={sunzibinfa} alt="图片加载失败..."/></a></li>
                <li><a href="#" title="战国策"><img src={zhanguoce} alt="图片加载失败..."/></a></li>
                <li><a href="#" title="水浒传"><img src={shuihuzhuang} alt="图片加载失败..."/></a></li>
                <li><a href="#" title="淮南子 "><img src={huinanzi} alt="图片加载失败..."/></a></li>
                <li><a href="#" title="资治通鉴 "><img src={zizhitongjian} alt="图片加载失败..."/></a></li>
                <li><a href="#" title="菜根谭"><img src={caikengtan} alt="图片加载失败..."/></a></li>
            </ul>
        </div>
    );
}

export default AncientBooks;
