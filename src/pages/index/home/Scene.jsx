import React, { Component, Fragment } from 'react';

import { SceneWrap, Module, TitleWrap } from './styledHome'
import more from 'assets/images/more.png'
import {withRouter} from 'react-router-dom'
@withRouter
class Scene extends Component {
    handleClick=()=>{
        this.props.history.push('/scene')
    }
    clickDetail=(value)=>{
        return ()=>{
            let val = value.match(/\d+/g)[0]
            console.log(value.match(/\d+/g))
            this.props.history.push({pathname:`/detail/${val}`})
        }
    }
    render() {
        return (
            <Fragment>
                {
                    this.props.scene ? (
                        <Module>
                            <TitleWrap>
                                <h2>{this.props.scene.module_name}</h2>
                                <span onClick={this.handleClick}>更多种草场景 <i className="ico-more"><img src={more} alt="" /></i> </span>
                            </TitleWrap>
                            <SceneWrap>
                                {
                                    this.props.scene.module_data.map((value, index) => {
                                        return (
                                            <li key={value.link_url} onClick={this.clickDetail(value.link_url)}>
                                                <div className="gallery">
                                                    <img src={value.img_url}  alt=""/>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </SceneWrap>
                        </Module>
                    ) : null
                }

            </Fragment>
        );
    }
}

export default Scene;