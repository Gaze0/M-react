import React, { Component } from 'react';

import netsecurity from 'assets/images/netsecurity.png'
import { CopyRightWrap } from './styledHome'
class CopyRight extends Component {
    render() {
        return (
            <CopyRightWrap>
                <p>粤ICP备14078563号 深圳市金版文化数字传媒有限公司</p>
                <div className="copy-foot">
                    <i>
                        <img src={netsecurity} alt=""/>
                    </i>
                    <p>粤公网安备 44030402000542号</p>
                </div>
            </CopyRightWrap>
        );
    }
}

export default CopyRight;