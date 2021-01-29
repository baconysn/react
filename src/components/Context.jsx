import React from 'react'
import ReactTypes from 'prop-types'

// export default class Com1 extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             color: 'red'
//         }
//     }

//     render(){
//         return <div>
//             <h1>这是父组件</h1>
//             <Com2 color={this.state.color}></Com2>
//         </div>
//     }

// }

// class Com2 extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             color: 'red'
//         }
//     }

//     render(){
//         return <div>
//             <h3>这是子组件</h3>
//             <Com3 color={this.props.color}></Com3>
//         </div>
//     }

// }

// class Com3 extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             color: 'red'
//         }
//     }

//     render(){
//         return <div>
//             <h5 style={{color:this.props.color}}>这是孙子组件</h5>
//         </div>
//     }

// }

export default class Com1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color: 'red'
        }
    }

    getChildContext(){
        return{
            color: this.state.color
        }
    }

    static childContextTypes = {
        color: ReactTypes.string
    }

    render(){
        return <div>
            <h1>这是父组件</h1>
            <Com2></Com2>
        </div>
    }

}

class Com2 extends React.Component{
    render(){
        return <div>
            <h3>这是子组件</h3>
            <Com3></Com3>
        </div>
    }

}

class Com3 extends React.Component{
    static contextTypes ={
        color: ReactTypes.string
    }

    render(){
        return <div>
            <h5 style={{color: this.context.color}}>这是孙子组件</h5>
        </div>
    }

}
