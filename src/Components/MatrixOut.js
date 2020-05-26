import React, { Component } from 'react'

export default class MatrixOut extends Component {
    render() {
        let table = []
        for (let i = 0; i < this.props.n; i++) {
            let row = []
            for (let j = 0; j < this.props.n; j++) {
                
                row[j] = <td>
                    <p>{this.props.matrix[i][j]}</p>
                </td>
            }
        table[i] = <tr>{row}</tr>
        }
        return <div>
        <p>{this.props.tag} = </p>
        <table>
            {table}
        </table>
    </div>
    }
}
