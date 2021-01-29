import React from 'react'

class Hello2 extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            msg: '这是state中的数据',
            info: 'sasagayo'
        }
    }

    render(){
        console.log(this.props)
        return <div>
            <h1>这是一个使用class类创建的组件</h1>
            <h2>地址是{this.props.address}</h2>
            <h5>{this.state.msg}</h5>
            <input type="button" value="change msg" id="changeMsgBtn" onClick={this.changeMsg}></input>
            <br/>
        </div>
    }
    changeMsg = () => {
        this.setState(function(prevState, props){
            console.log(prevState)
            console.log(props)
            return{
                info: 'sasa'
            }
        },
        //回调函数
        function(){
            console.log(this.state.info)
        }
        // ,
        // {
        //     msg: "modified msg"
        // }
        )
    }
}

export default Hello2