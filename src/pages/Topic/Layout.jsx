import React, { Component } from 'react';
import HeaderNav from '@/HeaderNav/HeaderNav'
import { TopicWrap, MoreWrap } from './styledTopic'
import { post } from 'utils/http'
import Loading from '@/Loading/Loading'
class Layout extends Component {


    state = {
        List: [],
        page: 1,
        size: 10,
        total: 0
    }
    async componentDidMount() {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'TopicList',
                version: 1.0,
                page: this.state.page,
                size: this.state.size,
            }
        })
        this.setState({
            List: result.data.data,
            page: this.state.page + 1,
            total: result.data.total - this.state.page * this.state.size
        })
    }

    addmore = async() => {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'TopicList',
                version: 1.0,
                page: this.state.page,
                size: this.state.size,
            }
        })
        this.setState({
            List: [...this.state.List,...result.data.data],
            page: this.state.page + 1,
            total: result.data.total - this.state.page * this.state.size
        }, () => {
            console.log(this.state.List)
        })
    }

    render() {
        return (
            <HeaderNav>
                {
                    this.state.List.length > 0 ? (
                        <TopicWrap>
                            <ul>
                                {
                                    this.state.List.map((val) => {
                                        return (
                                            <li className="list" key={val.id}>
                                                <div className="item">
                                                    <img className="li-img" src={val.image} alt="" />
                                                    <span className="title">{val.title}</span>
                                                    <span className="sub-title">{val.description}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            {
                                this.state.total > 0 && (
                                    <MoreWrap onClick={this.addmore}>
                                        还剩下<span className="num">{this.state.total}</span>专题
                                    </MoreWrap>
                                )
                            }
                        </TopicWrap>
                    ) : (<Loading></Loading>)
                }
            </HeaderNav>
        );
    }
}

export default Layout;