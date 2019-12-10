
import React, { Component } from 'react';
import * as $ from 'jquery';
import Repor from './repor'
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';


export class Reporte extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            activeTab: new Array(6).fill('1'),
            documento: 'pushDataMedia.py',
            reportes: [],
            loading: false,
            medio: "FB",
            show: true,
            token: "",
            marcas: [],
            clientes: [],
            marca: 1100,
            usuario: [],
            prueba:[]

        }
        this.envio = this.envio.bind(this);
    }
    async componentDidMount() {

        const resto1 = await fetch("https://jsonplaceholder.typicode.com/users/")
        const prueba = await resto1.json();
        this.setState({ prueba: prueba })



        const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops-*()")
        const token = await resto.json();
        this.setState({ token: token.token })

        const res = await fetch("https://solutionsomg.com/Reporte/Invitado/1271",
            {
                method: 'GET',
                headers: {
                    //this what's exactly look in my postman
                    'Authorization': 'Bearer ' + this.state.token,
                },
                res: this.data
            })

        const reportes = await res.json();
    
        this.setState({ reportes: reportes })
        this.setState({ loading: true });
        
        const res1 = await fetch("https://solutionsomg.com/Reporte/Cliente/1271",
            {
                method: 'GET',
                headers: {
                    //this what's exactly look in my postman
                    'Authorization': 'Bearer ' + this.state.token,
                },
                res1: this.data
            })
        const marcas = await res1.json();
        this.setState({ marcas: marcas })
        let fetchData = () => {
            fetch("https://solutionsomg.com/Reporte/ClienteMarca/1271",
                {
                    method: 'GET',
                    headers: {
                        //this what's exactly look in my postman
                        'Authorization': 'Bearer ' + this.state.token,
                    }
                })
                .then(clientes => clientes.json())
                .then(clientes => {
                    this.setState({ clientes: clientes })
                })

        }

        fetchData()
        this.update = setInterval(fetchData, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.update)

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

    toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
            activeTab: newArray,
        });
    }

    tabPane() {
        var { reportes } = this.state;
        return (
            <div>
                <TabPane tabId="1" className="tabpan1">
                    <Repor medio={this.state.medio} reportes={reportes} />
                </TabPane>
                <TabPane tabId="2" className="tabpan2">
                    <Repor medio={this.state.medio} reportes={reportes} />
                </TabPane>
                <TabPane tabId="3" className="tabpan3">
                    <Repor medio={this.state.medio} reportes={reportes} />
                </TabPane>
                <TabPane tabId="4" className="tabpan4">
                    <Repor medio={this.state.medio} reportes={reportes} />
                </TabPane>
                <TabPane tabId="5" className="tabpan5">
                    <Repor medio={this.state.medio} reportes={reportes} />
                </TabPane>
                <TabPane tabId="6" className="tabpan6">
                    <Repor medio={this.state.medio} reportes={reportes} />
                </TabPane>
            </div>
        );
    }


    reportes() {
        var { loading } = this.state;
        if (loading === false) {

            return (
                <div className="d-flex justify-content-center spinnerload">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else {
            return (
                <TabContent id="datatotales" className="filtrodemeidiolocalestab" activeTab={this.state.activeTab[0]}>
                    <div className="collapsed d-flex justify-flex-start col-12 ml-0 tablasdecolapsosos pl-0 pt-1 pb-1" data-toggle="collapse" aria-expanded="true" >
                        <p className="col-xl-2  mb-0 d-flex flex-column">  Cliente:</p>
                        <p className="col-xl-2 mb-0 d-flex flex-column">  Marca: <span> </span></p>
                        <p className="col-xl-1 mb-0 d-flex flex-column fechadetabla"> Fecha Inicio </p>
                        <p className="col-xl-1 mb-0 d-flex flex-column fechadetabla"> Fecha Fin </p>
                        <div className="col-xl-2 mb-0 d-flex flex-wrap fechadetablas"> <p>Dias</p> <span className="margenderechotabla">Consumidos</span><span>Restantes</span>  </div>
                        <p className="col-xl-1 mb-0 d-flex flex-column  fechadetabla"> KPI.  </p>
                        <p className="col-xl-1 mb-0 d-flex flex-column fechadetablares "> Presupuesto </p>
                    </div>
                    {this.tabPane()}
                </TabContent>
            )
        }
    }

    envio(event) {
        this.update = setInterval(this.fetchData)
        this.setState({ marca: event.target.value });

    }


    contadoresdereportes() {
        var { reportes } = this.state;
        var totalesfb = [];
        var totalesgo = [];
        var totalestw = [];
        var totalesad = [];
        var totalesaf = [];
        var totalesmm = [];


        reportes.find(function (item) {
            if (item.Media === "FB") {
                totalesfb.push(item)
                return null;
            } else if (item.Media === "GO") {
                totalesgo.push(item)
                return null;
            }
            else if (item.Media === "AF") {
                totalesaf.push(item)
                return null;
            }
            else if (item.Media === "MM") {
                totalesmm.push(item)
                return null;
            }
            else if (item.Media === "TW") {
                totalestw.push(item)
                return null;
            }
            else if (item.Media === "AM") {
                totalesad.push(item)
                return null;
            }
            return null;
        });
        $(".fbcont").text(totalesfb.length)
        $(".gocont").text(totalesgo.length)
        $(".afcont").text(totalesaf.length)
        $(".twcont").text(totalestw.length)
        $(".mmcont").text(totalesmm.length)
        $(".adcont").text(totalesad.length)

        return null;
    }

    render() {

        this.contadoresdereportes()
        var { marcas, clientes } = this.state;
        $(".reportesnav").parent().addClass("active");
        return (

            <div id="general" className="col-12 col-xl-11 ml-auto mr-auto p-0">


                <h1 className="col-11 col-xl-10  ml-0 mr-auto text-left">Control de Campañas</h1>
                <form id="filtroSolicitacoes" type="post" name="filtroSolicitacoes" className="container d-flex justify-content-end p-2 flex-wrap align-items-center col-xl-12 col-12">
                    <select data-form="cliente" className="custom-select col-5 col-xl-2 col-md-3 mt-2 mb-2 ml-2" name="filtroStatus" id="filtroStatus" onChange={e => { this.envio(e); this.activarfiltro(e) }}>
                        <option value="">Cuenta</option>
                        {
                            marcas.map(marca => (
                                <option value={marca.id} key={marca.id}>{marca.nombre}</option>
                            ))
                        }
                    </select>
                    <select data-form="marca" className="custom-select col-5 col-xl-2 col-md-3 mt-2 mb-2 ml-2" name="filtroStatus" id="filtroStatus" onChange={this.activarfiltro}>
                        <option value="">Marca</option>
                        {
                            clientes.map(marc => (
                                <option value={marc.id} key={marc.id}>{marc.nombre}</option>
                            ))
                        }
                    </select>
                    <button type="submit" className="btn btn-primary col-12 col-xl-2 " onClick={this.activarfiltro} id="enviofiltro" hidden>Filtrar</button>
                </form>

                <Row className="col-xl-12 col-md-12 col-sm-12 col-12 ml-auto mr-auto mt-1 row  p-0 filtrodetabasdecampaana">
                    <Col xs="12" md="12" className="mb-4">
                        <Nav tabs className="col-12 flex-wrap d-flex">
                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 fbcon"
                                    active={this.state.activeTab[0] === '1'}
                                    onClick={() => { this.toggle(0, '1'); this.setState({ medio: "FB" }) }}
                                >
                                    Facebook
           <i className="fab fa-facebook-f ml-2"> </i>
                                    <span className="fbcont contadorreportes"></span>
                                </NavLink>
                            </NavItem>

                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 fbcon"
                                    active={this.state.activeTab[0] === '2'}
                                    onClick={() => { this.toggle(0, '2'); this.setState({ medio: "GO" }) }}
                                >
                                    Google
       <i className="fab fa-google ml-2"></i>
                                    <span className="gocont contadorreportes"></span>
                                </NavLink>
                            </NavItem>



                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 fbcon"
                                    active={this.state.activeTab[0] === '3'}
                                    onClick={() => { this.toggle(0, '3'); this.setState({ medio: "TW" }) }}
                                >
                                    Twitter
   <i className="fab fa-twitter ml-2"></i>
                                    <span className="twcont contadorreportes"></span>
                                </NavLink>
                            </NavItem>




                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 fbcon"
                                    active={this.state.activeTab[0] === '4'}
                                    onClick={() => { this.toggle(0, '4'); this.setState({ medio: "AM" }) }}
                                >
                                    Adsmovil
<i className="fas fa-phone-square-alt ml-2"></i>
                                    <span className="adcont contadorreportes"></span>
                                </NavLink>
                            </NavItem>


                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 fbcon"
                                    active={this.state.activeTab[0] === '5'}
                                    onClick={() => { this.toggle(0, '5'); this.setState({ medio: "AF" }) }}
                                >
                                    AdForm
<i className="fas fa-ad ml-2"></i>
                                    <span className="afcont contadorreportes"></span>
                                </NavLink>
                            </NavItem>
                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 fbcon"
                                    active={this.state.activeTab[0] === '6'}
                                    onClick={() => { this.toggle(0, '6'); this.setState({ medio: "MM" }) }}
                                >
                                    Media Math
<i className="fab fa-medium ml-2"></i>
                                    <span className="mmcont contadorreportes"></span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        {this.reportes()}
                    </Col>
                </Row>
            </div>

        )
    }
}
export default Reporte;