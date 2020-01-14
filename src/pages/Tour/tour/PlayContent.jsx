import React, { Component } from 'react';

const PlayContent = (props) => {
    console.log(props)
    return (
        <div className="goods-page">
            {
                props.methodName === 'TourMethodStep' && (
                    <ul>
                        {
                            props.list.map((val) => {
                                return (
                                    <li key={val.id}>
                                        <h2 className="title-method">
                                            方法1：搓洗法  &nbsp;&nbsp;
                                                        <span className="ico">
                                            </span>
                                        </h2>
                                        <div className="step-wrap" dangerouslySetInnerHTML={{ __html: val.content }}></div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default PlayContent;