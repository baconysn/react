import React from "react"

import inlineStyle from './commentStyle'
//非模块化导入方式
// import '../css/commentItem.css'
//模块化导入方式
import itemStyles from '../css/commentItem.css'
console.log(itemStyles)

export default function CommentItem(props){
    /**样式优化一 */
    // const boxStyle = {border:'1px solid #ccc', margin:'10px 0', paddingLeft:15}
    // const userStyle = {fontSize:16, color:'purple'}
    // const contentStyle = {fontSize:14, color:'pink'}

    // return <div style={boxStyle}>
    //             <h3 style={userStyle}>user: {props.user}</h3>
    //             <h3 style={contentStyle}>comment: {props.content}</h3>
    //         </div>
    
    /**样式优化二 */
    // const inlineStyle = {
    //     boxStyle: {border:'1px solid #ccc', margin:'10px 0', paddingLeft:15},
    //     userStyle: {fontSize:16, color:'purple'},
    //     contentStyle: {fontSize:14, color:'pink'}
    // }
    // return <div style={inlineStyle.boxStyle}>
    //             <h3 style={inlineStyle.userStyle}>user: {props.user}</h3>
    //             <h3 style={inlineStyle.contentStyle}>comment: {props.content}</h3>
    //         </div>
    return <div className={itemStyles.box}>
        <h3 className={itemStyles.user}>user: {props.user}</h3>
        <h3 className={itemStyles.content}>comment: {props.content}</h3>
    </div>
}


