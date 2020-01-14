import styled from 'styled-components'
import border from '@/styled/border'

export const MainBody = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;

`

export const NavWrap = border(styled.div`
    height: .84rem;
    background-color: transparent;

    .tour-logo{
        background-color: #fff;
        min-width: 3.2rem;
        max-width: 6.4rem;
        height: .84rem;
        margin: 0 auto;
        text-align: center;
        position: relative;
        padding: 0.06rem 0;
        /* display:flex;
        justify-content:center; */
    }
    .swiper-slide{
        width: 19.687% !important;
        padding-left:.1rem;
        img{
            width: .48rem;
            height: .48rem;
            border-radius: 50%;
            margin-bottom: 0.04rem;
        }
        span{
            display: block;
            width: 100%;
            height: .2rem;
            line-height: .2rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .active{
            color: #ff8f5c;
        }
    }
`)

export const ContentWrap = styled.div`
    flex:1;
    overflow:scroll;
    .ul-wrap{
        height: 100%;
        overflow:scroll;
        ul{
            width: 100%;
            list-style:none;
            li{
                background-color: #fff;
                margin-top: .08rem;
                width: 100%;
                
                .img-wrap{
                    position: relative;
                    top: 0;
                    left: 0;
                    display: block;
                    width: 100%;
                    min-height: 1.7rem;
                    height: 1.99125rem;
                    object-fit:cover;
                    img{
                        width: 100%;
                        height: 100%;
                        display:block;
                        object-fit:cover;
                    }
                    .ico-play{
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        z-index: 2;
                        margin-top: -.26rem;
                        margin-left: -.26rem;
                        width: .412rem;
                        height: .412rem;
                        background-image: url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-play.png);
                    }
                }
                .detail-wrap{
                    position: relative;
                    top: 0;
                    left: 0;
                    padding: 0.1rem;
                    min-height: .4rem;
                    .clearfix{
                        display:flex;
                        justify-content:space-between;
                        h2{
                            text-align:left;
                            color: #464646;
                            font-size: .15rem;
                            height: .2rem;
                            line-height: .2rem;
                            width: 60%;
                            font-weight:100;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .nub{
                            color: #a0a0a0;
                            font-size: .12rem;
                            text-align: right;
                            height: .2rem;
                            line-height: .2rem;
                            width: 38%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
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


export const DetailWrap = styled.div`
    width: 100%;
    /* height: 100%; */
    .banner{
        width: 100%;
        position: relative;
        .ban-img{
            max-width: 100%;
            font-size: 0px;
            display: block;
            margin: 0 auto;
        }
    }
    .line-md{
        display: block;
        margin: 0.16rem 0 !important;
        height: 1px;
        background-color: #f2f2f2;
    }
    .mainbody{
        background-color: #fff;
        color: #5d5d5d;
        .good-page{
            min-height: 2rem;
            padding: 0.1rem;
            text-align:left;
            .describe-wrap{
                .txt{
                    text-indent: .28rem;
                    font-size: 0.14rem;
                    line-height: .2rem;
                }
                
            }
            .step-wrap{
                display: block;
                p{
                    font-family: "microsoft YaHei",sans-serif !important;
                    font-size: 0.14rem !important;
                    line-height: .2rem;
                    margin: 0.06rem 0;
                }
                img{
                    width: 100%;
                    display: block;
                    font-size: 0rem;
                    border: 0;
                }
                .play-name{
                    text-align: center;
                    margin-top: 0.04rem;
                    margin-bottom: .16em;
                    color: #da3211;
                    font-size: 0.14rem;
                    font-style: italic;
                    display: block;
                }
                span{
                    font-family: "microsoft YaHei",sans-serif !important;
                    font-size: 0.14rem !important;
                    line-height: .2rem
                }
                .play{
                    display: block;
                    position: relative;
                }
                .ico-play{
                    width: .412rem;
                    height: .412rem;
                    display: inline-block;
                    vertical-align: top;
                    position: absolute;
                    background: url('http://pub.szzhangchu.com/web/v4.2/images/ico/ico-play-video.png') no-repeat left top;
                    background-size: .412rem .412rem;
                    left: 50%;
                    top: 50%;
                    margin-left: -.26rem;
                    margin-top: -.26rem;
                }
                .ui-link{
                    color: #ff8f5c;
                    text-align: center;
                }
            }
        }
    }
    
`

export const PlayerWrap = styled.div`
    height: 1.995rem;
    width: 100%;
    video{
        height: 100%;
        width: 100%;
    }
`

export const PlayMain = styled.div`
    .nav-wrap{
        height: .4rem;
        line-height: .4rem;
        background-color: transparent;
        border: 0;
        .nav{
            background-color: #fff;
            min-width: 3.2rem;
            max-width: 6.40rem;
            height: .4;
            line-height:.4rem;
            margin: 0 auto;
            text-align: center;
            position: relative;
            border-bottom: 1px solid #eee;
            ul{
                display:flex;
                width: 100%;
                height: 100%;
                li{
                    flex:1;
                    color: #a0a0a0;
                    font-size: 0.14rem;
                }
                .active{
                    color: #464646;
                    border-bottom: 0.02rem solid #ff8f5c;
                }
            }
        }
    }
    .goods-page{
        min-height: 2rem;
        padding: 0.1rem;
        text-align:left;
        ul{
            .title-method{
                color: #f18d1a;
                font-size: 0.15rem;
                margin-bottom: 0.1rem;
                .ico{
                    background-image: url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-up-red.png);
                    background-size: cover;
                    display: inline-block;
                    width: .14rem;
                    height: .14rem;
                    vertical-align: middle;
                }
            }
            .step-wrap{
                display: block;
                p{
                    font-family: "microsoft YaHei",sans-serif !important;
                    font-size: 0.14rem !important;
                    line-height: .2rem;
                    margin: 0.06rem 0;
                }
                img{
                    width: 100%;
                    display: block;
                    font-size: 0rem;
                    border: 0;
                }
                span{
                    font-family: "microsoft YaHei",sans-serif !important;
                    font-size: 0.14rem !important;
                    line-height: .2rem;
                }
            }
        }
    }
`

export const FooterWrap = styled.div`
    .footer-wrap{
        .footer-theme{
            padding-bottom: 0.1rem;
            background-color: #fff;
            .img-code{
                margin: 0 auto;
                text-align: center;
                font-size: 0.1rem;
                color: #333;
                display: flex;
                justify-content:center;
                align-items:flex-start;
                ul{
                    display: flex;
                    justify-content:center;
                    align-items:flex-start;
                    width: 80%;
                    li{
                        flex:1;
                        width: 50%;
                        text-align: center;
                        .i{
                            width: 1rem;
                        }
                        .style-c{
                            color: #f18d1a;
                        }
                    }
                }
            }
        }
        .footer-nav-wrap{
            background-color: #fff;
            margin-top: -0.1rem;
            padding-bottom: 0.1rem;
            color: #5d5d5d;
            .footer-nav{
                width: 100%;
                height: .2rem;
                line-height: .2rem;
                margin-bottom: 0.1rem;
                ul{
                    width: 100%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: row;
                    li{
                        justify-content: space-around;
                        font-size: 0.13rem;
                        width: 25%;
                        border-right: 0.016rem solid #5d5d5d;
                        &:last-child{
                            border-right:0;
                        }
                    }
                }
            }
            .footer-tips{
                text-align: center;
                font-size: 0.12rem;
                color: #5d5d5d;
            }
        }
    }
`