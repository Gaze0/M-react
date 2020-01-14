import React, { useEffect, useState, useCallback, Fragment, useMemo } from 'react'
import HeaderNav from '@/HeaderNav/HeaderNav'
import { withRouter } from 'react-router-dom'
import { PlayerWrap, PlayMain } from './styledTour'
import { post } from 'utils/http'
import PlayContent from './PlayContent'

const Play = (props) => {
    const [content, setContent] = useState([])
    const [main,setMain] = useState()
    const [active,setActive] = useState(0)
    const [video,setVideo] = useState({})
    const [materialid,setMaterialid] = useState(0)
    const [methodName,setmethodName] = useState('TourMethodStep')
    const [version,setversion] = useState(4.4)
    const [isMount,setisMount] = useState(true)
    const NavArr = [
        {nav:'步骤方法',methodName:'TourMethodStep'},
        {nav:'相关菜例',methodName:'MaterialDishes'},
        {nav:'选购要诀',methodName:'MaterialView'},
        {nav:'实用百科',methodName:'MaterialView'}
    ]
    const fetchData = useCallback(async () => {
        // console.log(methodName)
        let result = await post({
            url: '/apk',
            data: {
                methodName:'TourMethodStep',
                version,
                id: props.match.params.id
            }
        })
        console.log(result)
        setContent(content => [...content, ...result.data.methods])
    }, [content])

    const fetchVideo = useCallback(async()=>{
        let videoResult = await post({
            url: '/apk',
            data: {
                methodName: 'TourFoodProcessing',
                version: 4.4,
                id: props.match.params.id
            }
        })
        console.log(videoResult.data.materialid)
        setVideo(videoResult.data)
        setMaterialid(videoResult.data.materialid)
    })

    const fetchMaterial = useCallback(async(methodName)=>{
        let materResult;
        if(methodName==='TourMethodStep'){
            materResult = await post({
                url: '/apk',
                data: {
                    methodName: 'TourMethodStep',
                    version: 4.4,
                    id: props.match.params.id
                }
            })
            setContent(content => [...materResult.data.methods])
        }else{
            materResult = await post({
                url:'/apk',
                data:{
                    methodName: methodName,
                    version: 4.0,
                    material_id: materialid,
                    page: 1,
                    size: 5
                }
            })
            setContent(content => [materResult.data])
        }
        
    })
    useEffect(() => {
        if(isMount){
            fetchVideo()
            fetchData()
            setisMount(false)
        }else{
            fetchMaterial(methodName)
        }
    }, [methodName])
   
    const handleClick=(index,methodName)=>{
        return ()=>{
            setActive(index)
            setmethodName(methodName)
        }
    }
    const MainInfo = useMemo(()=>(
        <PlayContent methodName={methodName} list={content}></PlayContent>
    ),[content])
    return (
        <HeaderNav tourPlayTitle={props.location.state.title}>
            {
                content.length > 0 && (
                    <Fragment>
                        <PlayerWrap>
                            <video poster={video.image}   src={video.video} controls="controls">
                            </video>
                        </PlayerWrap>
                        <PlayMain>
                            <div className="nav-wrap">
                                <div className="nav">
                                    <ul>
                                        {
                                            NavArr.map((val,index)=>{
                                                return (
                                                    <li 
                                                    key={index} 
                                                    className={active===index?"active":''}
                                                    onClick={handleClick(index,val.methodName)}
                                                    >{val.nav}</li>
                                                )
                                            })
                                        }
                                        {/* <li className="active">步骤方法</li>
                                        <li onClick={handleClick}>相关菜例</li>
                                        <li>选购要诀</li>
                                        <li>实用百科</li> */}
                                    </ul>
                                </div>
                            </div>
                            {MainInfo}
                        </PlayMain>
                    </Fragment>
                )
            }
        </HeaderNav>
    )
}

export default withRouter(Play);