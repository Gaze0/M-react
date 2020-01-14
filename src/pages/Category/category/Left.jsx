import React, { Component } from 'react';

import {LeftWrap} from './styledCategory'
import cateAnimate from '@/hoc/cateAnimate'
@cateAnimate
class Left extends Component {
    render() {
        return (
            <LeftWrap >
                <div style={{width:'100%',background:'red',height:'100px'}}></div>
            </LeftWrap>
        );
    }
}

export default Left;