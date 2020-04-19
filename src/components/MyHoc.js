import React, { Component,Fragment  } from 'react'
function handleHoc(comp){
    return class extends Component{
        render(){
            return (
                <div>
                    <p>这是高阶组件内部的内容</p>
                    {comp}
                </div>
            )
        }
        
    }
}

export default handleHoc