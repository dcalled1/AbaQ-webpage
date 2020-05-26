import React, { Component } from 'react'

export default class MatrixIn extends Component {
    render() {
        let table = []
        for (let i = 0; i < this.props.n; i++) {
            let row = []
            for (let j = 0; j < this.props.n; j++) {
                
                row[j] = <td>
                    <input type="number" text={`${this.props.tag}-${i}-${j}`} id={`${this.props.tag}-${i}-${j}`} step="any"/>
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
