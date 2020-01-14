import React, { useState, useEffect, useCallback, Fragment, useMemo } from 'react';

import HeaderNav from '@/HeaderNav/HeaderNav'

import { Detail } from './styledDetail'
import play from 'assets/images/play.png'
import SceneGrid from '../scene/SceneGrid'
import moreCircle from 'assets/images/MoreCircle.png'
import { post } from 'utils/http'

import {NavLink } from 'react-router-dom'

const DetailLayout = (props) => {

    const [List, setList] = useState([])
    const [page] = useState(1)
    const [size] = useState(20)
    const [scene,setScene] = useState([])
    const id = props.match.params.id;
    const [data, setdata] = useState(null)
    const fetchData = useCallback(async () => {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'SceneInfo',
                page,
                size,
                version: 4.2,
                scene_id: id,
            }
        })
        console.log(result)
        setdata(result)
        setList(List => ([...List, ...result.data.dishes_list]))
        setScene(result.data.relates)
    }, [page,id,size])
    useEffect(() => {
        fetchData()
    }, [page,fetchData])

    const child = useMemo(() => (<SceneGrid list={scene}></SceneGrid>), [scene])

    return (
        <Fragment>
            {
                scene.length>0 ? (
                    <HeaderNav>
                        <Detail>
                            <div className="banner">
                                <img className='banner-img' src={data.data.scene_background} alt="" />
                                <div className="banner-text">
                                    <p className="txt-num">#{data.data.dish_count}道菜#</p>
                                    <p className="txt">#{data.data.scene_desc}#</p>
                                </div>
                                <div className="bg"></div>
                            </div>
                            <div className="goods-page">
                                <div className="panel">
                                    <ul className="list">
                                        {
                                            List.map((val) => {
                                                return (
                                                    <li key={val.dishes_id}> 
                                                        <div className="img">
                                                            <img  src={val.image} alt="" />
                                                            <i className="ico-play">
                                                                <img src={play} alt="" />
                                                            </i>
                                                        </div>
                                                        <div className="context">
                                                            <h6><p>{val.dishes_name}</p></h6>
                                                            <div className="txt">{val.dishes_desc}</div>
                                                            <div className="label-bar">
                                                                {
                                                                    val.tags_info.splice(0,3).map((value) => (
                                                                        <span key={value.id}>{value.text}</span>
                                                                    ))
                                                                }

                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="MoreScene">
                                <div className="recommend">
                                    <NavLink to="/scene">

                                    <p className="recommend-title">更多相关场景
                                        <i className="ico-more-circle">
                                            <img src={moreCircle} alt="" />
                                        </i>
                                    </p>
                                    </NavLink>
                                </div>
                                {child}
                            </div>
                        </Detail>
                    </HeaderNav>
                ) : null
            }
        </Fragment>

    )
}

export default DetailLayout;