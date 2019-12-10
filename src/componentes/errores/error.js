import React, { Component } from 'react';
import axios from 'axios';
import '../../assets/css/error.css';


// import ReactTooltip  from 'react-tooltip';
import ReactSimpleTooltip from "react-simple-tooltip"
class Error extends Component {

    state = {
        estadoactual: true,
        user: this.props.user,
        omitir : this.props.omitir,
        verificar: this.props.verificar,
        erroractual: true,
        token:[]
    }


    async  componentDidMount(){   
    const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops-*()")
    const token = await resto.json();
    this.setState({ token: token.token }) 

    }

    validacionuser() {
        if (this.props.user === 1090 || this.props.user === 1177 || this.props.user === 1058  || this.props.user === 1156  || this.props.user === 1086    ) {
            return {
                display: 'flex'
            }
        } else {
            return {

                display: 'none'
            }
        }
    }

validacionuser1() {

    if (this.props.user === 1090 || this.props.user === 1177 || this.props.user === 1058  || this.props.user === 1156  || this.props.user === 1086    ) {
            return {
                display: 'flex'
            }
        } else {
            return {

                display: 'none'
            }
        }
    }

    elimnandoerror() {
        var { erroractual } = this.state;
        if (erroractual === true) {


            return {
                backgroundImage: "url(https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/estado2.png)",
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50%',
                backgroundColor: 'transparent',
                border: '0px',
                height: '50px'
            }

        } else {
            return {
                backgroundImage: "url(https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/estado22.png)",
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50%',
                backgroundColor: 'transparent',
                border: '0px',
                height: '50px'
            }
        }
    }

    estiloestado() {

        var { estadoactual } = this.state;
        if (estadoactual === true) {

            if (this.props.error.Estado === "1") {
                return {
                    backgroundImage: "url(https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/estado2.png)",
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50%',
                    backgroundColor: 'transparent',
                    border: '0px',
                    height: '50px'
                }
            } else {
                return {
                    backgroundImage: "url(https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/estado22.png)",
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50%',
                    backgroundColor: 'transparent',
                    border: '0px',
                    height: '50px'
                }
            }

        } else {
            return {
                backgroundImage: "url(https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/estado22.png)",
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50%',
                backgroundColor: 'transparent',
                border: '0px',
                height: '50px'
            }
        }
    }

    consumo() {
        if (this.props.error.TipoErrorID === "15") {
            return (
                <p id="nombreerror" className="text-left font-weight-bold mb-1 text-danger"> {this.props.error.DescripcionError} <span id="fechaerror" className="ml-2 font-weight-normal">{this.props.error.fecha}</span></p>
            )
        } else {
            return (
                <p id="nombreerror" className="text-left font-weight-bold mb-1"> {this.props.error.DescripcionError} <span id="fechaerror" className="ml-2 font-weight-normal">{this.props.error.fecha}</span></p>

            )
        }
    }
 
