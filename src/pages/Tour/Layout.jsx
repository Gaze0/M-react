import React, { Component, Fragment } from 'react';

import HeaderNav from '@/HeaderNav/HeaderNav'
import { MainBody } from './tour/styledTour'
import Nav from './tour/Nav'
import Content from './tour/Content'
import { connect } from 'react-redux'
@connect((state) => {
    console.log(state)
    return {
        NavList: state.navList.NavList
    }
})
class Layout extends Component<any, any>{

    state = {
        id: 7,
        type: 2
    }

    getId = (id, type) => {
        this.setState({
            id,
            type,
        })
    }

    render() {
        console.log(this.props)
        return (
            <Fragment>
                {/* {
                    this.props.NavList.length > 0 ? ( */}
                        <HeaderNav>
                            <MainBody>
                                <Nav getId={this.getId}></Nav>
                                <Content id={this.state.id} type={this.state.type}></Content>
                            </MainBody>
                        </HeaderNav>
                    {/* ):null
                } */}
            </Fragment>
        );
    }
}

export default Layout;