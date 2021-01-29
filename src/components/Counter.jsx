import React from 'react'
import ReactTypes from 'prop-types'

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: props.initCount
        }
    }

    static defaultProps = {
        initCount: 0
    }

    static propTypes = {
        initCount: ReactTypes.number
    }

    componentWillMount(){
        // console.log(document.getElementById('my_h3'))
        console.log(this.props.initCount)
    }

    render(){
        return <div>
            <h1>这是counter计数器组件</h1>
            <input type="button" value="+1" id="btn" onClick={this. increment}></input>
            <hr/>
            {/* <h3 id='my_h3'>当前的数量是：{this.props.initCount}</h3> */}
            <h3 id='my_h3'>当前的数量是：{this.state.count}</h3>
        </div>
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount(){
        // console.log(document.getElementById('my_h3'))
        // document.getElementById('btn').onclick = () => {
        //     console.log('ok')
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        //     console.log(this.state.count)
        // }
    }

    shouldComponentUpdate(nextProps, nextState){
        // return nextState.count % 2 === 0 ? true : false
        console.log(this.ref.h3.innerHTML)
    }

    componentWillUpdate(){

    }

    myFunc(){
        console.log('自己定义的函数，和生命周期函数无关')
    }
}