import React, { useState, useEffect, useCallback, useMemo, Fragment } from 'react';

import { SceneMainWrap, MoreWrap } from './SceneStyled'
import { post } from 'utils/http'

import { withRouter } from 'react-router-dom'
// import { reducer, initState } from '../reducers'
import Loading from '@/Loading/Loading'
import SceneGrid from './SceneGrid'

const SceneMain = (props) => {
    const [List, setList] = useState([])
    const [page, setpage] = useState(1)
    const [size] = useState(9)
    const [total, setTotal] = useState(0)
    // const [state, dispatch] = useReducer(reducer, initState)
    const fetchData = useCallback(async () => {
        let result = await post({
            url: '/apk',
            data: {
                methodName: 'SceneList',
                page,
                size,
                version: 4.2
            }
        })
        setList(List => [...List, ...result.data.data])
        setTotal(total => (result.data.total - size * page))
    }, [page, size])

    // useEffect(() => {
    //     fetchData()
    //     // console.log(state.sceneList)
    // }, [])
    useEffect(() => {
        fetchData()
        // console.log(state.sceneList)
    }, [page,fetchData])

    const addMore = useCallback(() => {
        setpage(page => (~~page + 1))
        console.log(page)
    }, [page])

    const child = useMemo(() => (<SceneGrid list={List}></SceneGrid>), [List])
    return (
        <Fragment>
        {
            List.length > 0 ? (
                <SceneMainWrap>
                    {child}
                    {
                        List.length > 0 && (
                            <MoreWrap onClick={addMore}>
                                还剩下<span className="num">{total}</span>个场景
                        </MoreWrap>
                        )
                    }
                </SceneMainWrap>
            ):(
                <Loading></Loading>
            )
        }
        </Fragment>
    );
}

export default withRouter(SceneMain);