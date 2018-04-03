import React, { Component } from 'react';
import Card from '../Card/Card'
const a=["123","123","321"];
const user={"img":'','name':'afan',"sex":"boy"}
const demo={
    init:() =>{
        return class Demo extends Component {
            render() {
                return(
                    //引用组件
                    <div class='afan'>
                        <ChildComponent message={a}/>
                        <Card user={user}/>
                    </div>
                )
            }
        }
    }
}
class ChildComponent extends Component {
    render() {
        var a=this.props.message.map((i,index)=>{
            return <p key={index}>{i}----{index}</p>
        })
        return a
    }
}

export default demo.init();