import React from "react"
import CommentItem from './CommentItem.jsx'
import CommentBox from './CommentBox.jsx'

class CommentList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            cmts: [
                {user:'zhangsan', content:'hhshafa'},
                {user:'zhangsan', content:'hhshafa'},
                {user:'lisi', content:'shafa'},
                {user:'lisi', content:'shafa'}
            ]
        }
    }

    componentWillMount(){
        console.log('lll')
        this.loadCmts()
    }

    render(){
        /**方法一 */
        // var arr = []
        // this.state.cmts.forEach(item =>{
        //     arr.push(<h1>{item.user}</h1>)
        // })
        // return <div>
        //     {arr}
        // </div>

        /**方法二 */

        return <div>
            {this.state.cmts.map((item,i) =>{
                return <CommentItem user={item.user} content={item.content} key={i}></CommentItem>
                // return <CommentItem {...item} key={i}></CommentItem>
            })}
            <CommentBox reload={this.loadCmts}></CommentBox>
        </div>
    }

    loadCmts = ()=>{
        var list = JSON.parse(localStorage.getItem('cmts') || '[]')
        console.log(list)
        this.setState({
            cmts: list
        })
    }
}

export default CommentList
