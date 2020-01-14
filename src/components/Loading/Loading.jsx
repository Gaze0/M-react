import React, { Component } from 'react';

import {LoadingWrap} from './styledLoading' 
import LoadingImg from 'assets/images/loading.gif'
class Loading extends Component {
    render() {
        return (
            <LoadingWrap>
                <img src={LoadingImg} alt=""/>
            </LoadingWrap>
        );
    }
}

export default Loading;