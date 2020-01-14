import React, { Component, Fragment } from 'react';

import { ProductWrap, Module, TitleWrap } from './styledHome'
import { withRouter } from 'react-router-dom'
import play from 'assets/images/play.png'
import more from 'assets/images/more.png'
@withRouter
class New extends Component {
    handleClick=()=>{
        console.log(this.props.history)
        this.props.history.push('/detail/51')
    }
    render() {
        return (
            <Fragment>
                {
                    this.props.new ? (
                        <Module>
                            <TitleWrap>
                                <h2>{this.props.new.module_name}</h2>
                                <span onClick={this.handleClick}>更多新品 <i className="ico-more"><img src={more} alt="" /></i> </span>
                            </TitleWrap>
                            <ProductWrap>
                                {
                                    this.props.new.module_data.map((val, index) => {
                                        return (
                                            <li key={val.dishes_id}>
                                                <div className="pro-img">
                                                    <img src={val.dishes_image} alt="" />
                                                    <div className="ico-play">
                                                        <img src={play} alt="" />
                                                    </div>
                                                </div>
                                                <div className="info">
                                                    <h2>{val.dishes_name}</h2>
                                                    <p className="ellipsis">{val.dishes_desc}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ProductWrap>
                        </Module>
                    ) : null
                }
            </Fragment>
        );
    }
}

export default New;