import React, { Component, Fragment } from 'react';

import { ContentWrap, MoreWrap } from './styledTour'
import { lazyload } from 'react-lazyload';
import { post } from '../../../utils/http';
import { withRouter } from 'react-router-dom'
import play from 'assets/images/play.png'
@lazyload({
    height: 200,
    once: true,
    offset: 100
})
@withRouter
class Content extends Component {

    state = {
        List: [],
        size: 10,
        page: 1,
        total: 0,
        catid: 7,
        type: 2
    }
    async shouldComponentUpdate(props, state) {
        if (props.id !== state.catid) {
            // console.log(123)
            // this.setState({
            //     page:1
            // })
            let result = await post({
                url: '/apk',
                data: {
                    methodName: 'TourIndex',
                    page: 1,
                    size: this.state.size,
                    type: props.type,
                    catid: props.id,
                }
            })
            this.setState({
                List: result.data.data,
                page: 2,
                total: result.data.total - this.state.size,
                type: props.type,
                catid: props.id
            })
            return true
        } else {
            return false
        }
    }
    async componentDidMount() {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'TourIndex',
                page: this.state.page,
                size: this.state.size,
                type: this.state.type,
                catid: this.state.catid,
            }
        })
        this.setState({
            List: result.data.data,
            page: this.state.page + 1,
            total: result.data.total - this.state.size
        })
    }

    addmore = async () => {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'TourIndex',
                page: this.state.page,
                size: this.state.size,
                type: this.state.type,
                catid: this.state.catid,
            }
        })
        this.setState((preState) => {
            return {
                List: [...preState.List, ...result.data.data],
                page: this.state.page + 1,
                total: preState.total - this.state.size
            }
        })
        console.log(this.state.List)
    }
    handleDetail = (id,video,title) => {
        return () => {
            if(video===""){
                this.props.history.push({pathname:`/tourdetail/${id}`})
            }else{
                this.props.history.push({pathname:`/tourplay/${id}`,state:{title}})
                // this.props.history.push(`/tourplay/${id}`)
            }
        }
    }

    render() {
        console.log(this.state.List.video)
        return (
            <Fragment>
                {
                    this.state.List.length > 0 ? (
                        <ContentWrap>
                            <div className="ul-wrap">
                                <ul>
                                    {
                                        this.state.List.map((val) => (
                                            <li key={val.id} onClick={this.handleDetail(val.id,val.video,val.title)}>
                                                <div className="img-wrap">
                                                    <img src={val.image} alt="" />
                                                    {
                                                        val.video === "" ? null : (
                                                            <i className="ico ico-play">
                                                                <img src={play} alt="" />
                                                            </i>
                                                        )
                                                    }
                                                </div>
                                                <div className="detail-wrap">
                                                    <div className="clearfix">
                                                        <h2>{val.title}</h2>
                                                        <p className="nub">浏览量：{val.views}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }

                                </ul>
                                {
                                    this.state.total > 0 && (
                                        <MoreWrap onClick={this.addmore}>
                                            还剩下<span className="num">{this.state.total}</span>篇
                                        </MoreWrap>
                                    )
                                }
                            </div>
                        </ContentWrap>
                    ) : null
                }
            </Fragment>
        );
    }
}

// export default React.memo(Content);
export default Content;