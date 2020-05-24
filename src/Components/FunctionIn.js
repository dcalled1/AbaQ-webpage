import React, { Component } from 'react'

export default class FunctionIn extends Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.id} >{this.props.tag} = </label>
                <input type="text" id={this.props.id} name={this.props.name}/>
            </div>
        )
    }
}
