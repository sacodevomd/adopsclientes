import React, { Component } from 'react';
import Report from './reporte';
export class Repor extends Component {

    render() {

        return this.props.reportes.map(reporte => (<Report reporte={reporte} medio={this.props.medio} key={reporte.CampaingID}/> ))
    }
}

export default Repor;

