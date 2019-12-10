import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './Error/Error';
import Reporte from './reporte/reportes';
import Nav from './nav';
import Header from './header';
import Leadads from './leadads';
import Resultado from './resultados/resultado';

class Routers extends Component {
     state = {
          productos : [],
          terminoBusqueda : '',
          usuario:[],
          log:[],
          usuarioactivado:0,
          loading:false,   usuarios: [
               {
                 "user": "edessociales.andrearendon@gmail.com",
                 "pass": "db3w2xjooxvp",
               },
               {
                 "user": "canalesespecializados@gmail.com",
                 "pass": "ylm5niqcr7cb"
         
               },
               {
                 "user": "andrea_rendon@bantrab.net.gt",
                 "pass": "r7cbdb3w2xss"
               }, {
         
                 "user": " maria_cermeno@bantrab.net.gt",
                 "pass": "zesiutllh8tg"
               }, {
         
                 "user": "  tatiana_meneses@bantrab.net.gt",
                 "pass": "1kfwvb3ex9pu"
               }, {
         
                 "user": " andrea_rendon@bantrab.net.gt",
                 "pass": "5z7zpkykt8jr"
               },
               {
                 "user": "admin",
                 "pass": "admin"
               },
               { "user":"wendy_santacruz@bantrab.net.gt",
               "pass":"ven6fnbq"
                  } 
             ]
     }

     async componentDidMount() {

          const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops-*()")
        const token = await resto.json();
        this.setState({ token: token.token })

        }
     render() { 

          return ( 
               <BrowserRouter>
               <div className="App d-flex" >
               <Nav />
               <div className="d-flex flex-column col-11 p-0">
               <Header user={this.state.user} />         
                         <Switch>          
                              <Route exact path="/controladops" render={() => (
                                <div>
                                   <Reporte id="divdereporte" />
                                   <div id="iframe">
<Resultado />
                                   </div>
                                   <div id="divdelead" >

                              
                               <div className="divdelead">
                                   <Leadads />
                                   </div>
                                   </div>
                                   </div>
                                   )} />
                                 
                              <Route component={Error} />
                         </Switch>
                 </div>
                 </div>
               </BrowserRouter>
           )
     }
}
 
export default Routers;