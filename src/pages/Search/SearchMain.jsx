import React, { Component, Fragment } from 'react';
import { SearchMainWrap } from './styledSearch'
import { post } from 'utils/http'
import { connect } from 'react-redux'
const mapState = (state) => {
    return {
        searchList: state.searchList.searchList,
        val: state.searchList.val,
        isfocus: state.searchList.isfocus,
    }
}

@connect(mapState)
class SearchMain extends Component {

    constructor(props) {
        super()
        this.state = {
            hotList: [],
            hisList: [],
            historyList: [...props.historyList]
        }
    }

    shouldComponentUpdate(props, state) {
        if (props.historyList === state.historyList) {
            return false
        } else {
            state.historyList = [...props.historyList]
            return true
        }
    }

    async componentDidMount() {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'SearchHot',
                size: 10
            }
        })
        this.setState({
            hotList: result.data.data
        })
    }
    SearchClick = (id) => {
        return () => {
            console.log(id)
        }
    }

    render() {
        console.log(this.state.historyList)
        return (
            <SearchMainWrap>
                {
                    this.props.val ? (
                        this.props.isFocus ? (
                            this.props.searchList.length > 0 ? (
                                <div className="search-keyword">
                                    <ul>
                                        {
                                            this.props.searchList.map((val) => {
                                                return (<li key={val.id}>{val.text}</li>)
                                            })
                                        }
                                    </ul>
                                </div>
                            ) : (
                                    <div className="search-keyword">
                                        <ul>
                                            <li>没有更多关联<span>{this.props.val}</span>的菜，请直接搜索！</li>
                                        </ul>
                                    </div>
                                )
                        ) : (
                                this.state.hotList.length > 0 ? (
                                    <Fragment>
                                        <div className="hot">
                                            <h6>热门搜索</h6>
                                            <div className="list">
                                                <ul>
                                                    {
                                                        this.state.hotList.map((val) => {
                                                            return (
                                                                <li key={val.id} id={val.id} onClick={this.SearchClick(val.id)}>{val.text}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="hot">
                                            <h6>历史搜索</h6>
                                            <div className="list">
                                                <ul>
                                                    {
                                                        this.state.historyList.length > 0 ? (
                                                            this.state.historyList.map((val) => {
                                                                return (
                                                                    <li key={val} className="history-search">{val}</li>
                                                                )
                                                            })
                                                        ) : (
                                                                <div className="loading-wrap">暂无搜索历史</div>
                                                            )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </Fragment>
                                ) : null
                            )
                    ) : (
                            this.state.hotList.length > 0 ? (
                                <Fragment>
                                    <div className="hot">
                                        <h6>热门搜索</h6>
                                        <div className="list">
                                            <ul>
                                                {
                                                    this.state.hotList.map((val) => {
                                                        return (
                                                            <li key={val.id} id={val.id} onClick={this.SearchClick(val.id)}>{val.text}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="hot">
                                        <h6>历史搜索</h6>
                                        <div className="list">
                                            <ul>
                                                {
                                                    this.state.historyList.length > 0 ? (
                                                        this.state.historyList.map((val) => {
                                                            return (
                                                                <li key={val} className="history-search">{val}</li>
                                                            )
                                                        })
                                                    ) : (
                                                            <div className="loading-wrap">暂无搜索历史</div>
                                                        )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </Fragment>
                            ) : null
                        )
                }
            </SearchMainWrap>
        );
    }
}

export default SearchMain;