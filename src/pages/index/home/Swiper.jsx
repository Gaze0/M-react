// import banner from 'assets/images/banner.png'
import React, { Component } from 'react';

import { SwiperWrap } from './styledHome'
import { Carousel } from 'antd-mobile'
import { connect } from 'react-redux'


const mapState = state => {
    console.log(state)
    return {
        list: state.index.list
    }
}

const mapDispatch = dispatch => ({
    loadData() {
        // console.log(dispatch)
        dispatch({
            type: 'load',
            url: '/locapi/host'
        })
    }
})

class Swiper extends Component {

    state = {
        banner: []
    }
    async componentDidMount() {
        // console.log(this.props.banner.module_data)
        // await this.setState({
        //     banner: this.props.banner.module_data
        // })
        this.props.loadData()
        // console.log(this.props)
    }
    render() {

        console.log(this.props.list)

        return (
            <SwiperWrap>
                {
                    this.props.list.length > 0 ? (
                        <Carousel
                            autoplay={false}
                            infinite
                            slideWidth={1}
                            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            // afterChange={index => {console.log('slide to', index);}}
                            dotActiveStyle={{ background: '#ff7836' }}
                        >
                            {
                                this.props.list.slice(0, 3).map((val) => {
                                    return (
                                        <img key={val.banner_title} src={val.banner_picture} alt="" />
                                    )
                                })
                            }
                        </Carousel>
                    ) : null
                }
            </SwiperWrap>
        );
    }
}

export default connect(mapState, mapDispatch)(Swiper)