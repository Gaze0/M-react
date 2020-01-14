import styled from 'styled-components'

export const HeaderWrap = styled.div`
    height:.44rem;
    background-color: #ff7836;
    display:flex;
    align-items:center;
    .top-left,.top-right{
        width:.44rem;
        height: 100%;
        padding:.1rem;
        img{
            display:block;
            width:100%;
            height:100%;
        }
    }
    .top-search{
        flex:1;
        height:.28rem;
        line-height:.28rem;
        border-radius:.03rem;
        text-align:center;
        font-size:.12rem;
        background:#fff;
        .search-btn{
            display:inline-block;
            width: 100%;
            height: 100%;
            color: #828282;
            .ico-search{
                display:inline-block;
                /* background:url('../../../assets/images/ico-search.png') no-repeat; */
                background-size:cover;
                width:.24rem;
                height:.24rem;
                vertical-align:middle;
                margin-right:.02rem;
                img{
                    width: 100%;
                    height: 100%;
                    display:block;
                }
            }
            .ico{
                background-size: cover;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }

    
`
export const Main = styled.div`
    flex:1;
    overflow:scroll;
`

export const SwiperWrap = styled.div`
    height:0;
    font-size:0;
    padding-bottom:43.46667%;
    touch-action: none;
    .am-carousel-wrap{
        text-align:right;
    }
    img{
        width: 100%;
    }
`
export const EntryWrap = styled.div`
    padding:.15rem .1rem 0 .1rem;
    background:#fff;
`
export const EntryTopWrap = styled.div`
    width: 100%;
    display:flex;
    .left,.right{
        position:relative;
        width: 50%;
        .ctn{
            position:absolute;
            padding: 0.06rem 0.1rem;
            top:0;
            left:0;
            width: 100%;
            z-index:1;
            display:flex;
            flex-direction:column;
            h2{
                height: 0.25rem;
                line-height: 0.25rem;
                font-size: 0.12rem;
                font-weight: normal;
                color: #333;
            }
            p{
                height: 0.12rem;
                line-height: 0.12rem;
                font-size: 0.08rem;
                color: #999;
            }            
        }
        img{
            width: 100%;
        }
    }
    .right{
        padding-left:.05rem;
    }
    .left{
        padding-right:.05rem;
    }
`

export const GridWrap = styled.div`
    margin-top:.25rem;
    width: 100%;
    .am-grid-item-content{
        padding:0 !important;
    }
`
export const TitleWrap = styled.div`
    width: 100%;
    height: .2rem;
    line-height: .2rem;
    margin-bottom: 0.1rem;
    display:flex;
    justify-content:space-between;
    h2{
        height: 100%;
        font-size: 0.15rem;
        font-weight: normal;
        color: #333;
    }
    span{
        display: block;
        height: 100%;
        font-size: 0.12rem;
        color: #999;
        i{
            width: 0.1rem;
            height: 0.1rem;
            margin-top: -0.05rem;
            vertical-align: middle;
            display:inline-block;
            img{
                width: 100%;
                height: 100%;
                display:inline-block;
                vertical-align:top;
            }
        }
    }
`

export const NewWrap = styled.div`

`

export const Module = styled.div`
    padding: .2rem 0.1rem;
    background: #fff;
`
export const ProductWrap = styled.div`
    display:flex;
    list-style:none;
    li{
        flex:1;
        box-shadow: .02rem .02rem .1rem #ccc;
        border-radius: .1rem;
        /* height:1000px; */
        .pro-img{
            height:1.73rem;
            position:relative;
            img{
                border-top-right-radius:.1rem;
                border-top-left-radius:.1rem;
                width: 100%;
                height: 100%;
            }
            .ico-play{
                width: .4rem;
                height: .4rem;
                transform: translate(-50%,-50%);
                position: absolute;
                top: 50%;
                left: 50%;
            }
        }
        .info{
            width: 100%;
            height: auto;
            padding: 0.1rem 0.05rem;
            h2{
                width: 100%;
                height: .2rem;
                line-height: .2rem;
                font-size: 0.12rem;
                color: #333;
                overflow: hidden
            }
            p{
                height: .4rem;
                line-height: .2rem;
                margin-top: 0.05rem;
                font-size: 0.12rem;
                color: #666;
            }
            .ellipsis{
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
    li:first-child{
        padding-right: 0.05rem;
    }
    li:last-child{
        padding-left: 0.05rem;
    }
`

