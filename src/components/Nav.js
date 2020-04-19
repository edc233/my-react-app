import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
             navList:['首页','新闻中心','我的'],
             isLogin:false
        }
        this.input=React.createRef()
    }
    handleRef=()=>{
        console.log(this.input)
        console.log(this.einput.innerHTML)
    };
    render() {
        let nav=this.state.navList.map(el=>{
            return <li key={el}>{el}</li>
        })
        let user = this.state.isLogin?<div>messi</div>:<div onClick={this.handleRef}>暂未登录</div>
        return (
            <div>
                <ul>
                    {nav}
                </ul>
                {user}
                <div ref={this.input}>获取真实Dom</div>
                <div ref={e=>{this.einput=e}}>获取真实Dom</div>
                {this.props.children}
            </div>
        )
    }
}
