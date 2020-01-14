import React, { Component, Fragment } from 'react';
import SearchTop from '@/searchTop/SearchBar'
import SearchMain from './SearchMain'
class Layout extends Component {

    state = {
        isfocus:false,
        historyList:[]
    }

    getIsFocus=(isfocus)=>{
        this.setState({
            isfocus
        })
    }
    getHistory= (val)=>{
        if(val!==''){
            this.setState((prev)=>{
                if(!prev.historyList.includes(val)){
                    return {
                        historyList:[...prev.historyList,val]
                    }
                }else {
                    return {
                        historyList:[...prev.historyList]
                    }
                }
            })
        }

    }
    render() {
        return (
            <Fragment>
                <SearchTop  
                getHistory={this.getHistory}
                getIsFocus={this.getIsFocus} 
                title='请输入菜名或者食材搜索'> </SearchTop>
                <SearchMain 
                historyList={this.state.historyList}
                isFocus={this.state.isfocus}></SearchMain>
            </Fragment>
        );
    }
}

export default Layout;