export const SceneWrap = styled.div`
    width:100%;
    /* display:flex; */
    list-style:none;
    margin-left: -0.1rem;
    li{
        /* flex:1; */
        display:inline-block;
        border-top-left-radius: 0.05rem;
        border-bottom-left-radius: 0.05rem;
        .gallery{
            width: 100%;
            height: 100%;
            /* position: relative; */
            overflow: hidden;
            background: url("../../../assets/images/logo-white.png") #e6e6e6;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: .4rem .4rem;
            img{
                width: 100%;
                height: 100%;
                border-top-left-radius: 0.05rem;
                border-bottom-left-radius: 0.05rem;
            }
        }
        &:nth-child(1),&:nth-child(2){
            width: 50%;
            padding-left: 0.1rem;
        }
        &:nth-child(3),&:nth-child(4), &:nth-child(5),&:nth-child(6){
            width: 25%;
            padding-left: 0.1rem;
            margin-top: 0.1rem;
        }
    }
`
export const IpWrap = styled.div`
    width: 100%;
    height: 2rem;
    border-radius: 0.05rem;
    overflow: hidden;
    position:relative;
    .gallery{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: url('../../../assets/images/logo-white.png')#e6e6e6;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: .4rem .4rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .Ip-warp{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        padding-left: 0.1rem;
        .heading{
            height: .6rem;
            margin-bottom: 0rem;
            padding-top: 0.14rem;
            line-height: .2rem;
            width: 100%;
            h2{
                width: 100%;
                height: .2rem;
                line-height: .2rem;
                font-size: 0.13rem;
                font-weight:100;
                color: #fff;
            }
            p{
                width: 100%;
                height: 0.16rem;
                line-height: 0.16rem;
                font-size: 0.1rem;
                color: #fff;
                font-weight:100;
                .ico-back-white{
                    display:inline-block;
                    width: 0.12rem;
                    height: 0.12rem;
                    margin-top: -0.02rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .content{
            height: 1.1rem;
            display:flex;
            li{
                flex:1;
                list-style:none;
                padding-right: 0.1rem;
                border-radius: 0.05rem;
                .slide-ctn{
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    text-align: center;
                    padding: .2rem 0.03rem 0;
                    border-radius: 0.05rem;
                    position: relative;
                    .gallery{
                        position: relative;
                        left:50%;
                        width: .4rem;
                        height: .4rem;
                        border-radius: 50%;
                        transform: translateX(-50%);
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            vertical-align: bottom;
                        }
                    }
                    h2{
                        height: .2rem;
                        line-height: .2rem;
                        width: 100%;
                        margin-top: 0.06rem;
                        font-size: 0.12rem;
                        color: #333;
                        -webkit-line-clamp: 1;
                    }
                    p{
                        height: 0.12rem;
                        line-height: 0.12rem;
                        width: 100%;
                        font-size: 0.1rem;
                        color: #666;
                        -webkit-line-clamp: 1;
                    }
                    .ellipsis{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
    }
`

export const ChooesWrap = styled.div`
    width: 100%;
    height: auto;
    padding: .2rem .2rem 0 .2rem;
    border-radius: 0.05rem;
    box-shadow: 0 0 .1rem #e8e8e8;
    ul{
        margin-left: -.2rem;
        li{
            width: 33.33333%;
            padding-left: .2rem;
            margin-bottom: .2rem;
        }
    }
    .gallery-wrap{
        margin-bottom: .2rem;
        .gallery{
            /* padding-left: 1rem; */
            position: relative;
            height: .92rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                vertical-align: bottom;
            }
            .ico-play{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                img{
                    width: .24rem;
                    height: .24rem;

                }
            }
        }
        .info{
                padding: 0 0.03rem;
                text-align: center;
                margin-top: 0.05rem;
                h2{
                    width: 100%;
                    height: .2rem;
                    line-height: .2rem;
                    font-size: 0.12rem;
                    color: #333;
                    -webkit-line-clamp: 1;
                }
                p{
                    width: 100%;
                    height: 0.14rem;
                    line-height: 0.14rem;
                    font-size: 0.1rem;
                    color: #666;
                    -webkit-line-clamp: 1;
                }
                .ellipsis{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                }
            }
    }
`
export const TopicWrap = styled.div`
    .wrap{
        padding-right:.1rem;
        .slide-img{
            height: 1.19259rem;
            width: 80%;
            border-radius:.1rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius:.1rem;
            }
        }
    }
`
export const PostWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
    figure{
        width: 50%;
        img{
            width: 100%;
        }
        &:nth-child(odd) {
            padding-right: .05rem;
        }
        &:nth-child(even) {
            padding-left: .05rem;
        }
        figcaption {
            display:flex;
            flex-direction:column;
            h2{
                width: 100%;
                height: .2rem;
                line-height: .2rem;
                font-size: 0.12rem;
                color: #333;
                -webkit-line-clamp: 1;
            }
            .ellipsis{
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
            }
            .user{
                display:flex;
                margin-top: 0.05rem;
                margin-bottom: 0.15rem;
                .head{
                    width: .3rem;
                    height: .3rem;
                    border-radius: 50%;
                    margin-right: 0.05rem;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                span{
                    display: block;
                    width: 60%;
                    height: .3rem;
                    line-height: .3rem;
                    color: #333;
                    font-size: 0.1rem;
                    -webkit-line-clamp: 1;
                }
            }
        }
    }
`









































export const FooterWrap = styled.div`
    width: 100%;
    height: auto;
    padding: .2rem 0;
    background: #fff;
    text-align: center;
    img{
        width: 35%;
    }
`

export const CopyRightWrap = styled.div`
    padding-bottom: .12rem;
    font-size: .1rem;
    text-align: center;
    color: #999;
    .copy-foot{
        width: 100%;
        margin: 0 auto;
        padding: .2rem 0;
        i{
            display:inline-block;
            width:.2rem;
            height:.2rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        p{
            display: inline-block;
            height: .2rem;
            line-height: .2rem;
            margin: 0 0 0 .05rem;
            color: #939393;
        }
    }
`