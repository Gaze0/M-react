import React, { Component,Fragment } from 'react';

import Header from './home/Header'
import Swiper from './home/Swiper'
import {EntryWrap, Main as HomeMain } from './home/styledHome'
import EntryTop from './home/EntryTop'
import Entry from './home/Entry'
import New from './home/New'
import Scene from './home/Scene'
import Ip from './home/Ip'
import Chooes from './home/Chooes'
import Topic from './home/Topic'
import Post from './home/Post'
import Footer from './home/Footer'
import CopyRight from './home/CopyRight'
import { get } from 'utils/http'
import { withRouter } from 'react-router-dom'
import Loading from '@/Loading/Loading'

// import SearchBar from '@/searchTop/SearchBar'
class Layout extends Component {

    state={
        result:[],
        isFinish:false
    }
    async componentDidMount(){
        let result = await get({
            url:'/locapi/host'
        })
        console.log(result)
        this.setState({
            result:result.module_list,
        })
        // let aaa = await post({
        //     url:'/apk',
        //     data:{methodName: 'TourLogo'}
        // })
        // console.log(aaa)
    }

    render() {
        // console.log(this.state.result.length)
        return (
           <Fragment>
                {
                    this.state.result.length>0?(
                        <HomeMain>
                            <Header></Header>
                            <Swiper banner={this.state.result[0]}></Swiper>
                            <EntryWrap>
                                <EntryTop></EntryTop>
                                <Entry entry={this.state.result[1]}></Entry>
                            </EntryWrap>
                            <New new={this.state.result[2]}></New>
                            <Scene scene={this.state.result[3]}></Scene>
                            <Ip ip={this.state.result[4]}></Ip>
                            <Chooes chooes={this.state.result[5]}></Chooes>
                            <Topic topic={this.state.result[6]}></Topic>
                            <Post post={this.state.result[8]}></Post>
                            <Footer></Footer>
                            <CopyRight></CopyRight>
                        </HomeMain>      
                    ):(
                        <Loading></Loading>
                    )
                }
           </Fragment>
        );
    }
}

export default withRouter(Layout);