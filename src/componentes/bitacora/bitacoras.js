
import React, { Component } from 'react';
import Dato from './createRowData';

export class Bitacoras extends Component {

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
    var {data} = this.props;
    return (data.map(data =><Dato data={data} documento={this.props.documento} />
         ))

    }
}
export default Bitacoras;