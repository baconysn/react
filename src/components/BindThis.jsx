import React from 'react'

export default class Bind extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:'这是默认的m s g'
        }
        this.changeMsg2 = this.changeMsg2.bind(this,'hhh', 'lalala')
    }
    render(){
        return <div>
            <h1>绑定this并传参的几种方式</h1>
            <input type="button" value='方式一' onClick={this.changeMsg1.bind(this,'zhu', 'piza')}></input>
            <input type="button"value='方式二' onClick={this.changeMsg2}></input>
            <input type="button" value='方式三' onClick={() => {this.changeMsg3('222','333')}}></input>
            <input type="text" style={{width:'100%'}} value={this.state.msg} onChange={this.txtChanged} ref='txt'></input>
            <hr/>
            <h3>{this.state.msg}</h3>
        </div>
    }

    // txtChanged = () => {
    //     // console.log('ok')
    //     console.log(this.refs.txt.value)
    //     this.setState({
    //     })
    // }
    txtChanged = (e) => {
        // console.log('ok')
        console.log(e.target.value)
        this.setState({
            msg: e.target.value
        })
    }

    changeMsg1(arg1, arg2){
        console.log(this)
        this.setState({
            msg:'绑定this并传参的方式1' + arg1 + arg2
        })
    }
    changeMsg2(arg1, arg2){
        console.log(this)
        this.setState({
            msg:'绑定this并传参的方式2' + arg1 + arg2
        })
    }
    changeMsg3(arg1, arg2){
        console.log(this)
        this.setState({
            msg:'绑定this并传参的方式3' + arg1 + arg2
        })
    }
}