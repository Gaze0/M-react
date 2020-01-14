import React, { Component } from 'react';
import {FooterWrap} from './styledHome'
import slogan from 'assets/images/slogan.png'
class Footer extends Component {
    render() {
        return (
            <FooterWrap>
                <img src={slogan} alt=""/>
            </FooterWrap>
        );
    }
}

export default Footer;