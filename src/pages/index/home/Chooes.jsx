import React, { Component,Fragment } from 'react';
import { Module, TitleWrap, ChooesWrap } from './styledHome'
import more from 'assets/images/more.png'
import play from 'assets/images/play.png'
import { Flex } from 'antd-mobile';
import {withRouter} from 'react-router-dom'

const PlaceHolder = ({ className = '', restProps }) => {
    // console.log(restProps)
    return (
        <div className={`${className} placeholder`} >
            <div className="gallery-wrap">
                <div className="gallery">
                    <img src={restProps.dishes_image} alt=""/>
                    <i className="ico-play">
                        <img src={play} alt=""/>
                    </i>
                </div>
                <div className="info">
                    <h2 className="ellipsis">{restProps.dishes_name}</h2>
                    <p className="ellipsis">{restProps.desc}</p>
                </div>
            </div>
           
        </div>
    )
  
};
@withRouter
class Chooes extends Component {
    handleClick=()=>{
        this.props.history.push('/course')
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                {
                    this.props.chooes&&(
                        <Module>
                            <TitleWrap>
                                <h2>{this.props.chooes.module_name}</h2>
                                <span onClick={this.handleClick}>更多精选美食 <i className="ico-more"><img src={more} alt="" /></i> </span>
                            </TitleWrap>
                            <ChooesWrap>
                                <Flex>
                                    {
                                        this.props.chooes.module_data.slice(0,3).map((val,index)=>{
                                            return (
                                            <Flex.Item key={val.dishes_id}><PlaceHolder restProps={val} /></Flex.Item>
                                            )
                                        })
                                    }
                                </Flex>
                                <Flex>
                                    {
                                         this.props.chooes.module_data.slice(3,6).map((val,index)=>{
                                            return (
                                            <Flex.Item key={val.dishes_id}><PlaceHolder restProps={val} /></Flex.Item>
                                            )
                                        })
                                    }
                                </Flex>
                            </ChooesWrap>
                        </Module>
                    )
                }
            </Fragment>
        );
    }
}

export default Chooes;