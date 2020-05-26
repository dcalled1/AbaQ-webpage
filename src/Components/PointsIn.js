import React, { Component } from 'react'

export default class PointsIn extends Component {
    render() {
        let table = []
        table[0] = <tr><th>x</th><th>y</th></tr>
        for (let i = 0; i < this.props.n; i++) {
            table[i+1] = <tr>
                <td>
                    <input type="number" text={`px-${i}`} id={`px-${i}`} step="any"/>
                </td>
                <td>
                    <input type="number" text={`py-${i}`} id={`py-${i}`} step="any"/>
                </td>
            </tr>
        }
        return <div>
            <table>
                {table}
            </table>
        </div>
    }
}
