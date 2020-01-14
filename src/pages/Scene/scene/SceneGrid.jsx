import React from 'react';

import { NavLink } from 'react-router-dom'
import { Grid } from 'antd-mobile';
// import LazyLoad from 'react-lazyload';
import {SceneMainWrap} from './SceneStyled'
const SceneGrid = (props) => {
    console.log(props.list)
    return (
        <SceneMainWrap>
            <Grid data={props.list}
                columnNum={3}
                itemStyle={{ padding: 0, height: '140px' }}
                renderItem={dataItem => (
                    <NavLink to={`/detail/${dataItem.scene_id}`}>
                        <div style={{ padding: '2px', width: '100%', height: '100%', position: 'relative' }}>
                            {/* <LazyLoad height={140} once offset={1000}> */}
                                <img src={dataItem.scene_background} style={{objectFit: 'cover', width: '100%', height: '100%', backgroundPosition: 'center center' }} alt="" />
                            {/* </LazyLoad> */}
                            <div style={{
                                color: '#888',
                                fontSize: '14px',
                                position: 'absolute',
                                bottom: '0.06rem',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <span className="sub-title">#{dataItem.scene_title}#</span>
                                <span className="sub-nub" >{dataItem.dish_count}道菜</span>
                            </div>
                            <div className="bg"></div>
                            {
                                dataItem.is_new ? (
                                    <div className="tip" style={{ backgroundColor: '#ff8f5d' }}>NEW</div>
                                ) : null
                            }

                        </div>
                    </NavLink>
                )}
            />
        </SceneMainWrap>
    )
}

export default SceneGrid;