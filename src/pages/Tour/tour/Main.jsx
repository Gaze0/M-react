import React, { Component } from 'react';
import { MainBody } from './styledTour'
import Nav from './Nav'
import Content from './Content'
class Main extends Component {
    render() {
        return (
            <MainBody>
                <Nav getId={this.getId}></Nav>
                <Content id={this.state.id} type={this.state.type}></Content>
            </MainBody>
        );
    }
}

export default Main;