import React, { Component } from "react";
import Autocomplete from './autocomplete.js';
import $ from 'jquery';
import Asignacion from './asignador';

import {

  Input,
  Card,
  CardBody
} from "mdbreact";
class Search extends Component {
  state = {
    search: " ",
    datos: [],
    filtros: [],
    checked: "checked",
    marca: 0,
    cuenta: "",
    token: '',
    loading: 0

  };
  async componentDidMount() {
    const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops")
    const token = await resto.json();
    this.setState({ token: token.token })

    const res = await fetch('https://solutionsomg.com/task/Marca',
      {
        method: 'GET',
        headers: {
          //this what's exactly look in my postman
          'Authorization': 'Bearer ' + this.state.token,
        },
        res: this.data
      })
    const datos = await res.json();
    this.setState({ datos: datos })

    const res1 = await fetch('https://solutionsomg.com/task/MarcaNames',
    {
      method: 'GET',
      headers: {
        //this what's exactly look in my postman
        'Authorization': 'Bearer ' + this.state.token,
      },
      res: this.data
    })
    const filtros = await res1.json();
    this.setState({ filtros: filtros })
    this.setState({ loading: 1 })
  }

  renderCountry = country => {

    return (
      <div className="col-11 p-0 filtrodatos primerosfiltrados mt-2 ml-auto mr-auto" style={{ marginTop: "20px" }} key={country.id} >
        <Card >
          <CardBody className="col-12 p-0 mt-2 ml-auto mr-auto row justify-content-center ">
            <button className="btn-primary activarmarcas d-none" onClick={() => { this.setState({ cuenta: country.id }); this.setState({ marca: 1 }); }} />
            <p className="col-3" >{country.id} </p>
            <p className="col-7"> {country.fullname}</p>

          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  filtros() {
    var { filtros } = this.state;
    return (filtros.map(filtro => (

      <p>filtro.iderror</p>
    ))
    )
  }

  clickmarca() {
    $(".activarmarcas").click();
    $("#marcas .filtrodatos ").show();
    $(".form-control").val(" ");

  }
  clicklimpiar() {
    $("#marcas .filtrodatos ").hide();
  }


  filtrocuenta(e) {
    const userInput = e.currentTarget.value;
    console.log(userInput);
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#marcasllenas > div").filter(function () {
        return (
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        )
      });

    });

  }
  render() {

    const { search, filtros, datos, cuenta, marca } = this.state;
    const filteredCountries = datos.filter(country => {
      return country.fullname.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    if (search.length < 2) {
      $(".primerosfiltrados").hide();
    } else {
      $(".primerosfiltrados").show();
    }

    return (


      <div className="App apphistorial" >

      <div id="general" className="col-12 col-xl-12 ml-auto mr-auto p-0">
   

       <div className="col-12">               
      
   




      <div className="flyout row justify-content-around flex-wrap align-center">
        <h1 className="col-11 col-xl-11 mr-auto mb-2 ml-auto text-left p-0  titulodeasignacion">Asignación</h1>
        <main className="mt-2 col-4">
          <div className="container p-0">
            <div className="row" >
              <div className="col-11 p-0 m-auto">
                <Autocomplete className="form-control"
                  suggestions={filtros}
                />

                <Input className="buscadoruno"
                  hidden
                  onChange={this.onchange}
                  onClick={this.onchange}
                />
              </div>
              <div className="col-10 m-auto" />
            </div>

            <div className="row">
              <h3 className="col-11 col-xl-11 m-auto text-left p-0 titulomarcasasiganada pt-2 pb-2">Cuentas asignadas a marca</h3>
              {filteredCountries.map(country => {
                return this.renderCountry(country);
              })}
            </div>
            <div className="col-xl-10 mt-3 col-12 justify-content-around ml-auto mr-auto row">
              <button className="btn-danger btn" value="Cancelar" onClick={this.clicklimpiar}>Cancelar <i className="fas fa-times-circle pl-2"></i></button>
              <button className="btn-primary btn" value="Consultar" onClick={this.clickmarca} >Consultar <i className="fas fa-search pl-2"></i></button>

            </div>
          </div>
        </main>
        <div id="marcas" className="col-7">
          <div className="col-12 p-0 mt-2 ml-auto mr-auto row justify-content-center maquetadecuentas">
            <p className="col-2">Enviar</p>
            <p className="col-3">Cuenta</p>
            <p className="col-4">Id Cuenta</p>
            <p className="col-3">Medio</p>

          </div>
          <input id="myInput" className="form-control1 col-11 m-auto" type="text" placeholder="Buscar Cuentas" onChange={this.filtrocuenta} />
          <div id="marcasllenas">
            <Asignacion cuenta={cuenta} marca={marca} key={marca.id} />
          </div>
        </div>

      </div>
      </div>

       
      </div>
  
    </div>  

    )


  }
}

export default Search;