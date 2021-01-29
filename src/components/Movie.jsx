import React, { Component } from 'react'

export default class Movie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             routeParams: props.match.params
        }
    }
    
    render() {
        console.log(this);
        return (
            <div>
                {/* Movie ---{this.props.match.params.type}---{this.props.match.params.id} */}
                Movie ---{this.state.routeParams.type}---{this.state.routeParams.id}
            </div>
        )
    }
}
