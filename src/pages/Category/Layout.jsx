import React, { Component } from 'react';
import HeaderNav from '@/HeaderNav/HeaderNav'
import {withRouter,Route} from 'react-router-dom'
import Left from './category/Left'
import Right from './category/Right'

@withRouter
class Layout extends Component {
    render() {
        return (
            <HeaderNav>
                <Route
                     path="/category/left"
                     children={() => (
                        <Left
                            type="Left"
                        ></Left>
                      )}
                ></Route>
                 <Route
                     path="/category/right"
                     children={() => (
                        <Right
                        type="Right"
                        ></Right>
                      )}
                ></Route>
            </HeaderNav>
        );
    }
}

export default Layout;