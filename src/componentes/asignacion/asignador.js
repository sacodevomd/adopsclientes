import React, {Component} from 'react';
import Asignado from './asignado';
  class Asignacion extends Component {
    state = { marcas: [],
              marca : this.props.cuenta,
              token:[]
     };
   
     async componentDidMount() {


      const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops")
      const token = await resto.json();
      this.setState({ token: token.token })
      // const res = await fetch('https://solutionsomg.com/task/AccountxMarca/145308' + this.props.cuenta)
      const res = await fetch('https://solutionsomg.com/task/AccountxMarca/'+ this.props.cuenta,
      {
        method: 'GET',
        headers: {
          //this what's exactly look in my postman
          'Authorization': 'Bearer ' + this.state.token,
        },
        res: this.data
      })
      const marcas = await res.json();
      this.setState({ marcas: marcas })
    }
  

    render() {
    var {marcas} = this.state;
if (this.props.marca === 1){
  
this.componentDidMount()
      return (marcas.map(marca => <Asignado marca={marca} key={marca.AccountsID} marcapadre={this.props.cuenta} />)
      )
      
}else{
  return(
  <div hidden></div>
  )
}
    }
  }
  

  export default Asignacion;