import React, { Component } from 'react'

export default class VectorOut extends Component {
    render() {
        let vector = []
        for (let i = 0; i < this.props.n; i++) {
            vector[i] = <tr>
                <td>
                    {this.props.vector[i]}
                </td>
            </tr>
        }
        return <div>
            <p>{this.props.tag} = </p>
            <table>
                {vector}
            </table>
        </div>
    }
}
