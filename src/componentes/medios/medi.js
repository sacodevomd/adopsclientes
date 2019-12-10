import React, { Component } from 'react';
import Medix from './med1.js'
export class Med extends Component {


    render() {
        return this.props.reportes.map(reporte => <Medix  reporte={reporte}  estado={this.props.estado} key={reporte.LocalMediaID}  /> );
            }
 }
export default Med;