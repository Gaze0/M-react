import React, { Component } from 'react';

import { NavWrap } from './styledTour'

import Swiper from 'swiper/js/swiper.js'
import { lazyload } from 'react-lazyload';
import 'swiper/css/swiper.min.css'
import { connect } from 'react-redux'
import { post } from 'utils/http'

const mapState = (state) => {
    return {
        NavList: state.navList
    }
}

const mapDispatch = (dispatch) => {
    return {
        NavSave() {
            dispatch({
                type: 'Nav',
                url: '/apk',
                data:{
                    methodName: 'TourLogo'
                }
            })
        }
    }
}

@lazyload({
    height: 80,
    once: true,
    offset: 100
})
@connect(mapState, mapDispatch)
class Nav extends Component {
    
    state = {
        NavList: [],
        id: '7',
        type: 2
    }
    async componentDidMount() {
        console.log(this.props)
        this.props.NavSave()
        console.log(this.props.NavList)
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'TourLogo'
            }
        })
        this.setState({
            NavList: result.data.logos
        })
        // console.log(this.state.NavList)
        new Swiper('.swiper-container', {
            slidesPerView: 4.5,
            spaceBetween: 10,
            freeMode: true,
        });
    }

    handleActive = (id, type) => {
        return () => {
            this.setState({
                id,
                type,
            })
            this.props.getId(id, type)
        }
    }

    render() {
        console.log(this.props.NavList,123)
        return (
            <NavWrap width="1px" color="#eee">
                <div className="tour-logo">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.NavList.map((val, index) => (
                                    <div className="swiper-slide" key={val.id} onClick={this.handleActive(val.id, val.type)}>
                                        <img src={val.logo} alt="" />
                                        <span className={this.state.id === val.id ? 'active' : ''}>{val.name}</span>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </NavWrap>
        )

    }
}
export default Nav;


