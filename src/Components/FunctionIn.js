import React, { Component } from 'react'

const math = require('mathjs');
const parser = math.parser();

export default class FunctionIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            ok: false,
            fn: null
        };
    }

    check(e) {
        parser.clear();
        const fn_str = e.target.value;
        try {
            parser.evaluate(`f(x)=${fn_str}`);
            // eslint-disable-next-line
            const fn = parser.get('f');
            this.setState({
                data: fn_str,
                ok: true,
                fn: fn
            });
        } catch(error) {
            this.setState({
                data: fn_str,
                ok: false,
                fn: null
            });
        }
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id} >{this.props.tag} = </label>
                <input type="text" key={this.props.id} id={this.props.id} name={this.props.name} onChange={this.check.bind(this)}/>
            </div>
        )
    }
}
