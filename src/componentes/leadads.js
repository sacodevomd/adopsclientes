import React, { Component } from 'react';
import Lead from './lead';
import { Col } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { Row } from 'reactstrap';
import { TabContent } from 'reactstrap';
import { TabPane } from 'reactstrap';
import LeadMal from './leadmal';
import LeadTel from './leadstel';
import Leaddpi from './leaddpi';
import Leadmail from './leadmail';
import $ from 'jquery';


import "react-datepicker/dist/react-datepicker.css";


class Leadads extends Component {

    state = {
        leads: [],
        activeTab: new Array(6).fill('1'),
        duplicados: [],
        startDate: "2019-01-01",
        endDate: "2022-01-01",
        descargar: 1
    }
    async componentDidMount() {

        let fetchData = () => {
            fetch("https://solutionsomg.com/webhoop/Leads/23844069292700195&" + this.state.startDate + "&" + this.state.endDate)
                .then(response => response.json())
                .then(leads => {
                    this.setState({ leads: leads });
                })

            fetch("https://solutionsomg.com/webhoop/Leads/Duplicados/23844069292700195&" + this.state.startDate + "&" + this.state.endDate)
                .then(response => response.json())
                .then(duplicados => {
                    this.setState({ duplicados: duplicados });
                })
        }
        fetchData()
        this.update = setInterval(fetchData, 1000)
    }
    componentWillUnmount() {
       
        clearInterval(this.update)
        console.log(this.state.startDate + "   ASDFAs   " + this.state.endDate)
    }
    
    toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
            activeTab: newArray,
        });
    }// esta funcion activa las tabs por medio
    tabPane() {
        var { leads, duplicados } = this.state;


        var totalesbien = [];
        var totalesmal = [];
        var totaltel = [];
        var totalmail = [];
        var totaldpi = [];
        var totalesduplicados = [];

        duplicados.find(function (lead) {
            totalesduplicados.push(lead);
            return null;
        })

        leads.find(function (lead) {

            if (lead.EstadoGeneral === 1) {
                totalesbien.push(lead)
            }
            if (lead.EstadoGeneral === 0) {
                totalesmal.push(lead)
            }
            if (lead.EstadoTelefono === 0) {
                totaltel.push(lead)
            }
            if (lead.EstadoEmail === 0) {
                totalmail.push(lead)
            }
            if (lead.EstadoDpi === 0) {
                totaldpi.push(lead)
            }

            return null;
        })
        $(".totalesicon").text(totalesbien.length);
        $(".totalesmal").text(totalesmal.length);
        $(".totaletel").text(totaltel.length);
        $(".totalesmail").text(totalmail.length);
        $(".totalesdpi").text(totaldpi.length);
        $(".totalesduplicados").text(totalesduplicados.length);
        return (
            <div>
                <TabPane tabId="1" className="tabpan1 p-0">
                    {leads.map(lead => (<Lead lead={lead} key={lead.id} />))}
                </TabPane>
                <TabPane tabId="2" className="tabpan2 p-0">
                    {leads.map(lead => (<LeadMal lead={lead} key={lead.id} />))}
                </TabPane>
                <TabPane tabId="3" className="tabpan3 p-0">
                    {leads.map(lead => (<LeadTel lead={lead} key={lead.id} />))}
                </TabPane>
                <TabPane tabId="4" className="tabpan3 p-0">
                    {leads.map(lead => (<Leaddpi lead={lead} key={lead.id} />))}
                </TabPane>
                <TabPane tabId="5" className="tabpan3  p-0">
                    {leads.map(lead => (<Leadmail lead={lead} key={lead.id} />))}
                </TabPane>
                <TabPane tabId="6" className="tabpan6 p-0">
                    {duplicados.map(lead => (<Leadmail lead={lead} key={lead.id} />))}
                </TabPane>
            </div>
        );
    }

    handleChange = (value) => {
        this.setState({
            startDate: value
        });


    };
    handleChangeend = (value) => {
        this.setState({
            endDate: value
        });


    };


