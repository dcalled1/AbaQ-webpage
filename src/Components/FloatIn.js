import React, { Component } from 'react'

export default class FloatIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ok: false,
            data: NaN
        }
    }

    check(e) {
        const val = e.target.valueAsNumber;
        if(!val.isNaN()) 
            this.setState({
                ok: true,
                data: val
            })
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.tag} = </label>
                <input type="number" name={this.props.name} id={this.props.id} step="any" onChange={this.check}/>
            </div>
        )
    }
}
