import React, { Component } from 'react';
class Leaddpi extends Component{

    render(){
        var { lead } = this.props;
        if (lead.EstadoDpi === 0){
            
        return(
                <div className="card-header d-flex justify-content-around col-12 m-auto tablasdeleads text-center" key={lead.id}>
                <p className="col-xl-2 mb-0 d-flex flex-column">  <span> {lead.Nombre}</span></p>
                <p className="col-xl-1 mb-0 d-flex flex-column">   <span> {lead.Ubicacion}</span></p>
                <p className="col-xl-2 mb-0 d-flex flex-column">   <span> {lead.CampaingID}</span></p>
                <p className="col-xl-1 mb-0 d-flex flex-column">    <span> {lead.CreateDate}</span></p>
                <p className="col-xl-2 mb-0 d-flex flex-column "> <span> {lead.DPI}</span></p>
                <p className="col-xl-2 mb-0 d-flex flex-column ">  <span> {lead.Email} </span></p>
                <p className="col-xl-1 mb-0 d-flex flex-column ">  <span> {lead.Plataforma}  </span> </p>
                <p className="col-xl-1 mb-0 d-flex flex-column ">  <span> {lead.Telefono} </span> </p>
            </div>  
            
        )
        
    }else{
        return null;
    }
    }
}
export default Leaddpi;