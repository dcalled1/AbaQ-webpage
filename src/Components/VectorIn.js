import React, { Component } from 'react'

export default class VectorIn extends Component {
    render() {
        let vector = []
        for (let i = 0; i < this.props.n; i++) {
            vector[i] = <tr>
                <td>
                    <input type="number" text={`${this.props.tag}-${i}`} id={`${this.props.tag}-${i}`} step="any"/>
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
