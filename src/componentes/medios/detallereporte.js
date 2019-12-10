
import React, { Component } from 'react';
import Detalles from './detalle';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export class Detalle extends Component {
    state = {
        reporte: window.location.href,
        reportes: [],
        token:" ",
        encabezado:[]
    }

    async componentDidMount() {

      const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops-*()")
      const token = await resto.json();
      this.setState({ token: token.token })

        var {reporte} = this.state
       var repor = reporte.split("#");
        var repors = repor[1]
        const res = await fetch("https://solutionsomg.com/Reporte/DetalleLM/"+ repors,
        {
          method: 'GET', 
          headers:{
               //this what's exactly look in my postman
              'Authorization': 'Bearer '+ this.state.token,
          },
          res: this.data
      })
        const reportes = await res.json();
        this.setState({ reportes: reportes })
        this.setState({loading : true});

      const encabezado = await fetch("https://solutionsomg.com/Reporte/ArchivosLMEncabezado/"+ repors ,
      {
        method: 'GET', 
        headers:{
             //this what's exactly look in my postman
            'Authorization': 'Bearer '+ this.state.token,
        },
        encabezado: this.data
    })
    const encabezados = await encabezado.json();
    this.setState({encabezado:encabezados});


    }
    regresarmedio(){
        window.location.href = '/medios-locales'; 
      }


      rechazar(){

        var repor = this.split("#");
         var repors = repor[1]
     

     axios
     .delete("https://solutionsomg.com/Reporte/DetalleLM/ "+ repors)
     .then(response => {
     
       const MySwal = withReactContent(Swal)
       console.log(MySwal);
       Swal.fire({
         type: 'success',
         title: 'Datos Eliminados',
         text: 'Se ha Eliminado los reportes de la cuenta',
         footer: '<a href>ADOPS </a>'
       }).then((result)=>{
        window.location.href = '/adop/medios'; 
       });
     })
     .catch(error => {
         console.log(error);
     })
      }


      aprobar(){

        var repor = this.split("#");
         var repors = repor[1]
     axios
     .put("https://solutionsomg.com/Reporte/DetalleLM/ "+ repors)
     .then(response => {
     
       const MySwal = withReactContent(Swal)
       console.log(MySwal);
       Swal.fire({
         type: 'success',
         title: 'Datos Aprobados',
         text: 'Se han aprobado los reportes de la cuenta',
         footer: '<a href>ADOPS </a>'
       }).then((result) =>{
        window.location.href = '/adop/medios'; 
      })

     })
     .catch(error => {
         console.log(error);
     })


      }


  encabezado(){
    var {encabezado} = this.state;
    return(encabezado.map(dato => (

      <div className="card-body border-left-primary shadow m-2 py-2 row justify-content-around encabezadodemdio" key={dato.Campana}>
      <p className="col-1 font-weight-bold"> Campaña: <span>{dato.Campana}</span>   </p>
      <p className="col-1 font-weight-bold"> Cliente: <span>{dato.Cliente}</span> </p>
      <p className="col-1 font-weight-bold"> Fech Fin: <span>{dato.EndDate}</span>  </p>
      <p className="col-1 font-weight-bold"> Medio: <span>{dato.Medio}</span>   </p>
      <p className="col-2 font-weight-bold"> Mes: <span>{dato.Mes}</span>  </p>
      <p className="col-1 font-weight-bold"> ODC: <span>{dato.ODC}</span>   </p>
      <p className="col-2 font-weight-bold">País: <span>{dato.Pais}</span>  </p>

      </div> 
      
    )))
  }

    render() {
var {reportes} = this.state;

        return (
            <div className="App" >
        
            <div id="detallesreporte" className="col-12 col-xl-11 ml-auto mr-auto p-0">
       
{this.encabezado()}

<div className="row mt-2 ml-auto mr-auto col-11 flex-wrap justify-content-around direction-column">
<div className="card-body border-left-primary shadow m-2 py-2 row justify-content-around titulosdeetall">
<p className="col-1 font-weight-bold"> Clicks   </p>
<p className="col-1 font-weight-bold"> Consumo </p>
<p className="col-1 font-weight-bold"> Ctr  </p>
<p className="col-1 font-weight-bold"> EndWeek   </p>
<p className="col-2 font-weight-bold"> Formato </p>
<p className="col-1 font-weight-bold"> Impresiones   </p>
<p className="col-2 font-weight-bold">Nomenclatura   </p>
<p className="col-1 font-weight-bold"> Objetivo  </p>
<p className="col-1 font-weight-bold"> StartWeek   </p>
</div>      

              <Detalles reportes={reportes} />
              </div>
              <div className="col-5 m-auto p-2 d-flex justify-content-around">
              <button className="btn btn-primary mt-3" onClick={this.regresarmedio}> <i className="fas fa-undo-alt mr-2"></i>Regresar </button>
              <button className="btn btn-danger ml-2 mr-2 mt-3" onClick={this.rechazar.bind(this.state.reporte)}> <i className="fas fa-user-times mr-2"></i>Rechazar </button>
              <button className="btn btn-success mt-3" onClick={this.aprobar.bind(this.state.reporte)}> <i className="far fa-check-circle mr-2"></i> Aprobar</button>
      </div>
           </div>
          </div>  


        )
    }
}
export default Detalle;