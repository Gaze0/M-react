import React, { Component } from 'react'

import { FooterWrap } from './styledTour'
class Footer extends Component {
    render() {
        return (
            <FooterWrap>
                <div className="footer-wrap">
                    <div className="footer-theme">
                        <span className="line-md"></span>
                        <div className="img-code">
                            <ul>
                                <li>
                                    <img src="http://pub.szzhangchu.com/web/v4.2/images/app-down.png" className="i" alt="" />
                                    <p className="style-c">点我下载掌厨APP</p>
                                </li>
                                <li>
                                    <img src="http://pub.szzhangchu.com/web/v4.2/images/code.png" className="i" alt="" />
                                    <p className="style-c">关注掌厨微信号<br />szzhangchu</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-nav-wrap">
                        <div className="footer-nav">
                            <ul>
                                <li onClick={() => { this.props.history.push('/index') }}>首页</li>
                                <li>美食IP</li>
                                <li>健康IP</li>
                                <li onClick={this.backTop}>
                                    回顶部
                            </li>
                            </ul>
                        </div>
                        <p className="footer-tips"><span>掌厨&nbsp;•&nbsp;用心做顿好饭</span></p>
                    </div>
                </div>
            </FooterWrap>
        );
    }
}

export default Footer;