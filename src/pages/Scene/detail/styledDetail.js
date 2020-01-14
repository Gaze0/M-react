import styled from 'styled-components'

export const Detail = styled.div`
    min-height: 1.39rem;
    .banner{
        padding: 0;
        position: relative;
        height: 100%;
        min-height: 2.197rem;
        background-color: #fff;
        font-size: .12rem;
        text-align: center;
        color: #999;
        width: 100%;
        .banner-img{
            max-width: 100%;
            font-size: 0px;
            display: block;
            margin: 0 auto;
        }
        .banner-text{
            width: 100%;
            z-index: 2;
            padding: 0 .2rem;
            color: #fff;
            position: absolute;
            bottom: 0.1rem;
            overflow: hidden;
            .txt-num{
                font-size: 0.15rem;
                margin-bottom: 0.1rem;
                line-height: 0.18rem;
            }
            .txt{
                font-size: 0.13rem;
                line-height: 0.16rem;
            }
        }
        .bg{
            position: absolute;
            height: 1.1rem;
            width: 100%;
            bottom: 0;
            z-index: 1;
            background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
        }
    }
    .goods-page{
        min-height: 2rem;
        background-color: #fff;
        margin-top: .08rem;
        /* m: 0 0 0.08rem 0; */
        padding-bottom: 0.08rem;
        .panel{
            padding: .04rem 0.12rem 0;
            background-color: #fff;
            border-top: 1px solid #eee;
            .list{
                li{
                    height: 0.8025rem;
                    background-color: #fff;
                    position: relative;
                    text-align: left;
                    margin-top: 0;
                    padding-top: 0.08rem;
                    overflow: hidden;
                    border-bottom: none;
                    padding-left: 0;
                    padding-bottom: 0;
                    display:flex;
                    .img{
                        width: 1.2rem;
                        height: 0.8025rem;
                        margin-right: 0.08rem;
                        position: relative;
                        margin-top: 0;
                        margin-left: 0;
                        img{
                            width:100%;
                            height: 100%;
                            font-size: 0px;
                            display: block;
                            margin: 0 auto;
                            object-fit: cover;
                        }
                       
                        .ico-play{
                            width: .204rem;
                            height: .204rem;
                            margin-top: -0.12rem;
                            margin-left: -0.12rem;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            z-index: 2;
                        }
                    }
                    .context{
                        flex:1;
                        display:flex;
                        flex-direction:column;
                        h6{
                            font-size: 0.14rem;
                            color: #50493e;
                            line-height: 0.16rem;
                        }
                        .txt{
                            color: #a3a3a3;
                            font-size: 0.12rem;
                            margin: .04rem 0 0 0;
                            line-height: 0.16rem;
                            height: .32rem;
                            overflow: hidden;
                        }
                        .label-bar{
                            flex:1;
                            overflow: hidden;
                            background-color: #fff;
                            line-height: 0.16rem;
                            height: .2rem;
                            position: absolute;
                            bottom: 0;
                            span{
                                line-height: 0.1rem;
                                text-align: center;
                                color: #ff8f5c;
                                font-size: 0.1rem;
                                display: inline-block;
                                border-radius: 0.1rem;
                                border: 1px solid #ff8f5c;
                                padding: 0.02rem 0.06rem;
                                box-sizing: border-box;
                                margin-right:.1rem;
                            }
                        }
                    }
                }
            }
        }
    }
    .am-grid-item-content{
        padding:0 !important;
    }

    .MoreScene{
        background:#fff;
        overflow:hidden;
        padding-bottom:.1rem;
        .recommend{
            width: 100%;
            text-align: center;
            margin: 0.12rem 0;
            height: .32rem;
            background:#fff;
            .recommend-title{
                font-size: 0.16rem;
                color: #666;
                line-height: .36rem;
            }
            .ico-more-circle{
                display: inline-block;
                margin-left: 0.12rem;
                vertical-align: middle;
                width: 0.16rem;
                height: .16rem;
                img{
                    display:block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`
