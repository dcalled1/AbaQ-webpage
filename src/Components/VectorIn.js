import React, { Component } from 'react'

export default class VectorIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ok: false,
            data: [],
            oks: []
        }
    }

    check(i, e) {
        const val = e.target.valueAsNumber;
        const {n} = this.props;
        this.setState((state) => {
            let data = state.data;
            data[i] = val;
            let oks = state.oks;
            oks[i] = !isNaN(val);
            return {
                // eslint-disable-next-line
                ok: !oks.includes(false) && oks.length == n ,
                data: data,
                oks: oks
            }

        });
    }

    render() {
        let vector = []
        for (let i = 0; i < this.props.n; i++) {
            vector[i] = <tr>
                <td>
                    <input type="number" text={`${this.props.tag}-${i}`} 
                            id={`${this.props.tag}-${i}`} step="any" 
                            onChange={this.check.bind(this, i)}/>
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
