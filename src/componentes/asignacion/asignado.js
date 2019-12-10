import React, { Component } from 'react';
import axios from 'axios';
import {

    Card,
    CardBody
} from "mdbreact";
class Asignado extends Component {

    state = {
        isChecked: false,
        usuario:[],
        token:[]
    }

    async componentDidMount() {

    const user = await fetch('http://127.0.0.1/user/?id=1090')
    const data = await user.json();
    this.setState({ usuario: data[0].idusuario })


    const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops")
    const token = await resto.json();
    this.setState({ token: token.token })

    }

    enviodatos() {
        axios({
            method: 'post',
            url: "https://solutionsomg.com/task/InsertAccountxMarca/" +
            this.props.marca.AccountID + 
            "&" + 
            this.props.marcapadre + 
            "&1" +
             "&" + 
             this.state.usuario,
            headers: {'Authorization': 'Bearer '+ this.state.token},
            validateStatus: (status) => {
              return true; // I'm always returning true, you may want to do it depending on the status received
            },
          }).catch(error => {
      console.log(error)
          }).then(response => {
              // this is now called!
             
          });

    }
    enviodatos1() {

        axios({
            method: 'post',
            url: "https://solutionsomg.com/task/InsertAccountxMarca/" + 
            this.props.marca.AccountID +
             "&" + 
             this.props.marcapadre + 
             "&0" + 
             "&" +
             this.state.usuario,
            headers: {'Authorization': 'Bearer '+ this.state.token},
            validateStatus: (status) => {
              return true; // I'm always returning true, you may want to do it depending on the status received
            },
          }).catch(error => {
      console.log(error)
          }).then(response => {
              // this is now called!
             
          });

    }


    AccountID() {
        if (this.props.marca.AccountID === null) {
            return (
                <p className="col-2">No tiene nada asignado</p>
            )
        } else {
            return (
                <p className="col-3 datoaccount">{this.props.marca.AccountID}</p>
            )
        }
    }

    medio() {
        if (this.props.marca.Medio === null) {
            return (
                <p className="col-2">No tiene Medio asignado</p>
            )
        } else {
            return (
                <p className="col-3 datoAccount">{this.props.marca.Medio}</p>
            )
        }
    }
    marca() {
        if (this.props.marca.marca === null) {
            return (
                <p className="col-2">No tiene marca asignada</p>
            )
        } else {
            return (
                <p className="col-3 datomarca">{this.props.marca.marca}</p>
            )
        }
    }

    nombre() {
        if (this.props.marca.nombre === null) {
            return (
                <p className="col-2">No tiene Nombre asignado</p>
            )
        } else {
            return (
                <p className="col-3 datoidmarca">{this.props.marca.nombre}</p>
            )
        }
    }


    check() {

        //  if (this.props.marca.marca === this.props.marcapadre){
        return ("checked")
        // }

    }

    check1() {
        if (this.props.marca.marca === this.props.marcapadre) {
            return (
                <input type="checkbox" className="checkbox " checked onChange={this.enviodatos1.bind(this)} />
            )
        } else {
            return (

                <input type="checkbox" className="checkbox " onChange={this.enviodatos.bind(this)} />
            )
        }

    }

    render() {

        var { marca } = this.props;

        return (

            <div className="col-12 p-0 filtrodatos mt-2 ml-auto mr-auto  justify-content-between">
                <Card key={marca.AccountID} >
                    <CardBody className="col-12 p-0 mt-2 ml-auto mr-auto row justify-content-between ">
                        <div className="button r col-1 ml-2" id="button-9">
                            {this.check1()}
                            <div className="knobs">
                                <span></span>
                            </div>
                            <div className="layer"></div>
                        </div>


                        {this.nombre()}
                        {this.AccountID()}
                        {this.medio()}





                    </CardBody>
                </Card>
            </div>


        )
    }
}


export default Asignado;