import React, { Component } from 'react'
import Nav from '../../components/Nav'
import Clock from '../../components/Clock'
import MyHoc from '../../components/MyHoc'
import HandleHoc from '../../components/HandleHoc'
let MyHooc=MyHoc(HandleHoc)
export default class Home extends Component {
    render() {
        return (
            <div>
                这是我的首页，下面是我的导航组件
                {/* <Nav>
                    <div>这就是插槽</div>
                </Nav> */}
                {/* <Clock></Clock> */}

                <MyHooc />
            </div>
        )
    }
}
