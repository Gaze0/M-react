import styled from 'styled-components'

export const SearchWrap = styled.div`
    height:.44rem;
    padding:.08rem 0;
    background:#fff;
    display:flex;
    .ico-back{
        display: inline-block;
        margin-right: 0.018rem;
        vertical-align: top;
        width: 0.28rem;
        height: 0.28rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .right-btn{
        font-size: 0.13rem;
        width: 0.44rem;
        color: #a0a0a0;
        height: 100%;
        line-height:.28rem;
        text-align:center;
        border: none;
        font-family: "microsoft YaHei";
    }
`

export const InputWrap = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    background:#eee;
    padding: 0 .1rem;
    border-radius: .02rem;
    vertical-align: top;
    text-align: center;
    position: relative;
    .ico-search{
        margin-top: .02rem;
        margin-left: 0;
        width: .24rem;
        height: .24rem;
        margin-right:.05rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    input{
        border:none;
        outline:none;
        box-sizing:content-box;
        height: 100%;
        text-align: left;
        color: #5d5d5d;
        font-family: "microsoft YaHei",sans-serif;
        width: 80%;
        background:#eee;
        font-size:.12rem;
    }
`