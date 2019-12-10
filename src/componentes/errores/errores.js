import React, { Component } from 'react';
import Error from './error';
export class Errores extends Component {

    render() {
        return this.props.errores.map(error => <Error  medio={this.props.medio}  user={this.props.user} verificar={this.props.verificar} omitir={this.props.omitir} error={error} key={error.iderror} /> );
    }
}

export default Errores

