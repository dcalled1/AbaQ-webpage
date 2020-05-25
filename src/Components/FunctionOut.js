import React, { Component } from 'react'

export default class FunctionOut extends Component {
    render() {
        return (
            <div>
                <p>{'`'+this.props.tag+' = '+this.props.fn+'`'}</p>
            </div>
        )
    }
}
