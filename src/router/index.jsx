import React, { Component } from 'react';

import { Route, Redirect, Switch } from 'react-router-dom'
import IndexLayout from 'pages/index/Layout'
import TourLayout from 'pages/Tour/Layout'
import TourDetail from 'pages/Tour/tour/Detail'
import PlayLayout from 'pages/Tour/tour/Play'
import CourseLayout from 'pages/Course/Layout'
import SceneLayout from 'pages/Scene/Layout'
import SceneDetailLayout from 'pages/Scene/detail/DetailLayout'
import CategoryLayout from 'pages/Category/Layout'
import SearchLayout from 'pages/Search/Layout'
import TopicLayout from 'pages/Topic/Layout'
import ActiveLayout from 'pages/Activity/Layout'
import CommunityLayout from 'pages/Community/Layout'
class index extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path="/index"
                    component={IndexLayout}
                ></Route>
                <Route
                    path="/tour"
                    component={TourLayout}
                    // render={() => {
                    //     return (
                    //         <Provider store={store}>
                    //             <TourLayout></TourLayout>
                    //         </Provider>
                    //     )
                    // }}
                >
                </Route>
                <Route
                        path="/tourdetail/:id"
                        component={TourDetail}
                    ></Route>
                <Route
                    path="/course"
                    component={CourseLayout}
                ></Route>
                <Route
                    exact
                    path="/scene"
                    render={() => {
                        return <SceneLayout></SceneLayout>
                    }}
                >
                </Route>
                <Route
                    exact
                    path="/detail/:id"
                    component={SceneDetailLayout}
                />
                <Route
                    path="/category/:type"
                    render={() => {
                        return (
                            <CategoryLayout />
                        )
                    }}
                />
                <Route
                    path="/search"
                    render={()=>{
                        return (
                            <SearchLayout></SearchLayout>
                        )
                    }}
                ></Route>
                 <Route
                    path="/topic"
                    render={()=>{
                        return (
                            <TopicLayout></TopicLayout>
                        )
                    }}
                ></Route>
                 <Route
                    path="/activity"
                    render={()=>{
                        return (
                            <ActiveLayout></ActiveLayout>
                        )
                    }}
                ></Route>
                 <Route
                    path="/community"
                    render={()=>{
                        return (
                            <CommunityLayout></CommunityLayout>
                        )
                    }}
                ></Route>
                 <Route
                    path="/tourplay/:id"
                    render={()=>{
                        return (
                            <PlayLayout></PlayLayout>
                        )
                    }}
                ></Route>
                <Redirect
                    exact
                    from="/category"
                    to="/category/left"
                ></Redirect>
                <Redirect
                    exact
                    from="/"
                    to="/index"
                ></Redirect>
            </Switch>
        );
    }
}

export default index;