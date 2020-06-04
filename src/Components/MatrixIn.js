import React, { Component } from 'react'

export default class MatrixIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ok: false,
            data: [],
            oks: [],
        }
        
    }

    check(i, j, e) {
        const val = e.target.valueAsNumber;
        const {n} = this.props
        this.setState((state) => {
            let data = state.data;
            data[i * n + j] = val;
            let oks = state.oks;
            oks[i * n + j] = !isNaN(val);
            return {
                ok: !oks.includes(false) && oks.length === n * n,
                data: data,
                oks: oks
            }
        });
    }

    render() {
        let table = []
        for (let i = 0; i < this.props.n; i++) {
            let row = []
            for (let j = 0; j < this.props.n; j++) {
                
                row[j] = <td>
                    <input type="number" text={`${this.props.tag}-${i}-${j}`} 
                    id={`${this.props.tag}-${i}-${j}`} key={`${this.props.tag}-${i}-${j}`} 
                    step="any" onChange={this.check.bind(this, i, j)}/>
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
