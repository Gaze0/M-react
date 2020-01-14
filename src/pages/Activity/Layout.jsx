import React, { Component } from 'react';
import HeaderNav from '@/HeaderNav/HeaderNav'
import { ActiveWrap, MoreWrap } from './styledActive'
import { post } from 'utils/http'
class Layout extends Component {

    state = {
        List: [],
        page: 1,
        size: 10
    }
    async componentDidMount() {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'ShequActivity',
                version: 4.3,
                page: this.state.page,
                size: this.state.size,
            }
        })
        console.log(result)
        this.setState({
            List: result.data.data,
            page: this.state.page + 1,
            total: result.data.total - this.state.page * this.state.size
        })
    }
    addmore = async () => {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'ShequActivity',
                version: 4.3,
                page: this.state.page,
                size: this.state.size,
            }
        })
        this.setState({
            List: [...this.state.List, ...result.data.data],
            page: this.state.page + 1,
            total: result.data.total - this.state.page * this.state.size
        }, () => {
            console.log(this.state.List)
        })
    }

    render() {
        return (
            <HeaderNav>
                <ActiveWrap>
                    <ul>
                        {
                            this.state.List.map((val) => {
                                return (
                                    <li key={val.id}>
                                        <div className="item-wrap">
                                            <div className="item">
                                                <img src={val.image} alt="" />
                                                <div className="bar">
                                                    <p className="time-title"></p>
                                                    <p className="sub-title">{val.user_count}人参与</p>
                                                </div>
                                            </div>
                                            {
                                                val.end_time_left>0?(
                                                    <div className="tip">进行中</div>
                                                ):(
                                                    <div className="tip tip-end">已结束</div>
                                                )
                                            }
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                        this.state.total > 0 && (
                            <MoreWrap onClick={this.addmore}>
                                还剩下<span className="num">{this.state.total}</span>篇
                        </MoreWrap>
                        )
                    }
                    {/* <MoreWrap>
                        还剩下<span className="num">123</span>篇
                    </MoreWrap> */}
                </ActiveWrap>
            </HeaderNav>
        );
    }
}

export default Layout;