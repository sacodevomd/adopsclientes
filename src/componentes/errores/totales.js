import React, { Component } from 'react';
import '../../assets/css/error.css';
import $ from 'jquery';
export class Totales extends Component {
    intervalID;
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            totales: [],
            token: " ",
            usuario: []
        }

        this.activarnom = this.activarnom.bind(this);

    }
    async componentDidMount() {
        const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops-*()")
        const token = await resto.json();
        this.setState({ token: token.token })



        const user = await fetch('http://127.0.0.1/user/?id=1090')
        const data1 = await user.json();
        this.setState({ usuario: data1[0].idusuario })

        this.getData();
        const res = await fetch('https://solutionsomg.com/Errores/Count/' + this.state.usuario,
            {
                method: 'GET',
                headers: {
                    //this what's exactly look in my postman
                    'Authorization': 'Bearer ' + this.state.token,
                },
                res: this.data
            })
        const data = await res.json();
        this.setState({ totales: data })

    }



    componentWillUnmount() {
        /*
          stop getData() from continuing to run even
          after unmounting this component. Notice we are calling
          'clearTimeout()` here rather than `clearInterval()` as
          in the previous example.
        */
        clearTimeout(this.intervalID);
    }

    getData = () => {
        fetch('https://solutionsomg.com/Errores/Count/' + this.state.usuario,
            {
                method: 'GET',
                headers: {
                    //this what's exactly look in my postman
                    'Authorization': 'Bearer ' + this.state.token,
                }
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ data: [...data] });
                // call getData() again in 5 seconds
                this.intervalID = setTimeout(this.getData.bind(this), 500);

            });
    }



    activarnom() {
        $("#filtroStatus").val("Error de nomenclatura");
        $("#enviofiltro").click();
        $(".fbcon span").hide();
        $(".totalfbn").show();
        $(".gocon span").hide();
        $(".totalgon").show();
        $(".mmcon span").hide();
        $(".totalmmn").show();
        $(".twcon span").hide();
        $(".totaltwn").show();
        $(".occon span").hide();
        $(".totalocn").show();
        $(".occon span").hide();
        $(".totalocn").show();
        $(".amcon span").hide();
        $(".totalamn").show();
        $(".totalafn").show();

    }
    activarubi() {
        $("#filtroStatus").val("Error de ubicacion");
        $("#enviofiltro").click();
        $(".fbcon span").hide();
        $(".totalfbu").show();
        $(".gocon span").hide();
        $(".totalgou").show();
        $(".occon span").hide();
        $(".totalocu").show();
        $(".mmcon span").hide();
        $(".totalmmu").show();
        $(".twcon span").hide();
        $(".totaltwu").show();
        $(".amcon span").hide();
        $(".totalamu").show();
        $(".totalafu").show();

    }

    activarinv() {

        $("#filtroStatus").val("Error de inversion");
        $("#enviofiltro").click();
        $(".fbcon span").hide();
        $(".totalfbinv").show();
        $(".occon span").hide();
        $(".gocon span").hide();
        $(".totalgoinv").show();

        $(".mmcon span").hide();
        $(".totalmminv").show();
        $(".twcon span").hide();
        $(".totalocinv").show();
        $(".totaltwinv").show();
        $(".amcon span").hide();
        $(".totalaminv").show();
        $(".totalafinv").show();

    }

    activarcon() {
        $("#filtroStatus").val("Error de consumo");
        $("#enviofiltro").click();

        $(".nav-tabs li  span").hide();

        $(".totalfbco").show();
        $(".totaltwco").show();
        $(".totalocco").show();
        $(".totalafco").show();
        $(".totalgoco").show();
        $(".totalmmco").show();
        $(".amcon span").hide();
        $(".totalamco").show();
        $(".totalafco").show();

    }
    totaacti() {
        $("#filtroStatus").val("");
        $("#enviofiltro").click();
        $(".fbcon span").hide();
        $(".totalfb").show();
        $(".gocon span").hide();
        $(".totalgo").show();
        $(".mmcon span").hide();
        $(".totalmm").show();
        $(".twcon span").hide();
        $(".totaltw").show();
        $(".occon span").hide();
        $(".totaloc").show();
        $(".amcon span").hide();
        $(".totalam").show();
        $(".totalaf").show();
    }

    activaroc() {
        $("#filtroStatus").val("Error de orden de compra");
        $("#enviofiltro").click();

        $(".fbcon  span").hide();
        $(".twcon span").hide();
        $(".mmcon span").hide();
        $(".occon span").hide();
        $(".gocon span").hide();
        $(".totalgooc ").show();
        $(".totalfboc").show();
        $(".totaltwoc").show();
        $(".totalmmoc").show();
        $(".totalococ").show();
        $(".amcon span").hide();
        $(".totalamoc").show();
        $(".totalafoc").show();
    }
    render() {
        return (
            <div className="Totales col-12 ml-auto mr-auto d-flex flex-wrap justify-content-around mt-1 p-0">
                <div className="col-xl-4 col-md-12 col-sm-12  mb-1 d-flex flex-wrap justify-content-around contadorerrores contenedordeerroresclaves " >
                    <button className="col-xl-12 col-md-6 col-6 mb-1  col-6  contadorerrores" onClick={this.totaacti}>
                        <div className="card border-left-primary shadow h-100 py-2"  >
                            <div className="card-body  pb-0 pt-0">
                                <div className="row no-gutters align-items-center">
                                    <div className="col col d-flex align-items-center">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-0">Total de Errores
                </div>

                                        <p className="h5 mb-0 font-weight-bold text-gray-800  totalnumeroerrores erroresinversiontotal">

                                        </p>

                                    </div>
                                    <div className="col-4">
                                        <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/alert.png" alt="inversion" className="totalerroresalert" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>





                    <button className="col-xl-12 col-md-6 col-6 mb-1  col-6  contadorerrores" onClick={this.activarcon} >
                        <div className="card border-left-danger shadow h-100 py-2"  >
                            <div className="card-body  pb-0 pt-0">
                                <div className="row no-gutters align-items-center">
                                    <div className="col col d-flex align-items-center">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-0">Errores de Consumo
            </div>

                                        <p className="h5 mb-0 font-weight-bold text-danger totalnumeroerrores totaldeerroresporconsumo">

                                        </p>

                                    </div>
                                    <div className="col-4">
                                        <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/cuidado.png" alt="inversion" className="totalerroresalert" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>

                </div>
                <div className="col-xl-8 d-flex flex-wrap justify-content-around">
                    <button className="col-xl-6 col-md-6 col-6 mb-1  col-6  contadorerrores" id="noacti" onClick={this.activarnom} >
                        <div className="card border-left-primary shadow h-100 py-2"  >
                            <div className="card-body  pb-0 pt-0">
                                <div className="row no-gutters align-items-center">
                                    <div className="col col d-flex align-items-center">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-0">Errores de Nomenclatura
                            </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800 totalnumeroerrores erroresinversion totaldeerroresnomeclatura" >
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/letter.png" alt="inversion" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>


                    <button className="col-xl-6 col-md-6 col-6 mb-1 contadorerrores" id="inacti" onClick={this.activarinv}>
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body  pb-0 pt-0">
                                <div className="row no-gutters align-items-center">
                                    <div className="col col d-flex align-items-center">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-0">Errores de Inversión
                                </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800 totalnumeroerrores erroresinversion totaldeerroresdeinversion"></div>
                                    </div>
                                    <div className="col-4">
                                        <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/dollar.png" alt="inversion" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>


                    <button className="col-xl-6 col-md-6 col-6 mb-1 contadorerrores" id="ubacti" onClick={this.activarubi}>
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body  pb-0 pt-0">
                                <div className="row no-gutters align-items-center">
                                    <div className="col col d-flex align-items-center ">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-0">Errores de Ubicación
</div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-4">
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800 totalnumeroerrores erroresubicacion totaldeerroresdeubnicacion"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/location.png" alt="ubicacion" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="col-xl-6 col-md-6  col-6 mb-1 contadorerrores" id="ubacti" onClick={this.activaroc}>
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body  pb-0 pt-0">
                                <div className="row no-gutters align-items-center">
                                    <div className="col col d-flex align-items-center ">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-0">Errores de Orden de compra
</div>
                                        <div className="row no-gutters align-items-center">


                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800 totalnumeroerrores erroresubicacion totaldeerroresdeordenesdecompra"></div>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/oc.png" alt="ubicacion" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        )

    }
}
export default Totales