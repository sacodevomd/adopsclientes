import React, { Component } from "react";
export class Dato extends Component {
contenido(){
  var {data} = this.props;

  if(this.props.data.Resultado === "Success"){
    return(
      <div className="card border-left-success  mt-2 mb-2 ml-auto mr-auto bitacoradacarda col-5">
      <div className="card-body card-body d-flex justify-content-between  col-12  p-2">
      <p className="col-3 p-0">{data.CreateDate}</p>
      <p className="col-3">{data.Operacion}</p>
{data.documento}
      <p className="col-4">{data.Resultado}</p>
      <p className="col-1"><i className="fas fa-check-circle checkesitobitacora"></i></p>
      </div>
      </div>
    )
  }else{
    return(
  
      <div className="card border-left-danger  mt-2 mb-2 ml-auto mr-auto bitacoradacarda col-5">
      <div className="card-body  d-flex justify-content-between col-12   p-2">
   
      <p className="col-3 p-0">{data.CreateDate}</p>
      <p className="col-3">{data.Operacion}</p>
      {data.documento}
      <p className="col-4">{data.Resultado}</p>
      <p className="col-1"><i className="fas fa-times-circle dangerbitaora"></i></p>
      </div>
      </div>
    )
  }
}

  render(){
if (this.props.data.Documento === this.props.documento){
    return this.contenido()
}
else {
    return null;
}
    
  }
}

export default Dato;
