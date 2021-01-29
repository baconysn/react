import React from 'react'

export default class CommentBox extends React.Component{

    render(){
        return <div>
            <label>评论人: </label> <br/>
            <input type="text" ref={(_user) => {this.user = _user}}/> <br/>
            <label>评论内容：</label> <br/>
            <textarea cols="30" rows="4" ref = {(_content) =>{this.content = _content}}></textarea>
            <br/>
            <input type="button" value="发表评论" onClick={this.postComment}></input>
        </div>
    }

    postComment = ()=>{
        var cmtInfo = {user: this.user.value, content: this.content.value}
        console.log(cmtInfo)
        var list = JSON.parse(localStorage.getItem('cmts') || '[]')
        list.unshift(cmtInfo)
        localStorage.setItem('cmts', JSON.stringify(list))
        
        this.user.value = this.content.value = ''
        this.props.reload()
    }
}