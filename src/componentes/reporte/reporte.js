
import React, { Component } from 'react';
import $ from 'jquery';
import CurrencyFormat from 'react-currency-format';

export class Report extends Component {

    constructor(props) {
        super(props);
        this.state = {addClass: false}
      }
      toggle() {
        this.setState({addClass: !this.state.addClass});
      }



    porcentajekpi() {
        if (this.props.reporte.EstadoKPI === "0" && this.props.reporte.PorcentajeKPI > 0 && this.props.reporte.PorcentajeKPI <= 20) {
            return (
                <p className="estadokpinaranja col-xl-1 mb-0 d-flex flex-column "> <span className="font-weight-bold">{this.props.reporte.PorcentajeKPI} %  <i className="fas fa-sort-up"></i></span></p>
            )
        } else  if (this.props.reporte.EstadoKPI === "0" && this.props.reporte.PorcentajeKPI < 0  && this.props.reporte.PorcentajeKPI >= -20 ) {
            return (
                <p className="estadokpinaranja col-xl-1 mb-0 d-flex flex-column "> <span className="font-weight-bold">{this.props.reporte.PorcentajeKPI} %  <i className="fas fa-sort-down"></i></span></p>    
            )}
            else  if (this.props.reporte.EstadoKPI === "0" && this.props.reporte.PorcentajeKPI > 20 ) {
            return (
                <p className="estadokpirojo col-xl-1 mb-0 d-flex flex-column "> <span className="font-weight-bold">{this.props.reporte.PorcentajeKPI} %  <i className="fas fa-sort-up"></i></span></p>    
            )}
            else  if (this.props.reporte.EstadoKPI === "0" && this.props.reporte.PorcentajeKPI <= -21 ) {
                return (
                    <p className="estadokpirojo col-xl-1 mb-0 d-flex flex-column "> <span className="font-weight-bold">{this.props.reporte.PorcentajeKPI} %  <i className="fas fa-sort-down"></i></span></p>    
                )}
                else  if (this.props.reporte.PorcentajeKPI === 0 ) {
                    return (
                        <p className="estadokpiverde iconoverde col-xl-2 mb-0 d-flex flex-column"> <span className="font-weight-bold">  <i className="far fa-check-circle"></i></span></p>
                        )}
            else {
            return (
                <p className="estadokpiverde col-xl-1 mb-0 d-flex flex-column"> <span className="font-weight-bold">{this.props.reporte.PorcentajeKPI} %</span></p>
            )
        }
    }
    estadokpirojo
    porcentajepresupuesto() {
      if (this.props.reporte.EstadoPresupuesto === "0" && this.props.reporte.PorcentajePresupuesto > 0 && this.props.reporte.PorcentajePresupuesto < 20) { 
            return( 
            <p className="estadokpinaranja col-xl-2 mb-0 d-flex flex-column "> <span className="font-weight-bold">{this.props.reporte.PorcentajePresupuesto} %  <i className="fas fa-sort-up"></i></span></p>
           
            )}
            else  if (this.props.reporte.EstadoPresupuesto === "0" && this.props.reporte.PorcentajePresupuesto < 0 && this.props.reporte.PorcentajePresupuesto >= -20) { 
                return( 
                <p className="estadokpinaranja col-xl-2 mb-0 d-flex flex-column"> <span className="font-weight-bold">{this.props.reporte.PorcentajePresupuesto} %  <i className="fas fa-sort-down"></i></span></p>
               
                )}
                else  if (this.props.reporte.EstadoPresupuesto === "0" && this.props.reporte.PorcentajePresupuesto <= -21) { 
                    return( 
                    <p className="estadokpirojo col-xl-2 mb-0 d-flex flex-column"> <span className="font-weight-bold">{this.props.reporte.PorcentajePresupuesto} %  <i className="fas fa-sort-down"></i></span></p>
                   
                    )}
                    else  if (this.props.reporte.EstadoPresupuesto === "0" && this.props.reporte.PorcentajePresupuesto >= 21) { 
                        return( 
                        <p className="estadokpirojo col-xl-2 mb-0 d-flex flex-column"> <span className="font-weight-bold">{this.props.reporte.PorcentajePresupuesto} %  <i className="fas fa-sort-up"></i></span></p>
                       
                        )}

                        else  if (this.props.reporte.PorcentajePresupuesto === 0) { 
                            return( 
                            <p className="estadokpiverde iconoverde col-xl-2 mb-0 d-flex flex-column"> <span className="font-weight-bold">  <i className="far fa-check-circle"></i></span></p>
                           
                            )}     
            else {
            return (
                <p className="estadokpiverde col-xl-2 mb-0 d-flex flex-column"> <span className="font-weight-bold">{this.props.reporte.PorcentajePresupuesto}%</span></p>
            )
        }
    }

