
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { CategoryNavWrap } from './styledCategory'
@withRouter
class CategoryNav extends Component {

    state={
        dir:'category/left'
    }

    handleClick=(dir)=>{
        return ()=>{
            this.setState({
                dir,
            })
            this.props.history.push(`/${dir}`)
        }
    }

    render() {
        return (
            <CategoryNavWrap>
                <ul className="category-ul">
                    <li 
                    className={this.props.match.url ==="/category/left"?"category-li active":"category-li" }
                    onClick={this.handleClick('category/left')}>菜谱</li>
                    <li 
                    className={this.props.match.url ==="/category/right"?"category-li active":"category-li " }
                    onClick={this.handleClick('category/right')}>食材</li>
                </ul>
            </CategoryNavWrap>
        );
    }
}

export default CategoryNav;