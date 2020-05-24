import React, { Component } from 'react'

export default class UnsignedIntegerIn extends Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.tag} = </label>
                <input type="number" name={this.props.name} id={this.props.id} min="0"/>
            </div>
        )
    }
}
