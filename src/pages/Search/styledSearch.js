import styled from 'styled-components'

export const SearchMainWrap = styled.div`
    height: 100%;
    overflow:scroll;
    .hot{
        font-size: .14rem;
        background-color: #fff;
        margin-top: .08rem;
        padding: 0.1rem 0;
        -webkit-box-shadow: 0px 0px 02px #ccc;
        box-shadow: 0px 0px .02px #ccc;
        h6{
            margin-left: .06rem;
            font-size: .12rem;
            color: #5d5d5d;
            font-weight: 500;
        }
        .list{
            margin-top: .04rem;
            ul{
                list-style:none;
                width:100%;
                li{
                    margin: .06rem;
                    display: inline-block;
                    padding: .04rem .12rem;
                    color: #5d5d5d;
                    border-radius: .03rem;
                    border: 1px solid #ff8f5c;
                }
                .history-search{
                    margin: .06rem;
                    display: inline-block;
                    padding: .04rem .12rem;
                    color: #5d5d5d;
                    border-radius: .03rem;
                    border: 1px solid #bbb;
                }
                .loading-wrap{
                    font-size: .12rem;
                    text-align: center;
                    padding: .06rem 0;
                    color: #999;
                    text-align: center;
                    width: 100%;
                }
            }
        }
    }
    .search-keyword{
        background-color: #fff;
        padding: 0 .12rem;
        overflow:scroll;
        ul{
            list-style:none;
            li{
                padding: .08rem .08rem;
                font-size: .16rem;
                line-height:.21rem;
                border-bottom: 1px solid #eee;
                display: block;
                color: #5d5d5d;
                span{
                    color: #ff8f5c;
                }
            }
        }
    }
`