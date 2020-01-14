import styled from 'styled-components'

export const SceneMainWrap =styled.div`
    .am-grid-item-content{
        padding:0 !important;
    }
    .sub-title{
        position: relative;
        z-index:2;
        font-size: 0.14rem;
        margin-bottom: 0.04rem;
        line-height: 0.15rem;
        text-align: center;
        color: #fff;
    }
    .bg{
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0;
        z-index: 1;
    }
    .tip{
        position: absolute;
        width: 1.1rem;
        height: .3rem;
        line-height: .202rem;
        padding-top: 0.08rem;
        right: 0;
        background-color: #CC0000;
        font-size: 0.1rem;
        overflow: hidden;
        z-index: 2;
        color: #FFFFFF;
        text-align: center;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        top: .4rem;
        margin-right: -.405rem;
        margin-top: -.405rem;
    }
    .sub-nub{
        position: relative;
        z-index:2;
        font-size: 0.12rem;
        line-height: 0.15rem;
        text-align: center;
        color: #fff;
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