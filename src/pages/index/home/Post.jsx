import React, { Component, Fragment } from 'react';
import more from 'assets/images/more.png'
import { Module, TitleWrap, PostWrap } from './styledHome'
import {withRouter} from 'react-router-dom'
@withRouter
class Post extends Component {

    handleClick=()=>{
        this.props.history.push('/community')
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                {
                    this.props.post && (
                        <Module>
                            <TitleWrap>
                                <h2>{this.props.post.module_name}</h2>
                                <span onClick={this.handleClick}>美食轰趴馆 <i className="ico-more"><img src={more} alt="" /></i> </span>
                            </TitleWrap>
                            <PostWrap>
                                {
                                    this.props.post.module_data.map((val) => (
                                        <figure key={val.id}>
                                            <img src={val.image} alt="" />
                                            <figcaption>
                                                <h2 className="ellipsis">{val.content}</h2>
                                                <div className="user">
                                                    <div className="head">
                                                        <img src={val.head_img} alt="" />
                                                    </div>
                                                    <span className="ellipsis">{val.nick}</span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    ))
                                }
                            </PostWrap>
                        </Module>
                    )
                }
            </Fragment>
        );
    }
}

export default Post;