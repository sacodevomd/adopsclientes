import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { Row } from 'reactstrap';
import { TabContent } from 'reactstrap';
import { TabPane } from 'reactstrap';
import Med from './medi';
export class Tabs extends Component {

  state = {
        errores: [],
        show: true,
        activeTab: new Array(6).fill('1'),
        estado: "ACTIVE",
        fbin: '',
        Totalessss: ''
    }

    toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
            activeTab: newArray,
        });
    
    
    }

  

    tabPane() {
        var {estado} = this.state
        return (
            <div>
                <TabPane tabId="1" className="tabpan1">
                 <Med marcas={this.props.marcas} reportes={this.props.reportes}  estado={estado} />
                </TabPane>
                <TabPane tabId="2" className="tabpan2">
                <Med marcas={this.props.marcas}  reportes={this.props.reportes}  estado={estado}/>
               </TabPane>
              
               </div>
        );
    }
 
    render() {

        return (         
                <Row className="col-xl-12 col-md-12 col-sm-12 col-12 ml-auto mr-auto mt-1 row filtrodetabs   p-0">
                    <Col xs="12" md="12" className="mb-4">
                        <Nav tabs className="col-12 flex-wrap d-flex">
                            <NavItem className="col-6 col-sm-4 col-xl-2">
                                <NavLink className="p-1 fbcon"
                                    active={this.state.activeTab[0] === '1'}
                                    onClick={() => { this.toggle(0, '1'); this.setState({ estado: 1 }) }}
                                >
                                    Resultado
                                </NavLink>
                            </NavItem> 
                            <NavItem className="col-6 col-sm-4 col-xl-2">
                            <NavLink className="p-1 fbcon"
                                active={this.state.activeTab[0] === '2'}
                                onClick={() => { this.toggle(0, '2'); this.setState({ estado: 0 }) }}
                            >
                                Por aprobar
                            </NavLink>
                        </NavItem>               
                        </Nav>
                        <TabContent id="datatotales" activeTab={this.state.activeTab[0]}>
                        <div className="card border-left-primary shadow m-2 py-2 datosdelreporteisual">
<div className="card-body  pb-0 pt-0">
<div className="row no-gutters align-items-center justify-content-around">
<div className="col col-xl-10 col-md-10 col-sm-10 d-flex align-items-around flex-wrap ">
<p className="text-xs col-xl-1 col-md-6 col-sm-10 col-10 font-weight-bold text-primary text-uppercase mb-0 justify-content-around">
Odc</p>
<p className="text-xs col-xl-3 col-md-6 col-sm-10 col-10 font-weight-bold text-primary text-uppercase mb-0">Cliente</p>
<p className="text-xs col-xl-2 col-md-6 col-sm-10 col-10 font-weight-bold text-primary text-uppercase mb-0">Medio</p>
<p className="text-xs col-xl-2 col-md-6 col-sm-10 col-10 font-weight-bold text-primary text-uppercase mb-0">Campana</p>
<p className="text-xs col-xl-2 col-md-6 col-sm-10 col-10 font-weight-bold text-primary text-uppercase mb-0">Mes</p>
<p className="text-xs col-xl-1 col-md-6 col-sm-10 col-10 font-weight-bold text-primary text-uppercase mb-0">Inicio</p>
<p className="text-xs col-xl-1 col-md-6 col-sm-10 col-10 font-weight-bold text-primary text-uppercase mb-0">Fin</p>
</div><div className="col-1">
Acción
</div></div></div></div>
                            {this.tabPane()}
                        </TabContent>
                    </Col>
                </Row>
        )


    }
}

export default Tabs
