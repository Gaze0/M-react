import React, { Component } from 'react';
import HeaderNav from '@/HeaderNav/HeaderNav'
import { Grid } from 'antd-mobile';
import { CommunityWrap, MoreWrap } from './styledCommunoty'
import { post } from 'utils/http'
import Loading from '@/Loading/Loading'
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
                methodName: 'ShequList',
                version: 4.1,
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
    addmore = async () => {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'ShequList',
                version: 4.1,
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
                {
                    this.state.List.length>0?(

                <CommunityWrap>
                    <Grid data={this.state.List}
                        columnNum={2}
                        itemStyle={{ height: '2rem' }}
                        renderItem={dataItem => (
                            <div>
                                <img src={dataItem.image} style={{ width: '98%', height: '1.6rem' }} alt="" />
                                <div className="info">
                                    <div className="user-head">
                                        <img src={dataItem.head_img} alt="" />
                                    </div>
                                    <div className="sub-text">
                                        <span className="sub-title" id="sub-title">{dataItem.nick}</span>
                                        <span className="sub-nub" id="sub-nub">{dataItem.create_time}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                   {
                        this.state.total > 0 && (
                            <MoreWrap onClick={this.addmore}>
                                还剩下<span className="num">{this.state.total}</span>个帖子
                        </MoreWrap>
                        )
                    }
                </CommunityWrap>
                    ):(
                        <Loading></Loading>
                    )
                }
            </HeaderNav>
        );
    }
}

export default Layout;