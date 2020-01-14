import styled from 'styled-components'

export const TopicWrap = styled.div`
    height: 100%;
    width: 100%;
    ul{
        .list{
            background-color: #fff;
            margin-top: .08rem;
            padding: 0.1rem .1rem;
            -webkit-box-shadow: 0px 0px 1px #ccc;
            box-shadow: 0px 0px 1px #ccc;
            .item{
                margin-top: 0rem;
                margin-bottom: .06rem;
                .li-img{
                    max-width: 100%;
                    font-size: 0px;
                    display: block;
                    margin: 0 auto;
                    border-radius: 4px;
                }
                span{
                    text-align:left;
                }
                .title{
                    margin-top: .04rem;
                    margin-bottom: .04rem;
                    color: #515151;
                    font-size: 0.16rem;
                    display: block;
                }
                .sub-title{
                    color: #a3a3a3;
                    font-size: 0.12rem;
                    display: block;
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