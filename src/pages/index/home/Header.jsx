import React, { Component } from 'react';

import { HeaderWrap } from './styledHome'
import icoSearch from 'assets/images/ico-search.png'
import logo from 'assets/images/logo-white.png'
import login from 'assets/images/login-white.png'
import {withRouter} from 'react-router-dom'

@withRouter
class Header extends Component {
    handleClick=()=>{
        this.props.history.push('/search')
    }
    render() {
        return (
            <HeaderWrap>
                <div className="top-left">
                    <img src={logo} alt="" />
                </div>
                <div className="top-search" onClick={this.handleClick}>
                    <span className="search-btn">
                        <i className="ico ico-search">
                            <img src={icoSearch} alt=""/>    
                        </i>请输入菜名或者食材搜索
                    </span>
                </div>
                <div className="top-right">
                    <img src={login} alt=""/>
                </div>
            </HeaderWrap>
        );
    }
}

export default Header;