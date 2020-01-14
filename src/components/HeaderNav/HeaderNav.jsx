
import React, { Component } from 'react';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import { HeaderNavWrap } from './styledHeader'
import menuRed from 'assets/images/menu-red.png'
import menu from 'assets/images/menu.png'
import { withRouter, Link } from 'react-router-dom'
import CategoryNav from 'pages/Category/category/CategoryNav'
@withRouter
class HeaderNav extends Component<any, any>{

    state = {
        open: false,
        data: [
            { "title": "首页", "thumb": "http://pub.szzhangchu.com/web/v4.2/images/ico/recommend.png", "to": "/index" },
            { "title": "专题", "thumb": "http://pub.szzhangchu.com/web/v4.2/images/ico/topic-icon.png", "to": "/topic" },
            { "title": "乐活", "thumb": "http://pub.szzhangchu.com/web/v4.2/images/ico/course.png", "to": "/course" },
            { "title": "万道佳肴", "thumb": "http://pub.szzhangchu.com/web/v4.2/images/ico/category.png", "to": "/category" },
            { "title": "场景", "thumb": "http://pub.szzhangchu.com/web/v4.2/images/ico/scene-icon.png", "to": "/scene" },
            { "title": "社区", "thumb": "http://pub.szzhangchu.com/web/v4.2/images/ico/community.png", "to": "/community" },
            { "title": "活动", "thumb": "http://pub.szzhangchu.com/web/v4.2/images/ico/activity-icon.png", "to": "/activity" },
            { "title": "新手入门", "thumb": "http://pub.szzhangchu.com/web/v4.2/images/ico/tour-icon.png", "to": "/tour" }],
        methodName: [
            { name: 'LohasRecommend', title: '推荐' },
            { name: 'CourseIndex', title: '美食IP' },
            { name: 'lifeCourseSeries/CourseIndex', title: '健康IP' },
            { name: 'IpCourseList', title: '亲子IP' }
        ],
        nowTitle: '推荐',
        nowName: 'LohasRecommend'
    }

    onDock = (d) => {
        this.setState({
            open: !this.state.open
        });
    }

    // onOpenChange = (...args) => {
    //     console.log(args);
    //     this.setState({ open: !this.state.open });
    //   }
    changeNav = (title, name) => {
        return () => {
            this.setState({
                nowTitle: title,
                nowName: name
            })
            this.props.getName(title, name)
        }
    }

    render() {
        console.log(this.props)
        const sidebar = (
            <List style={{ width: '1.88rem' }}>
                {this.state.data.map((i, index) => {
                    return (
                        <Link key={index} to={i.to}>
                            <List.Item
                                thumb={i.thumb}
                                style={{ height: '.69rem', marginLeft: '.2rem', fontSize: '.14rem', color: '#a4a4a4' }}
                            >{i.title}</List.Item>
                        </Link>
                    );
                })}

            </List>
        );
        return (
            <HeaderNavWrap>
                {
                    this.props.match.url === '/course' ? (
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" style={{ color: '#666' }} onClick={this.props.history.goBack} />}
                            rightContent={[
                                <Icon key="0" type="search" style={{ marginRight: '20px', color: '#666' }} />,
                                <div key="1" className="Top" onClick={() => this.onDock('true')}>
                                    <img className="head-img" src={menu} alt="" />
                                </div>
                            ]}
                        >
                            <ul className="head-ul">
                                {
                                    this.state.methodName.map((val) => {
                                        return (
                                            <li
                                                key={val.title}
                                                onClick={this.changeNav(val.title, val.name)}
                                                className={val.title === this.state.nowTitle ? "active head-li" : 'head-li'}>{val.title}</li>
                                        )
                                    })
                                }
                            </ul>
                        </NavBar>
                    ) : null
                }
                {
                    this.props.match.url === '/tour' ? (
                        <NavBar
                            mode="light"
                            rightContent={[
                                <div key="1" className="Top" onClick={() => this.onDock('true')}>
                                    <img src={menuRed} alt="" />
                                </div>
                            ]}
                        >
                        </NavBar>
                    ) : null
                }
                {
                    new RegExp('^\/tourdetail','g').test(this.props.match.url) ? (
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" style={{ color: '#666' }} onClick={this.props.history.goBack} />}
                            rightContent={[
                                <div key="1" className="Top" onClick={() => this.onDock('true')}>
                                    <img src={menuRed} alt="" />
                                </div>
                            ]}
                        >
                            <div className="title">{this.props.tourDetailTitle}</div>
                        </NavBar>
                    ) : null
                }
                {
                    new RegExp('^\/detail','g').test(this.props.match.url) ? (
                        <NavBar
                            mode="light"
                            leftContent={[
                                <ul key="2">
                                    <li>123</li>
                                </ul>
                            ]}
                            rightContent={[
                                <div key="1" className="Top" onClick={() => this.onDock('true')}>
                                    <img src={menuRed} alt="" />
                                </div>
                            ]}
                        >
                        </NavBar>
                    ) : null
                }
                {

                    this.props.match.url === '/scene' ? (
                        <NavBar
                            mode="light"
                            rightContent={[
                                <div key="1" className="Top" onClick={() => this.onDock('true')}>
                                    <img src={menuRed} alt="" />
                                </div>
                            ]}
                        >
                        </NavBar>
                    ) : null
                }
                {
                    new RegExp('^\/category+','g').test(this.props.match.url) ? (
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" style={{ color: '#666' }} onClick={this.props.history.goBack} />}
                            rightContent={[
                                <div key="1" className="Top" onClick={() => this.onDock('true')}>
                                    <img src={menuRed} alt="" />
                                </div>
                            ]}
                        >
                            <CategoryNav></CategoryNav>

                        </NavBar>
                    ) : null
                }
                {

                    this.props.match.url === '/topic' ? (
                        <NavBar
                            mode="light"
                            rightContent={[
                                <div key="1" className="Top" onClick={() => this.onDock('true')}>
                                    <img src={menuRed} alt="" />
                                </div>
                            ]}
                        >
                        </NavBar>
                    ) : null
                }
                {
                    this.props.match.url === '/activity' ? (
                        <NavBar
                            mode="light"
                            rightContent={[
                                <div key="1" className="Top" onClick={() => this.onDock('true')}>
                                    <img src={menuRed} alt="" />
                                </div>
                            ]}
                        >
                        </NavBar>
                    ) : null
                }
                {
                    this.props.match.url === '/community' ? (
                        <NavBar
                            mode="light"
                            rightContent={[
                                <div key="1" className="Top" onClick={() => this.onDock('true')}>
                                    <img src={menuRed} alt="" />
                                </div>
                            ]}
                        >
                        </NavBar>
                    ) : null
                }
                {
                    new RegExp('^\/tourplay+','g').test(this.props.match.url) ? (
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" style={{ color: '#666' }} onClick={this.props.history.goBack} />}
                            rightContent={[
                                <div key="1" className="Top" onClick={() => this.onDock('true')}>
                                    <img src={menuRed} alt="" />
                                </div>
                            ]}
                        >
                            {this.props.tourPlayTitle}
                        </NavBar>
                    ) : null
                }
                <Drawer
                    className="my-drawer"
                    // style={{ minHeight: document.documentElement.clientHeight }}
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebarStyle={{ border: '1px solid #ddd' }}

                    open={this.state.open}
                    sidebar={sidebar}
                    // docked={this.state.open}
                    onOpenChange={() => this.onDock('false')}
                >
                    {this.props.children}
                </Drawer>
            </HeaderNavWrap>

        );


    }
}

export default HeaderNav;