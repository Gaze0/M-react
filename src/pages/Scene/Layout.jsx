import React, { Component,Fragment } from 'react';
import HeaderNav from '@/HeaderNav/HeaderNav'
import { lazyload } from 'react-lazyload';
import SceneMain from './scene/SceneMain'
import {withRouter} from 'react-router-dom'

@lazyload({
    height: 220,
    once: true,
    offset: 100
})
@withRouter
class Layout extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <HeaderNav>
                    <SceneMain></SceneMain>
                </HeaderNav>
            </Fragment>
        );
    }
}

export default Layout;