    oc() {
        if (this.props.error.Media === "OC") {
            if (this.props.error.plataforma === "GO") {

                return (

                    <i className="fab fa-google ml-2"></i>

                )
            } else if (this.props.error.plataforma === "FB") {
                return (
                    <i className="fab fa-facebook-f ml-2"></i>
                )
            } else if (this.props.error.plataforma === "TW") {
                return (
                    <i className="fab fa-twitter ml-2"></i>
                )
            } else {
                return (
                    <i className="fab fa-medium ml-2"></i>
                )
            }

        } else {
            return null;
        }
    }


linkspormedio() {
// if(this.props.error.TipoErrorID === "15"){
        if (this.props.error.Media === "FB") {
            return (
                <div id="texterror" className="col-12 col-sm-6 col-md-3 col-xl-6 text-center">

                <ReactSimpleTooltip
                    arrow={5}
                    background="#2b2b2b"
                    border="#ccc"
                    color="#fff"
                    content="Ver campaña"
                    fadeDuration={0}
                    fadeEasing="linear"
                    fixed={false}
                    fontFamily="inherit"
                    fontSize="10px"
                    offset={0}
                    padding={5}
                    placement="top"
                    radius={5}
                    zIndex={1}
                >
                    <p id="errortext" className="text-break" data-tip="Ir a la Cuenta">
                        <a href={"https://business.facebook.com/adsmanager/manage/campaigns?act=" + this.props.error.idcuenta + '&selected_campaign_ids=' + this.props.error.CampaingID} target='_blank' rel="noopener noreferrer">
                            {this.props.error.Error}

                            <i className="fas fa-sign-out-alt ml-2"></i>
                        </a>
                    </p>
                </ReactSimpleTooltip>
                <p>
                {this.props.error.Comentario}
                </p>
                </div>
            )
        } else if (this.props.error.Media === "GO") {

            return (
                <div id="texterror" className="col-12 col-sm-6 col-md-3 col-xl-6 text-center">
                <ReactSimpleTooltip
                    arrow={5}
                    background="#2b2b2b"
                    border="#ccc"
                    color="#fff"
                    content="Ver campaña"
                    fadeDuration={0}
                    fadeEasing="linear"
                    fixed={false}
                    fontFamily="inherit"
                    fontSize="10px"
                    offset={0}
                    padding={5}
                    placement="top"
                    radius={5}
                    zIndex={1}
                >
                    <p id="errortext" className="text-break" data-tip="Ir a la Cuenta">
                        <a href={" https://ads.google.com/aw/overview?campaignId=" + this.props.error.CampaingID + '&__e=' + this.props.error.idcuenta} target='_blank' rel="noopener noreferrer">
                            {this.props.error.Error}
                            <i className="fas fa-sign-out-alt ml-2"></i>
                        </a>
                    </p>
                </ReactSimpleTooltip>
                <p>
                {this.props.error.Comentario}
                </p>
                </div>
            )
        }


        else {
            return (
                <div id="texterror" className="col-12 col-sm-6 col-md-3 col-xl-6 text-center">
                <p id="errortext" className="text-break">
                    {this.props.error.Comentario}
                </p>
                </div>
            )
        }
    // }
    // else{


    //     if (this.props.error.Media === "FB") {
    //         return (
    //             <div id="texterror" className="col-12 col-sm-6 col-md-3 col-xl-6 text-center">

    //             <ReactSimpleTooltip
    //                 arrow={5}
    //                 background="#2b2b2b"
    //                 border="#ccc"
    //                 color="#fff"
    //                 content="Ver campaña"
    //                 fadeDuration={0}
    //                 fadeEasing="linear"
    //                 fixed={false}
    //                 fontFamily="inherit"
    //                 fontSize="10px"
    //                 offset={0}
    //                 padding={5}
    //                 placement="top"
    //                 radius={5}
    //                 zIndex={1}
    //             >
    //                 <p id="errortext" className="text-break" data-tip="Ir a la Cuenta">
    //                     <a href={"https://business.facebook.com/adsmanager/manage/campaigns?act=" + this.props.error.idcuenta + '&selected_campaign_ids=' + this.props.error.CampaingID} target='_blank' rel="noopener noreferrer">
    //                         {this.props.error.Comentario}

    //                         <i className="fas fa-sign-out-alt ml-2"></i>
    //                     </a>
    //                 </p>
    //             </ReactSimpleTooltip>
    //             </div>
    //         )
    //     } else if (this.props.error.Media === "GO") {

    //         return (
    //             <div id="texterror" className="col-12 col-sm-6 col-md-3 col-xl-6 text-center">
    //             <ReactSimpleTooltip
    //                 arrow={5}
    //                 background="#2b2b2b"
    //                 border="#ccc"
    //                 color="#fff"
    //                 content="Ver campaña"
    //                 fadeDuration={0}
    //                 fadeEasing="linear"
    //                 fixed={false}
    //                 fontFamily="inherit"
    //                 fontSize="10px"
    //                 offset={0}
    //                 padding={5}
    //                 placement="top"
    //                 radius={5}
    //                 zIndex={1}
    //             >
    //                 <p id="errortext" className="text-break" data-tip="Ir a la Cuenta">
    //                     <a href={" https://ads.google.com/aw/overview?campaignId=" + this.props.error.CampaingID + '&__e=' + this.props.error.idcuenta} target='_blank' rel="noopener noreferrer">
    //                         {this.props.error.Comentario}

    //                         <i className="fas fa-sign-out-alt ml-2"></i>
    //                     </a>
    //                 </p>
    //             </ReactSimpleTooltip>
    //             </div>
    //         )
    //     }


    //     else {
    //         return (
    //             <div id="texterror" className="col-12 col-sm-6 col-md-3 col-xl-6 text-center">
    //             <p id="errortext" className="text-break">
    //                 {this.props.error.Comentario}
    //             </p>
    //             </div>
    //         )
    //     }

    // }
    
    }
    linkerrorid() {
        if (this.props.error.Media === "FB") {

            return (

                <ReactSimpleTooltip
                    arrow={5}
                    background="#2b2b2b"
                    border="#ccc"
                    color="#fff"
                    content="Ver cuenta"
                    fadeDuration={1}
                    fadeEasing="linear"
                    fixed={false}
                    fontFamily="inherit"
                    fontSize="10px"
                    offset={0}
                    padding={5}
                    placement="top"
                    radius={5}
                    zIndex={1}
                >
                    <p className="mb-0">
                        <a href={"https://business.facebook.com/adsmanager/manage/campaigns?act=" + this.props.error.idcuenta} target='_blank' rel="noopener noreferrer"> {this.props.error.cuenta} <span>{this.props.error.idcuenta} </span></a> <i className="fas fa-sign-out-alt ml-2"></i>
                    </p>
                </ReactSimpleTooltip>
            )
        } else if (this.props.error.Media === "GO") {
            return (
                <ReactSimpleTooltip
                    arrow={5}
                    background="#2b2b2b"
                    border="#ccc"
                    color="#fff"
                    content="Ver cuenta"
                    fadeDuration={1}
                    fadeEasing="linear"
                    fixed={false}
                    fontFamily="inherit"
                    fontSize="10px"
                    offset={0}
                    padding={5}
                    placement="top"
                    radius={5}
                    zIndex={1}
                >
                    <p className="mb-0">

                        <a href={"  https://ads.google.com/aw/overview?__e=" + this.props.error.idcuenta} target='_blank' rel="noopener noreferrer"> {this.props.error.cuenta} <span>{this.props.error.idcuenta} </span></a> <i className="fas fa-sign-out-alt ml-2"></i>
                    </p>
                </ReactSimpleTooltip>
            )
        }

        else {
            return (
                <p className="mb-0">{this.props.error.cuenta} <span>{this.props.error.idcuenta} </span></p>
            )
        }
    }
    clickMe(error) {
        axios
            .post("https://annalectbox.com.gt/AdOps/Api/Errors/DataPlatforms/v1/RevisionEstado/?id=" + error.iderror + "&token=Q2FkZW5hZGVvbWl0aXJlcnJvcmVz")
            .then(response => {
            })
            .catch(error => {
                console.log(error);
            })
        this.setState({ estadoactual: false })
    }

