import React, { Component } from 'react';
import {RightWrap} from './styledCategory'
import cateAnimate from '@/hoc/cateAnimate'
import {withRouter} from 'react-router-dom'
@cateAnimate
@withRouter
class Right extends Component {
    render() {
        return (
            <RightWrap>
                456
            </RightWrap>
        );
    }
}

export default Right;