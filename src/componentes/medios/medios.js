import React, { Component } from "react";
import Medio from './medio';
import $ from 'jquery';
export class Medios extends Component {
constructor(props){

super(props);
    this.state={
        marca: 1,
        marc: '',
        loading : false,
        reportes: [],
        token:[],
        usuario:[],
        clientes:[],
        marcas:[]
    }


    this.envio = this.envio.bind(this);
}

    async componentDidMount() {

      const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops")
      const token = await resto.json();
      this.setState({ token: token.token })

       
      
      const user = await fetch('http://127.0.0.1/user/?id=1090')
      const data = await user.json();
      this.setState({ usuario: data[0].idusuario})

        let  fetchData = () => {
  
        fetch("https://solutionsomg.com/Reporte/ClienteMarca/" + this.state.marca,
        {
            method: 'GET', 
            headers:{
                 //this what's exactly look in my postman
                'Authorization': 'Bearer '+ this.state.token,
            }
        })
        .then(marcas => marcas.json())
        .then(marcas => {
          this.setState({ marcas: marcas })
          this.setState({loading:true})
        })

      }
       
        fetchData()
        this.update = setInterval(fetchData, 1000)
        

      

        fetch("https://solutionsomg.com/Reporte/Cliente/" + this.state.usuario,

        {
            method: 'GET', 
            headers:{
                 //this what's exactly look in my postman
                'Authorization': 'Bearer '+ this.state.token,
            }
        })
        .then(clientes => clientes.json())
        .then(clientes => {
        this.setState({ clientes: clientes }) 
        })



       fetch("https://solutionsomg.com/Reporte/ArchivosLM/"+ this.state.usuario,
        {
          method: 'GET', 
          headers:{
               //this what's exactly look in my postman
              'Authorization': 'Bearer '+ this.state.token,
          },
          res2: this.data
      })
      .then(reportes => reportes.json())
          .then(reportes => {
            this.setState({ reportes: reportes })
          })
       

      
    }

    componentWillUnmount() {
      clearInterval(this.update)
      
      }

spiner(){
    var {loading} = this.state;
    if(loading === false){

        return(
            <div className="d-flex justify-content-center spinnerload">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
    }
        else{
            $(".filtrodemarcasmedios").removeClass("invisible");
            return null;
        }
}
marcas(){
    var {marca} = this.state;

    return(marca.map(marca => (
            <option value={marca.id} key={marca.id}>{marca.fullname}</option>
        )
    ))
}

change(event){
    $(".filtrodetabs").removeClass("invisible");
    this.setState({marc: event.target.value});
}


envio(event){

  this.update = setInterval(this.fetchData)
  this.setState({ marca: event.target.value });


}
activarfiltro(e) {

  $("#enviofiltro").click();
  $("#filtroSolicitacoes").on("submit", function () {
      $("#datatotales .reporte").show();
      var filter = "";
      $(this).find("[data-form]").each(function () {
          if ($(this).val() !== "") filter += ("[" + $(this).attr("data-form") + "='" + $(this).val() + "']");
      });
      if (filter.length > 0) $("#datatotales .reporte").not(filter).hide();
     
      return false;
  })
}


  render(){
$(".medioslocalenav").addClass("active");
var {marc, marca,clientes, marcas, reportes} = this.state;
console.log(reportes)
    return(
      <div className="App d-flex flex-column" >
      
      <div id="sdf" className="col-12 col-xl-11 ml-auto mr-auto p-0" >
    

        {this.spiner()}


<form id="filtroSolicitacoes" type="post" name="filtroSolicitacoes" className="container d-flex justify-content-end p-2 flex-wrap align-items-center col-xl-12 col-12"> 
<select data-form="cliente" className="custom-select col-5 col-xl-2 col-md-3 mt-2 mb-2 ml-2" name="filtroStatus" id="filtroStatus" onChange={e => {this.envio(e); this.activarfiltro(e)  }}>
<option value="">Cuenta</option>    
{
          clientes.map(marca => (
              <option value={marca.id} key={marca.id}>{marca.nombre}</option>
          ))
      }
      </select>
      <select data-form="marca" className="custom-select col-5 col-xl-2 col-md-3 mt-2 mb-2 ml-2" name="filtroStatus" id="filtroStatus" onChange={this.activarfiltro}>
          <option value="">Marca</option>
          {
              marcas.map(marc => (
                  <option value={marc.id} key={marc.id}>{marc.nombre}</option>
              ))
          }
      </select>
      <button type="submit" className="btn btn-primary col-12 col-xl-2 " onClick={this.activarfiltro} id="enviofiltro" hidden>Filtrar</button>
  </form>

</div>

<Medio marca={marc} marcas={marca} reportes={reportes}  detalle={this.detalle}/>

    </div>  
    
    )
  }
}
export default Medios;




