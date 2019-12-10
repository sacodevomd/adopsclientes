import React, { Component } from 'react';
export class Medix extends Component {

    detalle(){
        window.location.href = '/adop/detalle-reporte'+ 
        "#" +
         this; 
    }
    render() {

        const {reporte} = this.props;
        if(  this.props.estado === reporte.State)
         {
            return (
                <div className="card border-left-primary shadow m-2 py-2 datosdelreporteisual" >
                <div className="card-body  pb-0 pt-0">
                <div className="row no-gutters align-items-center justify-content-around">
                <div className="col col-xl-10 col-md-10 col-sm-10 d-flex align-items-around flex-wrap ">
                <p className="text-xs col-xl-1 col-md-6 col-sm-10 col-10 font-weight-bold  text-uppercase mb-0 justify-content-around">
                {reporte.Odc}</p>
                <p className="text-xs col-xl-3 col-md-6 col-sm-10 col-10 font-weight-bold  text-uppercase mb-0">{reporte.Cliente}</p>
                <p className="text-xs col-xl-2 col-md-6 col-sm-10 col-10 font-weight-bold  text-uppercase mb-0">{reporte.Medio}</p>
                <p className="text-xs col-xl-2 col-md-6 col-sm-10 col-10 font-weight-bold  text-uppercase mb-0">{reporte.Campana}</p>
                <p className="text-xs col-xl-2 col-md-6 col-sm-10 col-10 font-weight-bold  text-uppercase mb-0">{reporte.Mes}</p>
                <p className="text-xs col-xl-1 col-md-6 col-sm-10 col-10 font-weight-bold  text-uppercase mb-0">{reporte.StartDate}</p>
                <p className="text-xs col-xl-1 col-md-6 col-sm-10 col-10 font-weight-bold  text-uppercase mb-0">{reporte.EndDate}</p>
                </div><div className="col-1">
                <button className=" btn btn-primary pt-0 pb-0" onClick={this.detalle.bind(reporte.LocalMediaID)}>Ver</button>
                </div></div></div></div>
              )
         }
         else{        
        return null;
         }
            }
            }
export default Medix;