import React, { Component } from 'react';
import Bitacora from './bitacora';

export class Historial extends Component {

state= {
  data :[],
  token: ' '
}

async componentDidMount() {

  const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops-*()")
  const token = await resto.json();
  this.setState({ token: token.token })

   const res1 = await fetch("https://solutionsomg.com/task/Bitacora",
        {
            method: 'GET', 
            headers:{
                 //this what's exactly look in my postman
                'Authorization': 'Bearer '+ this.state.token,
            },
            res1: this.data
        })
   const data = await res1.json();
   this.setState({data: data})
}



    render() {

        return (
            <div className="App apphistorial" >
        
            <div id="general" className="col-12 col-xl-11 ml-auto mr-auto p-0">
      
              <h1 className="col-11 col-xl-10 m-auto text-left">Bitacora</h1>
             <div className="col-12">               
              <Bitacora />
              </div>

             
            </div>
        
          </div>  
        )
    }
}
export default Historial;