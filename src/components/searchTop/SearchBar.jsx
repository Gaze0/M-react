import React, { Component } from 'react';
import icoSearch from 'assets/images/ico-search.png'
import back from 'assets/images/back-black.png'
import { SearchWrap, InputWrap } from './styledSearch'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
// import {post} from 'utils/http'
// import _ from 'loadsh'
const mapState = (state)=>{
    // console.log(state)
    return {
        List:state.searchList
    }
}
const mapDispatch=(dispatch)=>{
    return {
        search(val,isfocus){
            dispatch({
                type:"search",
                url:'/apk',
                data:{
                    methodName: 'SearchKeyword',
                    keyword: val,
                },
                val,
                isfocus,
            })
        }
    }
}
@withRouter
@connect(mapState,mapDispatch)
class SearchBar extends Component {
    state = {
        val: '',
        data:[],
        isfocus:false
    }
    back = () => {
        this.props.history.goBack();
    }
    // handleChange = ()=>{
        
    // }
    handleChange = (e) => {
        this.setState({
            val: e.target.value
        },()=>{
            this.props.search(this.state.val,this.state.isfocus);
        })
    }

    inputOnFocus = ()=>{

        this.setState({
            isfocus:true
        },()=>{
            this.props.getIsFocus(this.state.isfocus)
        })
    }

    inputBlur=()=>{
        this.setState({
            isfocus:false
        },()=>{
            this.props.getIsFocus(this.state.isfocus)
        })
    }

    handleSearchBtn = ()=>{
        this.props.getHistory(this.state.val)
    }

    render() {
        return (
            <SearchWrap>
                <div className="left" onClick={this.back}>
                    <i className="ico-back">
                        <img src={back} alt="" />
                    </i>
                </div>
                <InputWrap>
                    <i className="ico-search">
                        <img src={icoSearch} alt="" />
                    </i>
                    <input type="text"
                        placeholder={this.props.title}
                        value={this.state.val}
                        onChange={this.handleChange}
                        onFocus={this.inputOnFocus}
                        onBlur={this.inputBlur}
                    />
                </InputWrap>
                <div className="right-btn" onClick={this.handleSearchBtn}>
                    搜索
                </div>
            </SearchWrap>
        );
    }
}

export default SearchBar;