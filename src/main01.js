import React from "react"
import ReactDom from 'react-dom'


// var myH1 = React.createElement('h1', null, '这是一个h1')
// var myDiv = React.createElement('div', { title: 'this is a div', id: 'app' }, '这是一个div', myH1)
var arr = [];
for(var i = 0; i<10;i++){
    var p = <p key={i}>这是第{i}个p</p>
    arr.push(p)
}
var myTitle = "这是我的title"
var myDiv = <div title={myTitle + 'aaaa'}> 
    这是一个div
    <h1>这是一个h1</h1>
    <p className="myP">这是一个p</p>
    <label htmlFor="">这是一个lable</label>
    {arr}
    {
        //注释写法
    }
    {/**这是推荐的注释写法 */}
</div>

var person = {
    name: 'yyn',
    age: '15',
    gender: 'female',
    address: 'nowhere'
}
import Hello from './components/hello.jsx'
import './class_study.js'
import './class_study2.js'
ReactDom.render(myDiv, document.getElementById("app0"))
// ReactDom.render(<div><Hello {...person}></Hello></div>, document.getElementById("app1"))

import Hello2 from './components/hello2.jsx'
ReactDom.render(<div>
    <Hello name='ss' age={20}></Hello>
    <Hello2 address = 'beijing' info='heima'></Hello2>
</div>, document.getElementById("app1"))