desacrga(){
  if(this.state.descargar === 1){
    return(
        <a href={"https://annalectbox.com.gt/AdOps/Api/Leads/todos.php?fi=" + this.state.startDate +"&&ff=" + this.state.endDate +"&reporte=" + this.state.descargar}  className="btn btn-primary descarleads ml-auto mr-2 mt-2 mb-2">Descargar Correctos</a>
    )

    }else if(this.state.descargar === 2){

               return(
        <a href={"https://annalectbox.com.gt/AdOps/Api/Leads/todos.php?fi=" + this.state.startDate +"&&ff=" + this.state.endDate +"&reporte=" + this.state.descargar}  className="btn btn-primary descarleads ml-auto mr-2 mt-2 mb-2">Descargar Errores</a>
    )

    }else if(this.state.descargar === 3){

               return(
        <a href={"https://annalectbox.com.gt/AdOps/Api/Leads/todos.php?fi=" + this.state.startDate +"&&ff=" + this.state.endDate +"&reporte=" + this.state.descargar}  className="btn btn-primary descarleads ml-auto mr-2 mt-2 mb-2">Descargar Errores De Teléfono</a>
    )

    }else if(this.state.descargar === 4){

               return(
        <a href={"https://annalectbox.com.gt/AdOps/Api/Leads/todos.php?fi=" + this.state.startDate +"&&ff=" + this.state.endDate +"&reporte=" + this.state.descargar}  className="btn btn-primary descarleads ml-auto mr-2 mt-2 mb-2">Descargar Errores de DPI</a>
    )

    }else if(this.state.descargar === 5){

               return(
        <a href={"https://annalectbox.com.gt/AdOps/Api/Leads/todos.php?fi=" + this.state.startDate +"&&ff=" + this.state.endDate +"&reporte=" + this.state.descargar}  className="btn btn-primary descarleads ml-auto mr-2 mt-2 mb-2">Descargar Errores de Correo</a>
    )

    }else if(this.state.descargar === 6){
               return(
        <a href={"https://annalectbox.com.gt/AdOps/Api/Leads/todos.php?fi=" + this.state.startDate +"&&ff=" + this.state.endDate +"&reporte=" + this.state.descargar}  className="btn btn-primary descarleads ml-auto mr-2 mt-2 mb-2">Descargar Duplicados</a>
    )

    }


    
}
    render() {



        return (
            <Row className="col-xl-12 col-md-12 col-sm-12 col-12 ml-auto mr-auto mt-1 row filtrodetabs p-0">
            <div className="d-flex flex-column contendedoresdefechas ">
         <p>Fecha Inicio</p>
                <input type="date" className="fechafinal"
                    onChange={e => this.handleChange(e.target.value)}
                    placeholder="Fecha inicio"
                />
                </div>
                <div className="d-flex flex-column  contendedoresdefechas ">         <p>Fecha Fin</p>
                <input type="date" className="fechafinal"
                    onChange={e => this.handleChangeend(e.target.value)}
                    placeholder="Fecha fin"
                />
                </div>
{this.desacrga()}
<a href="https://annalectbox.com.gt/AdOps/Api/Leads/todos.php" className="btn btn-success descarleads  mr-2 mt-2 mb-2">Descargar Todos</a>
          
                <Col xs="12" md="12" className="mb-4">
                    <Nav tabs className="col-12 flex-wrap d-flex">

                        <NavItem className="col-6 col-sm-4 col-xl-2">
                            <NavLink className="p-1"
                                active={this.state.activeTab[0] === '1'}
                                onClick={() => { this.toggle(0, '1'); this.setState({descargar:1}) }}
                            >
                                Leads  Correctos
                                <span className="totalesicon ml-1"> </span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="col-6 col-sm-4 col-xl-2">
                            <NavLink className="p-1"
                                active={this.state.activeTab[0] === '2'}
                                onClick={() => { this.toggle(0, '2');  this.setState({descargar:2}) }}
                            >
                                Leads Errores
                                <span className="totalesmal ml-1"> </span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="col-6 col-sm-4 col-xl-2">
                            <NavLink className="p-1"
                                active={this.state.activeTab[0] === '3'}
                                onClick={() => { this.toggle(0, '3');  this.setState({descargar:3}) }}
                            >
                                Errores de Teléfono
                                <span className="totaletel ml-1"> </span>

                            </NavLink>
                        </NavItem>
                        <NavItem className="col-6 col-sm-4 col-xl-2">
                            <NavLink className="p-1"
                                active={this.state.activeTab[0] === '4'}
                                onClick={() => { this.toggle(0, '4');  this.setState({descargar:4}) }}
                            >
                                Errores de DPI
                                <span className="totalesdpi ml-1"> </span>

                            </NavLink>
                        </NavItem>
                        <NavItem className="col-6 col-sm-4 col-xl-2">
                            <NavLink className="p-1"
                                active={this.state.activeTab[0] === '5'}
                                onClick={() => { this.toggle(0, '5');  this.setState({descargar:5}) }}
                            >
                                Errores de Correo
                                <span className="totalesmail ml-1"> </span>

                            </NavLink>
                        </NavItem>
                        <NavItem className="col-6 col-sm-4 col-xl-2">
                            <NavLink className="p-1"
                                active={this.state.activeTab[0] === '6'}
                                onClick={() => { this.toggle(0, '6'); this.setState({descargar:6}) }}
                            >
                                Duplicados
                            <span className="totalesduplicados ml-1"> </span>

                            </NavLink>
                        </NavItem>
                    </Nav>
                    <div className="card-header d-flex justify-content-around col-12 m-auto tablasdeleads text-center">
                        <p className="col-xl-2 mb-0 d-flex flex-column"> Nombre </p>
                        <p className="col-xl-1 mb-0 d-flex flex-column"> Ubicación </p>
                        <p className="col-xl-2 mb-0 d-flex flex-column"> Campaña</p>
                        <p className="col-xl-1 mb-0 d-flex flex-column"> Fecha  </p>
                        <p className="col-xl-2 mb-0 d-flex flex-column "> DPI </p>
                        <p className="col-xl-2 mb-0 d-flex flex-column "> Email</p>
                        <p className="col-xl-1 mb-0 d-flex flex-column "> Plataforma  </p>
                        <p className="col-xl-1 mb-0 d-flex flex-column "> Teléfono  </p>
                    </div>
                    <TabContent id="tabsdeprecios" activeTab={this.state.activeTab[0]}>
                        {this.tabPane()}
                    </TabContent>
                </Col>


            </Row>
        )

    }

}
export default Leadads;