import React, { Component } from 'react';
import { GridWrap } from './styledHome'
import { Grid } from 'antd-mobile';
import { NavLink,withRouter } from 'react-router-dom'
class Entry extends Component {
    state = {
        data:[],
        router:['tour','category','course','scene']
    }

    componentDidMount(){
        let result = this.props.entry.module_data.slice(0,-1);
        // console.log(result)
        let data = result.map((val,index)=>({
            key:val.id,
            icon:val.entry_icon,
            title:val.entry_title,
            route:this.state.router[index]
        }))

        this.setState({
            data,
        })
    }

    // handleClick=(title)=>{
    //     return ()=>{
    //         this.props.history.push(`/${title}`)
    //         // console.log(this.props)
    //         // switch(title){
    //         //     case '新手入门':
    //         //         this.
    //         // }
    //     }
    // }
    handleClick=()=>{
        console.log(123)
    }
    _randerItem= dataItem => (
        
        <NavLink
            to={`/${dataItem.route}`}
            // onClick={this.handleClick(dataItem.route)}
        >
            <img src={dataItem.icon} style={{ width: '.4rem', height: '.4rem' }} alt="" />
            <div style={{ color: '#464646', fontSize: '.12rem', marginTop: '.05rem' }}>
                <span>{dataItem.title}</span>
            </div>
        </NavLink>
    )
    render() {
        return (
            <GridWrap>
                <Grid data={this.state.data}
                    columnNum={4}
                    hasLine={false}
                    itemStyle={{height:'.63rem',padding:0}}
                    renderItem={this._randerItem}
                />
            </GridWrap>
        );
    }
}

export default withRouter(Entry);