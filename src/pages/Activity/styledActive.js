import styled from 'styled-components'

export const ActiveWrap = styled.div`
    height: 100%;
    width: 100%;
    ul{
        padding-top: 0.08rem;
        background-color: #f8f8f8;
        li{
            min-height: 0rem;
            margin-bottom: 0.04rem;
            .item-wrap{
                position: relative;
                overflow: hidden;
                border-bottom: 1px solid #f2f2f2;
                .item{
                    margin-top: 0;
                    position: relative;
                    top: 0;
                    left: 0;
                    width: 100%;
                    img{
                        width: 100%;
                        height: 1.065rem;
                    }
                    .bar{
                        position: relative;
                        top: 0;
                        left: 0;
                        z-index: 2;
                        font-weight: 500;
                        text-align: center;
                        width: 100%;
                        height: .4rem;
                        line-height: .4rem;
                        background-color: #fff;
                        text-align:left;
                        .time-title{
                            color: #464646;
                            font-size: 0.13rem;
                            margin-right: 0.15rem;
                        }
                        .sub-title{
                            color: #464646;
                            font-size: 0.12rem;
                            line-height: .4rem;
                            margin-left: 0.15rem;
                        }
                    }
                }
                .tip{
                    position: absolute;
                    z-index: 4;
                    width: 1rem;
                    height: .2rem;
                    line-height: .2rem;
                    right: 0;
                    background-color: #ff7836;
                    font-size: 0.11rem;
                    color: #FFFFFF;
                    text-align: center;
                    transform: rotate(45deg);
                    -webkit-transform: rotate(45deg);
                    top: .4rem;
                    margin-right: -.3rem;
                    margin-top: -.3rem;
                }
                .tip-end{
                    background-color: #7a7a7a;
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