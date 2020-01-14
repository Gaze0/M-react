import styled from 'styled-components'

export const CommunityWrap = styled.div`
    .am-grid-item-content{
        padding:0 !important;
    }
    .info{
        height: .4rem;
        position: relative;
        width: 100%;
        display:flex;
        .user-head{
            margin-left: 0.05rem;
            margin-right: 0.05rem;
            width: .4rem;
            height: .4rem;
            img{
                border-radius: .6rem;
                width: .3rem;
                height: .3rem;
                margin-top: 0.05rem;
                margin-left: 0.05rem;
            }
        }
        .sub-text{
            padding-top: 0.05rem;
            width: .98rem;
            /* margin-left: .5rem; */
            height: .4rem;
            z-index: 2;
            background-color: #fff;
            display:flex;
            flex-direction:column;
            text-align:left;
            .sub-title{
                color: #50493e;
                overflow: hidden;
                height: 0.16rem;
                line-height: 0.16rem;
            }
            .sub-nub{
                color: #a3a3a3;
                overflow: hidden;
                height: 0.14rem;
                line-height: 0.14rem;
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