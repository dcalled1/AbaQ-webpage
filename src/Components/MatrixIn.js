import React, { Component } from 'react'

export default class MatrixIn extends Component {
    render() {
        let matrix = []
        for (let i = 0; i < this.props.n; i++) {
            let row = []
            let sign = ''
            for (let j = 0; j < this.props.n; j++) {
                
                row[j] = <td>
                    <label htmlFor={`a${i}-${j}`}>{`\`${sign}x_(${i}*${j})*\``}</label>
                    <input type="number" text={`a${i}-${j}`} id={`a${i}-${j}`} step="any"/>
                </td>
                sign = '+'
            }
        matrix[i] = <tr>{row}</tr>
        }
        return <table>
            {matrix}
        </table>
    }
}
