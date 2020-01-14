import React, { Component, Fragment } from 'react';

import HeaderNav from '@/HeaderNav/HeaderNav'
import { CourseMain, MoreWrap } from './course/styledCourse'
import { lazyload } from 'react-lazyload';
import { post } from 'utils/http'
import Loading from '@/Loading/Loading'

@lazyload({
    height: 220,
    once: true,
    offset: 100
})
class Layout extends Component<any, any>{

    state: any = {
        List: [],
        page: 1,
        size: 10,
        total: '',
        methodName: 'LohasRecommend',
    }

    async componentDidMount() {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'LohasRecommend',
                // methodName: 'LohasRecolifeCourseSeries/CourseIndexmmend',
                page: this.state.page,
                size: this.state.size,
            }
        })

        console.log(result)
        this.setState({
            List: result.data.data,
            page: this.state.page + 1,
            total: result.data.total - this.state.size
        })
    }


    addmore = (name) => {
        return async () => {
            console.log(name)
            let result;
            if (name === 'LohasRecommend') {
                result = await post({
                    url: '/apk',
                    data: {
                        methodName: name,
                        page: this.state.page,
                        size: this.state.size,
                    }
                })
            } else if (name === 'IpCourseList') {
                result = await post({
                    url: '/apk',
                    data: {
                        methodName: name,
                        page: this.state.page,
                        size: this.state.size,
                        version: 4.4,
                        series_type: 9
                    }
                })
            } else if (name === 'CourseIndex') {
                console.log(this.state.page)
                result = await post({
                    url: '/apk',
                    data: {
                        methodName: name,
                        page: this.state.page,
                        size: this.state.size,
                        version: 4.4,
                    }
                })
            }
            else if (name === 'lifeCourseSeries/CourseIndex') {
                console.log(this.state.page, name)
                result = await post({
                    url: `/api/${name}`,
                    data: {
                        methodName: name,
                        page: this.state.page,
                        size: this.state.size,
                        version: 4.4,
                    }
                })
            }
            console.log(result)
            this.setState((preState) => {
                return {
                    List: [...preState.List, ...result.data.data],
                    page: this.state.page + 1,
                    total: preState.total - this.state.size
                }
            })
            // console.log(this.state.List)
        }
    }


    getName = async (title, name) => {
        // this.setState({
        //     methodName:name,
        // })
        let result;
        if (name === 'LohasRecommend') {
            result = await post({
                url: '/apk',
                data: {
                    methodName: name,
                    page: 1,
                    size: this.state.size,
                }
            })

        }
        else if (name === 'IpCourseList') {
            result = await post({
                url: '/apk',
                data: {
                    methodName: name,
                    page: 1,
                    size: this.state.size,
                    version: 4.4,
                    series_type: 9
                }
            })
        }
        else if (name === 'CourseIndex') {
            result = await post({
                url: '/apk',
                data: {
                    methodName: name,
                    page: 1,
                    size: this.state.size,
                    version: 4.4,
                }
            })
        }
        else if (name === 'lifeCourseSeries/CourseIndex') {
            result = await post({
                url: `/api/${name}`,
                data: {
                    methodName: name,
                    page: '2',
                    size: 100,
                    version: 4.4,
                    user_id: 0,
                    _time: '',
                    _signature: ''
                }
            })
        }

        console.log(result)

        this.setState({
            List: result.data.data,
            page: 2,
            total: result.data.total - this.state.size,
            methodName: name,
        })
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.List.length > 0 ? (
                        <HeaderNav getName={this.getName}>
                            <CourseMain>
                                <div>
                                    <ul>
                                        {
                                            this.state.List.map((val) => {
                                                return (
                                                    <li key={val.series_name}>
                                                        <img src={val.course_image ? val.course_image : val.image} className="li-img" alt="" />
                                                        <div className="detail">
                                                            <span className="title">{val.course_name ? val.course_name : val.series_name} </span>
                                                            <span className="sub-title">更新至{val.episode_sum}集&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上课人数：{val.play}</span>
                                                            <img src={val.series_logo ? val.series_logo : val.album_logo} className="wimg album-logo" alt="" />
                                                            <span className="album">{val.series_name}</span>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {
                                        this.state.total > 0 && (
                                            <MoreWrap onClick={this.addmore(this.state.methodName)}>
                                                还剩下<span className="num">{this.state.total}</span>篇
                                        </MoreWrap>
                                        )
                                    }
                                </div>
                            </CourseMain>
                        </HeaderNav>
                    ) : (
                            <Loading></Loading>
                        )
                }
            </Fragment>
        );
    }
}

export default Layout;