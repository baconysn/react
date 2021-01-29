import React from "react"
import ReactDom from 'react-dom'

import CommentList from './components/CommentList.jsx'

import './css/commentList.css'

ReactDom.render(<div>
    <h1>评论列表案例</h1>
    <CommentList></CommentList>
    </div>, document.getElementById("app0"))