    borrarerror(error) {
        axios({
            method: 'post',
            url: "https://solutionsomg.com/Errores/Omitir/" + error.iderror  +  "&" + this.props.user,
            headers: {'Authorization': 'Bearer '+ this.state.token},
            validateStatus: (status) => {
              return true; // I'm always returning true, you may want to do it depending on the status received
            },
          }).catch(error => {
      console.log(error)
          }).then(response => {
              // this is now called!
              console.log(response)
          });
        this.setState({ erroractual: false })


    }
    render() {
        const { error } = this.props;
        if (error.Media === this.props.medio && error.Estado !== "0" ) {
            return (
                <div className="col-12 m-2 mt-3 contendedordelerror p-0" key={error.iderror}  cliente={error.cliente} estado={error.GrupoError} tipouser={error.tipousuario} marca={error.marca} id={error.iderror}>
                    <div className="tipodeerror col-12 text-left m-0 font-weight-bold text-primary card-header py-1 d-flex justify-content-between" id="marca" >  {this.linkerrorid()} <p>{error.Camapingname}</p></div>
                 
                    <div id="contenedorerror" className="row col-12 m-auto pt-1 pb-1"  >
                        <div id="imagenass" className="col-12 col-sm-12 col-md-2 col-xl-1">
                            <img src={"https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/" + error.Icono} alt="" /> </div>

                        <div id="datoserrores" className=" col-md-4 col-12 col-sm-6 col-md-3 col-xl-3">
                            {this.consumo()}
                      
                        </div>
                        {this.oc()}

                            {this.linkspormedio()}
                       
                       
                        <ReactSimpleTooltip
                            arrow={5}
                            background="#2b2b2b"
                            border="#ccc"
                            color="#fff"
                            content="Verificar Error"
                            fadeDuration={1}
                            fadeEasing="linear"
                            fixed={false}
                            fontFamily="inherit"
                            fontSize="10px"
                            offset={0}
                            padding={5}
                            placement="top"
                            radius={5}
                            zIndex={1}

                            style={this.validacionuser1()}
                        >
                            <button onClick={this.clickMe.bind(this, error)} id="imagenas"  className="col-8 col-sm-2 col-md-1 aquelestil d-none" style={this.estiloestado()}></button>
                        </ReactSimpleTooltip>
                        <div id="administradorbtn" style={this.validacionuser()}>
                            <ReactSimpleTooltip
                                arrow={5}
                                background="#2b2b2b"
                                border="#ccc"
                                color="#fff"
                                content="Eliminar error Administrador"
                                fadeDuration={1}
                                fadeEasing="linear"
                                fixed={false}
                                fontFamily="inherit"
                                fontSize="10px"
                                offset={0}
                                padding={5}
                                placement="top"
                                radius={5}
                                zIndex={1}
                            >
                                <button onClick={this.borrarerror.bind(this, error)} id="imagenas" className="col-8 col-sm-2 col-md-1 botonerroractualizado" > <i className="fas fa-check-double"></i></button>
                            </ReactSimpleTooltip>
                        </div>
                    </div>

                </div>
            )
        } else {
            return null;

        }
    }
}
export default Error;