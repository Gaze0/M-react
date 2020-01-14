import React, { Component } from 'react';

import { TitleWrap,Module } from './styledHome'
import more from 'assets/images/more.png'
class Title extends Component {
    render() {
        return (
            <Module>
                <TitleWrap>
                    <h2>今日新品</h2>
                    <span>更多新品 <i className="ico-more"><img src={more} alt=""/></i> </span>
                </TitleWrap>
                {this.props.children}
            </Module>
            
        );
    }
}

export default Title;