import React from 'react'

export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            msg: '这是父组件中的msg消息'
        }
        
    }
    render(){
        return <div>
            <h1>这是父组件</h1>
            <input type='button' value='点击修改父组件的msg' onClick={this.changeMsg}></input>
            <hr/>
            <Son pmsg={this.state.msg}></Son>
        </div>
    }
    changeMsg = () => {
        this.setState({
            msg: '修改后的msg'
        })
    }
}

class Son extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
        
    }
    render(){
        return <div>
            <h3>这是子组件 --- {this.props.pmsg}</h3>
        </div>
    }
    componentWillReceiveProps(nextProps){
        console.log("被触发了")
        console.log(this.props.pmsg + '---' + nextProps.pmsg)
    }
}


