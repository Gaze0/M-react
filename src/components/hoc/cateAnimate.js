import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'
import 'assets/styles/animation.css'
export default (Comp) => {
    const CateAnimate = (props) => {
        return (
            <CSSTransition
                in={!!props.match}
                timeout={300}
                classNames={{
                    enter: 'animated',
                    enterActive: props.type === 'Left' ? 'slideInLeft' : 'slideInRight',
                    exit: 'animated',
                    exitActive: props.type === 'Left' ? 'slideOutLeft' : 'slideOutRight',
                }}
            mountOnEnter
            unmountOnExit
            >
                <Comp></Comp>
            </CSSTransition>
        )
    }
    return withRouter(CateAnimate)
}