import React, { Component } from 'react';

import { EntryTopWrap } from './styledHome'

import wandao1 from 'assets/images/wandao1.png'
import wandao2 from 'assets/images/wandao2.png'
import {withRouter} from 'react-router-dom'
@withRouter
class EntryTop extends Component {
    leftClick=()=>{
        this.props.history.push('/category')
    }
    rightClick=()=>{
        this.props.history.push('/course')
    }
    render() {
        return (
            <EntryTopWrap>
                <div className="left" onClick={this.leftClick}>
                    <div className="ctn">
                        <h2>2万道</h2>
                        <p>原创美食教学视频</p>
                    </div>
                    <img src={wandao1} alt="" />
                </div>
                <div className="right" onClick={this.rightClick}>
                    <div className="ctn">
                        <h2>1万道</h2>
                        <p>精美优质IP视频</p>
                    </div>
                    <img src={wandao2} alt=""/>
                </div>
                
            </EntryTopWrap>
        );
    }
}

export default EntryTop;