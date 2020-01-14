import React, { Component, Fragment } from 'react';
import HeaderNav from '@/HeaderNav/HeaderNav'
import { DetailWrap } from './styledTour'
import { post } from '../../../utils/http';
import Loading from '@/Loading/Loading'
import { withRouter  } from 'react-router-dom'
import Footer from './Footer'
@withRouter
class Detail extends Component {

    // constructor(){
    //     super();
    //     this.child = createRef()
    // }

    state = {
        data: '',
        isfinish: false,
        id:this.props.match.params.id
    }

    async componentDidMount() {
        
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'TourKitchenSkill',
                version: 4.4,
                id: this.state.id,
            }
        })
        this.setState({
            data: result.data,
            isfinish: true
        })
    }
    // componentDidUpdate(){
    //     console.log(this.child.current)
    //     let play = (this.child.current).getElementsByClassName('.play')
    //     console.log(play)
    // }
    // backTop=()=>{
    //     window.scrollTo(0, 0);
    // }
    render() {
        return (
            <Fragment>
                {
                    this.state.isfinish ? (
                        <HeaderNav  tourDetailTitle={this.state.data.title}>
                            <DetailWrap >
                                <div id="top" className="banner">
                                    <img className="ban-img" src={this.state.data.image} alt="" />
                                </div>
                                <div className="mainbody">
                                    <div className="good-page">
                                        <div className="describe-wrap">
                                            <p className="txt" id="describes">
                                                {this.state.data.describes}
                                            </p>
                                            <span className="line-md"></span>
                                        </div>
                                        <div className="step-wrap" ref={this.child} dangerouslySetInnerHTML={{ __html: this.state.data.content }}></div>
                                    </div>
                                </div>
                                <Footer></Footer>
                            </DetailWrap>

                        </HeaderNav>
                    ) : (<Loading></Loading>)
                }
            </Fragment>
        );
    }
}

export default Detail;