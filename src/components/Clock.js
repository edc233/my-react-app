import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
             dates: new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                dates:new Date().toLocaleTimeString()
            })
        }, 1000);
    };
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                现在时间是{this.state.dates}
            </div>
        )
    }
}
