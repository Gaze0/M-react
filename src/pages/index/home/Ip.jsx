import React, { Component, Fragment } from 'react';
import { Module, TitleWrap, IpWrap } from './styledHome'
import more from 'assets/images/more.png'
// import backWhite from 'assets/images/back.png'
import { withRouter } from 'react-router-dom'
@withRouter
class Ip extends Component {
    handleClick = () => {
        this.props.history.push('/category')
    }
    render() {
        return (
            <Fragment>
                {
                    this.props.ip && (
                        <Module>
                            <TitleWrap>
                                <h2>{this.props.ip.module_name}</h2>
                                <span onClick={this.handleClick}>更多创意美食 <i className="ico-more"><img src={more} alt="" /></i> </span>
                            </TitleWrap>
                            <IpWrap>
                                <div className="gallery">
                                    <img src={this.props.ip.module_data[0].background} alt="" />
                                </div>
                                <div className="Ip-warp">
                                    <div className="heading">
                                        <h2>诚意美食推荐</h2>
                                        <p>查看更多美食IP
                                        <i className="ico-back-white">
                                                <img src={more} alt="" />
                                            </i>
                                        </p>
                                    </div>
                                    <div className="content">
                                        {
                                            this.props.ip.module_data.slice(0, 3).map((val, index) => (
                                                <li key={val.series_id}>
                                                    <div className="slide-ctn">
                                                        <div className="gallery">
                                                            <img src={val.series_image} alt="" />
                                                        </div>
                                                        <h2 className="ellipsis">{val.series_name}</h2>
                                                        <p className="ellipsis">{val.description}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }


                                    </div>
                                </div>
                            </IpWrap>
                        </Module>
                    )
                }

            </Fragment>
        );
    }
}

export default Ip;