import styled from 'styled-components'
// import border from '../styled/border'

export const HeaderNavWrap =styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    height: 100%;
    .head-ul{
        height: 100%;
        width: 2.1rem;
        display:flex;
        .head-li{
            flex:1;
            line-height: .403rem;
            height: .44rem;
            margin: 0;
            font-size: 0.15rem;
            text-align:center;
            color: #333;
            transition:.5s;
        }
        .active{
            border-bottom: 0.02rem solid #ff8f5c;
        }
    }
    .am-navbar{
        background:#fff !important;
    }
    .my-drawer{
        flex:1
    }
    .am-list-content{
        font-size:.12rem !important;
        font-weight:100 !important;
        color: #a0a0a0 !important;
        text-indent:.1rem !important;
    }
    .am-drawer-content{
        width:100% !important;
    }
    .am-drawer-content{
        padding-top:0 !important;
    }
    .Top{
        position:absolute;
        right:0;
        img{
            width: .28rem;
            height: .28rem;
            background-size: cover;
        }
    }
    .title{
        height: .44rem;
        color: #333;
        line-height:.44rem;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .my-drawer {
        position: relative;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .my-drawer .am-drawer-sidebar {
        background-color: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .my-drawer .am-drawer-sidebar .am-list {
        width: 300px;
        padding: 0;
    }
`