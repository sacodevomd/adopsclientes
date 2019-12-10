import React, {Component} from 'react';
import {Nav} from 'reactstrap';
import Marca from '../reporte/marca';
import { Col } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { Row } from 'reactstrap';
import { TabContent } from 'reactstrap';
import { TabPane } from 'reactstrap';
import $ from 'jquery';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export class Form extends Component {

  constructor(props){
    super(props);
  
this.state = {
  medio : 'FB',
  activeTab: new Array(6).fill('1'),
  token:[]
}
this.crear = this.crear.bind(this);
  }
async componentDidMount() {


    const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops")
    const token = await resto.json();
    this.setState({ token: token.token })
}
toggle(tabPane, tab) {
  const newArray = this.state.activeTab.slice()
  newArray[tabPane] = tab
  this.setState({
      activeTab: newArray,
  });
}


tabPane() {
  return (
    <tab>
          <TabPane tabId="1" className="tabpan1  d-flex justify-content-around flex-wrap tabpaneaccount" >
              <Marca medio={this.state.medio} key="1"/>
          </TabPane>
          <TabPane tabId="3" className="tabpan2  d-flex justify-content-around flex-wrap tabpaneaccount">
          <Marca medio={this.state.medio} key="2" />
            </TabPane>
          <TabPane tabId="2" className="tabpan3  d-flex justify-content-around flex-wrap tabpaneaccount">
          <Marca medio={this.state.medio}  key="3"  />
          </TabPane>
          <TabPane tabId="4" className="tabpan4  d-flex justify-content-around flex-wrap tabpaneaccount">
          <Marca medio={this.state.medio}  key="4" />
          </TabPane>
          <TabPane tabId="5" className="tabpan5  d-flex justify-content-around flex-wrap tabpaneaccount">
          <Marca medio={this.state.medio}   key="5" />
          </TabPane>
          <TabPane tabId="6" className="tabpan6  d-flex justify-content-around flex-wrap tabpaneaccount">
          <Marca medio={this.state.medio}  key="6" />
          </TabPane>
          <TabPane tabId="7" className="tabpan7  d-flex justify-content-around flex-wrap tabpaneaccount">
          <Marca medio={this.state.medio}  key="7" />
      </TabPane>
      </tab>
  );
}
nuevacuenta(){
  $( "#Formaularioregistro" ).fadeOut( "100" );
  setTimeout(function(){
    
    $("#datosnuevos").fadeIn();;
}, 100);

}
crear(){
  var id = $(".campodeid").val();
  var Descripcion = $(".campodedescription").val();
  var medio = $(".selecciondemedio").val();
  var pais = $(".pais").val();
  

  axios({
    method: 'post',
    url: "https://solutionsomg.com/task/Account/"+ id +"&" +Descripcion + "&" + medio  + "&" + pais,
    headers: { 'authorization': `Bearer ${this.state.token}` }
  })
  .then(response => {

    const MySwal = withReactContent(Swal)
    console.log(MySwal);
    Swal.fire({
      type: 'success',
      title: 'Éxito',
      text: 'Se ha creado la cuenta' + Descripcion ,
      footer: '<a href>ADOPS </a>'
    })

  })
  .catch(error => {
      console.log(error);
  })

  $("#datosnuevos").fadeOut();
  $("#Formaularioregistro").fadeIn();

 $(".campodeid").val('');
  $(".campodedescription").val('');
  $(".selecciondemedio").empty();
  $(".pais").val('');

}
cancelar(){
  $("#datosnuevos").fadeOut();
  $("#Formaularioregistro").fadeIn();

 
}

    render()
    {

        return(
            <div className="App" >
           
            <div id="general" className="col-12 col-xl-11 ml-auto mr-auto p-0">
      

              <div className="row col-11 m-auto titulodemarcasasig">
<h1>Cuentas de Plataformas</h1>
<i className="fas fa-plus" onClick={this.nuevacuenta}></i>
</div>
              <div id="Formaularioregistro">
              
              <Row className="col-xl-11 col-md-12 col-sm-12 col-12 ml-auto mr-auto mt-1 row filtrodetabs p-0">
              <Col xs="12" md="12" className="mb-4">
                  <Nav tabs className="col-12 flex-wrap d-flex">
                      <NavItem className="col-6 col-sm-4 col-xl-2">
                          <NavLink className="p-1 fbcon"
                              active={this.state.activeTab[0] === '1'}
                              onClick={() => { this.toggle(0, '1'); this.setState({ medio: "FB" }) }}
                          >
                              Facebook
                    

                          </NavLink>
                      </NavItem>
                      <NavItem className="col-6 col-sm-4 col-xl-2">
                          <NavLink className="p-1 gocon"
                              active={this.state.activeTab[0] === '2'}
                              onClick={() => { this.toggle(0, '2'); this.setState({ medio: "GO" }) }}
                          >
                              Google
                        
                         </NavLink>
                      </NavItem>
                      <NavItem className="col-6 col-sm-4 col-xl-2">
                          <NavLink className="p-1 twcon"
                              active={this.state.activeTab[0] === '3'}
                              onClick={() => { this.toggle(0, '3'); this.setState({ medio: "TW" }) }}
                          >
                              Twitter
                        <i className="fab fa-twitter ml-2"></i>
                     
                          </NavLink>
                      </NavItem>
                      <NavItem className="col-6 col-sm-4 col-xl-2">
                          <NavLink className="p-1 mmcon"
                              active={this.state.activeTab[0] === '4'}
                              onClick={() => { this.toggle(0, '4'); this.setState({ medio: "MM" }) }}
                          >
                              Media Math
                  <i className="fab fa-medium ml-2"></i>
                         
                          </NavLink>
                      </NavItem>
               

                      <NavItem className="col-6 col-sm-4 col-xl-2">
                      <NavLink className="p-1 amcon"
                          active={this.state.activeTab[0] === '7'}
                          onClick={() => { this.toggle(0, '7'); this.setState({ medio: "AM" }) }}
                      >
                          Ads Movil
                          <i className="fas fa-phone-square-alt ml-2"></i>
                      </NavLink>
                  </NavItem>



                      <NavItem className="col-6 col-sm-4 col-xl-2">
                          <NavLink className="p-1 occon"
                              active={this.state.activeTab[0] === '6'}
                              onClick={() => { this.toggle(0, '6'); this.setState({ medio: "AF" }) }}
                          >
                              Adform
                              <i className="fas fa-ad ml-2"></i>
                      
                          </NavLink>
                      </NavItem>
                  </Nav>
                  <TabContent id="datademarca" activeTab={this.state.activeTab[0]}>
                      {this.tabPane()}
                  </TabContent>
              </Col>


          </Row>
     
              </div>
              <div id="datosnuevos" className="col-xl-9 col-md-10 col-sm-10 col-12 m-auto" style={{"display":"none"}}>
            <form className="d-flex justify-content-around flex-wrap">

            <input type="text"  placeholder="ID" className="campodeid col-3"/>
            <input type="text"  placeholder="Descripción" className="campodedescription col-3"/>
            <input type="text"  placeholder="País" className="pais col-3"/>
            
            
            <select className="selecciondemedio col-2">
            <option  disabled>Medio</option>
  <option value="FB">Facebook</option>
  <option value="GO">Google</option>
  <option  value="TW">Twitter</option>
  <option value="AF">Adform</option>
</select>
<p className="btn btn-danger col-xl-2 col-md-10 col-sm-10 col-12 m-2" onClick={this.cancelar}>Cancelar</p>
<p className="btn btn-primary col-xl-2 col-md-10 col-sm-10 col-12  m-2" onClick={this.crear}>Crear</p>
            </form>
              </div>
           </div>

        
          </div>  
        )
    }
}
export default Form;