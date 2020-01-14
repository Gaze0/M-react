import React, { Component, Fragment } from 'react';
import more from 'assets/images/more.png'
import { Module, TitleWrap, TopicWrap } from './styledHome'

import Swiper from 'swiper/js/swiper.js'
import {withRouter} from 'react-router-dom'
import 'swiper/css/swiper.min.css'

@withRouter
class Topic extends Component {


    componentDidMount() {
        new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    handleClick=()=>{
        this.props.history.push('/topic')
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                {
                    this.props.topic && (
                        <Module style={{ paddingRight: 0 }}>
                            <TitleWrap style={{ paddingRight: '.1rem' }}>
                                <h2>{this.props.topic.module_name}</h2>
                                <span onClick={this.handleClick}>更多专题 <i className="ico-more"><img src={more} alt="" /></i> </span>
                            </TitleWrap>
                            <TopicWrap>
                                <div className="swiper-container wrap">
                                    <div className="swiper-wrapper">
                                        {
                                            this.props.topic.module_data.map((val) => (
                                                <div className="swiper-slide slide-img" key={val.topic_id} >
                                                    <img src={val.topic_picture} alt="" />
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            </TopicWrap>
                        </Module>

                    )
                }

            </Fragment>
        );
    }
}

export default Topic;