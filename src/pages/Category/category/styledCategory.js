import styled from 'styled-components'

export const CategoryNavWrap = styled.div`
    .category-ul{
        height: 100%;
        /* width: 2.1rem; */
        display:flex;
        color:#333;
        .category-li{
            flex:1;
            margin: 0 0.06rem;
            float: left;
            line-height:.43rem;
            height: .43rem;
            border-bottom: 0.02rem solid #fff;
            width: .74rem;
            text-align:center;
        }
        .active{
            border-bottom: 0.02rem solid #ff8f5c;
        }
    }
`

export const RightWrap = styled.div`
    position:absolute;
    top:0;
    width: 100%;
`
export const LeftWrap = styled.div`
    position:relative;
    top:0;
    width: 100%;
`