    render() {
        $(".reportesnav").parent().addClass("active");

        let boxClass = [""];
        if(this.state.addClass) {
          boxClass.push('show ');
        }

        var { reporte } = this.props;
        if(this.props.medio === reporte.Media){
            
        return (

            <div className="card mt-2 reporte" cliente={reporte.idcliente} marca={reporte.idmarca} key={reporte.CampaingID}>
           
                <div className="card-header" id={reporte.Account} >
                    <div className="collapsed d-flex justify-content-around col-12 m-auto tablasdecolapso" data-toggle="collapse" data-target={reporte.CampaingID} aria-expanded="true" aria-controls={reporte.CampaingID} >
                        <p className="col-xl-2 mb-0 d-flex flex-column">  <span> {reporte.Account}</span></p>
                        <p className="col-xl-2 mb-0 d-flex flex-column">   <span> {reporte.Marca}</span></p>
                        <p className="col-xl-1 mb-0 d-flex flex-column "> {reporte.StartDate}</p>
                        <p className="col-xl-1 mb-0 d-flex flex-column "> {reporte.EndDate}</p>
                        <p className="col-xl-1 mb-0 d-flex flex-column diasexal"> {reporte.DiasEjecutados}  </p>
                        <p className="col-xl-1 mb-0 d-flex flex-column diasexal">  {reporte.DiasPorservir} </p>
                        {this.porcentajekpi()}
                        {this.porcentajepresupuesto()}


                        <button type="button" className="btn btn-large btn-block btn-primary col-1 "   onClick={this.toggle.bind(this)}>Ver detalle</button>


                    </div>
                    
                </div>
                <p className="col-xl-12 mb-0 d-flex flex-column nomenclaturareportede">  <span> {reporte.Campaingname}</span></p>
                <div id={reporte.CampaingID} className={boxClass.join(' ') + "collapse" } aria-labelledby={reporte.Account} data-parent="#accordion">
                    <div className="card-body d-flex justify-content-around flex-wrap pt-0">
                        <div className="col-11 m-auto d-flex justify-content-around primrlinea flex-wrap pb-2">
                            <p className="col-xl-2 mb-0 d-flex ">Días por servir <span>{reporte.DiasPorservir}</span></p>
                            <p className="col-xl-2 mb-0 d-flex "> Medio <span>{reporte.Media}</span></p>
                            <p className="col-xl-2 mb-0 d-flex "> Mes <span>{reporte.mes}</span></p>
                            <p className="col-xl-4 mb-0 d-flex ">Tipo de KPI <span>{reporte.KPI}</span></p>



                        </div>
                        <div className="col-4 d-flex flex-column divisores">
                            <p className="titulomedi">Planificado</p>
                            <CurrencyFormat value={reporte.KPIPlanificado} displayType={'text'} thousandSeparator={true}  renderText={value =><p className="col-xl-12 mb-0 d-flex flex-column"> KPI Planificado <span>{value}</span></p>} />
             
                            <CurrencyFormat value={reporte.PresupuestoPlan} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value =><p className="col-xl-12 mb-0 d-flex flex-column"> Presupuesto Planificado <span>{value}</span></p>} />
                        </div>
                        <div className="col-4 d-flex flex-column  divisores border-right border-gray border-left">
                            <p className="titulomedi">Esperado</p>
                            <CurrencyFormat value={reporte.KPIEsperado} displayType={'text'} thousandSeparator={true}   renderText={value =><p className="col-xl-12 mb-0 d-flex "> KPI Esperado <span className="ml-2">{value}</span>   <i className="fas fa-chevron-circle-right mr-2 ml-2 mt-1"></i>  <span className="ml-1">{reporte.PorcentajeEsperadoK}%</span></p>} />

                          
                            <CurrencyFormat value={reporte.PresupuestoEsperado} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value =><p className="col-xl-12 mb-0 d-flex "> Presupuesto Esperado <span  className="ml-3">{value}</span> <i className="fas fa-chevron-circle-right mr-2 mt-1 ml-2"></i>  <span  className="ml-1">{reporte.PorcentajeEsperadoV}%</span></p>} />


                            <CurrencyFormat value={reporte.CostoPorResultadoP} displayType={'text'} thousandSeparator={true} renderText={value =><p className="col-xl-12 mb-0 d-flex "> Costo por Resultado Planificado <span  className="ml-3">{value}</span> </p>} />

                            
                          
                        </div>
                        <div className="col-4 d-flex flex-column divisores">
                            <p className="titulomedi">Real</p>
                        
                            <CurrencyFormat value={reporte.KPIConsumido} displayType={'text'} thousandSeparator={true}  renderText={value =><p className="col-xl-12 mb-0 d-flex ">  KPI Real <span  className="ml-3">{value}</span> <i className="fas fa-chevron-circle-right mr-2 mt-1 ml-2"></i>  <span  className="ml-1">{reporte.PorcentajeRealK}%</span></p>} />
                           
                            <CurrencyFormat value={reporte.InversionConsumida} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value =><p className="col-xl-12 mb-0 d-flex "> Inversion Real <span  className="ml-3">{value}</span>  <i className="fas fa-chevron-circle-right mr-2 mt-1 ml-2"></i>  <span  className="ml-1">{reporte.PorcentajeRealV}%</span></p>} />
                            <CurrencyFormat value={reporte.CostoPorResultadoR} displayType={'text'} thousandSeparator={true}  renderText={value =><p className="col-xl-12 mb-0 d-flex "> Costo por Resultado Real <span  className="ml-3">{value}</span> </p>} />

                        </div>
                        <div className="mt-3 mb-3 col-12"></div>
                    </div>
                </div>
            </div>
        )
        
    }else{
     return null;
    }
    }
}
export default Report;