import React, { Component } from 'react'

export default class PointsIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ok: false,
            data: {
                x: [],
                y: []
            },
            oks: {
                x: [],
                y: []
            }
        }
    }

    check(i, x, e) {
        const val = e.target.valueAsNumber;
        const {n} = this.props;
        this.setState((state) => {
            let data = state.data;
            if(x) data.x[i] = val;
            else data.y[i] = val;
            let oks = state.oks;
            if(x) oks.x[i] = !isNaN(val);
            else oks.y[i] = !isNaN(val);
            return {
                // eslint-disable-next-line
                ok: !oks.x.includes(false) && !oks.y.includes(false) && oks.x.length == n && oks.y.length == n,
                data: data,
                oks: oks
            }

        });
    }

    render() {
        let table = []
        table[0] = <tr><th>x</th><th>y</th></tr>
        for (let i = 0; i < this.props.n; i++) {
            table[i+1] = <tr>
                <td>
                    <input type="number" text={`px-${i}`} id={`px-${i}`} step="any" onChange={this.check.bind(this, i, true)}/>
                </td>
                <td>
                    <input type="number" text={`py-${i}`} id={`py-${i}`} step="any" onChange={this.check.bind(this, i, false)}/>
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
