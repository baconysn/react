import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'

import Home from './components/Home.jsx'
import Movie from './components/Movie.jsx'
import About from './components/About.jsx'

import {DatePicker} from 'antd'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>这是网站的根组件</h1>
                    <DatePicker/>
                </div>

                {/* <Link to="/home">首页</Link>&nbsp;&nbsp; */}
                <Link to="/home/ss">首页</Link>&nbsp;&nbsp;
                <Link to="/movie/top50/10">电影</Link>&nbsp;&nbsp;
                <Link to="/about">关于</Link>

                <hr/>
                <Route path="/home" component={Home} exact></Route>
                <hr/>
                <Route path="/movie/:type/:id" component={Movie} exact></Route>
                <hr/>
                <Route path="/about" component={About}></Route>
                <hr/>
            </HashRouter>
        )
    }
}
