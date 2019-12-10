
import React, { Component } from 'react';
export class Detalles extends Component {
    state = {
        reporte: window.location.href,
        reportes: [],
        token:" "
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
    }
    
    render() {
var {reportes} = this.state;
        return (reportes.map(detalle =>(
           <div className="card-body cartasdedetalle shadow m-2 py-2 row justify-content-around" key={detalle.detailID}>
<p className="col-1">{detalle.Clicks} </p>
<p className="col-1">{detalle.Consumo} </p>
<p className="col-1">{detalle.Ctr} </p>
<p className="col-1">{detalle.EndWeek} </p>
<p className="col-2">{detalle.Formato} </p>
<p className="col-1">{detalle.Impresiones} </p>
<p className="col-2">{detalle.Nomenclatura} </p>
<p className="col-1">{detalle.Objetivo} </p>
<p className="col-1">{detalle.StartWeek} </p>
           </div>
        )
        ))
    }
}
export default Detalles;