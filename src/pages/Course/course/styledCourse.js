import styled from 'styled-components'

export const CourseMain = styled.div`
    height: 100%;
    overflow:scroll;
    text-align:left;
    ul{
        height: 100%;
        width: 100%;
        list-style:none;
        li{
            .li-img{
                min-height: 1.7rem;
                max-width: 100%;
                font-size: 0px;
                display: block;
                margin: 0 auto;
            }
            .detail{
                padding: 0.12rem;
                position: relative;
                height: .604rem;
                .title{
                    color: #464646;
                    font-size: 0.14rem;
                    height: 0.16rem;
                    line-height: 0.16rem;
                    width: 70%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .sub-title{
                    color: #a0a0a0;
                    font-size: 0.12rem;
                    position: absolute;
                    left: 0.14rem;
                    bottom: 0.1rem;
                }
                .album-logo{
                    width: .52rem;
                    height: .52rem;
                    border-radius: 50%;
                    position: absolute;
                    right: 0.14rem;
                    top: -.26rem;
                    max-width: 100%;
                    font-size: 0px;
                    display: block;
                    margin: 0 auto;
                }
                .album{
                    text-align: center;
                    width: .6rem;
                    height: 0.16rem;
                    font-size: 0.12rem;
                    color: #a0a0a0;
                    position: absolute;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    right: 0.1rem;
                    bottom: 0.14rem;
                }
            }
        }
    }
`
export const MoreWrap = styled.div`
    margin: .1rem;
    padding: 0 .12rem;
    text-align: center;
    background: #ddd;
    color: #666;
    font-size: .16rem;
    height: .32rem;
    line-height: .32rem;
    border-radius: .16rem;
`