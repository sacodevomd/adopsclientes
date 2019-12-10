import React, { Component } from 'react';
import '../assets/css/nav.css'
import '../assets/fontawesome-free/css/all.min.css';
import $ from 'jquery';
 class Navs extends Component {

    sideaction(){


    $("body").toggleClass("sidebar-toggled");
    $(".submenu").toggleClass("toggled");

     
    }

    sideaction1(){
        $("#accordionSidebar").toggleClass("toggled");
        $(".submenu").toggleClass("toggled");
    }

    sideaction2(){
        $(".submenu").toggleClass("toggled");
        }


control(){
    $("#general").show();
    $("#divdelead").hide();
    $("#iframe").hide();
    $(".contenedomenus li").removeClass("active");
    $(".reporteitem").addClass("active");
}
lead(){
    $("#general").hide();
    $("#divdelead").show();
    $("#iframe").hide();
    $(".contenedomenus li").removeClass("active");
    $(".leaditem").addClass("active");
}
       
iframe(){
    $("#general").hide();
    $("#divdelead").hide();
    $("#iframe").show();
    $(".contenedomenus li").removeClass("active");
    $(".reporteiframe").addClass("active");
}
       
         
    render(){
        $("#sidebarToggleTop").hide();
    return (
<div className="contenedomenus col-1 p-0 d-flex" onMouseEnter={this.sideaction1}  onMouseLeave={this.sideaction1}>
            <ul className="navbar-nav bg-gradient-primary  sidebar sidebar-dark accordion toggled" id="accordionSidebar">
           
                <div className="sidebar-brand d-flex align-items-center justify-content-center m-0">
                    <div className="sidebar-brand-icon ">
                       
                <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/logog.svg" alt="erroes" className="logog"/>
                    </div>
                </div>
                <div className="sidebar-heading">
                
</div>

<li className="nav-item reporteitem">
  <p className="nav-link reportesnav " onClick={this.control}>
  <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/control.svg" alt="erroes"/>
                                
      <span>Control Campaña</span></p>
</li>

<li className="nav-item leaditem">
  <p className="nav-link " onClick={this.lead}>
  <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/tareas.svg" alt="erroes"/>
                                
      <span>Lead Ads</span></p>
</li>
<li className="nav-item reporteiframe">
  <p className="nav-link " onClick={this.iframe}>
  <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/materiales.svg" alt="erroes"/>
                                
      <span>Reporte</span></p>
</li>

{ 
            //     <li className="nav-item">
            //     <a className="nav-link" href="https://annalectbox.com.gt/MFC/">
                   
            //     <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/mfc.svg" alt="erroes" className="logomfc"/>
            //         <span>MFC</span></a>
            // </li>
         
                  
         
                    


//                             <div className="sidebar-heading">
//                                 Operaciones
//     </div>

//     <li className="nav-item">
//     <a className="nav-link reportesnav" href="/AdOps/ErroresPlataformas/reporte">
//     <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/control.svg" alt="erroes"/>
                                  
//         <span>Control Campaña</span></a>
// </li>
//                             <li className="nav-item erroresnav ">
//                                 <a className="nav-link" href="/AdOps/ErroresPlataformas/">
//                                     <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/errores.svg" alt="erroes"/>
//                                     <span>Errores</span></a>
//                             </li>

//                             <li className="nav-item">
//                                 <a className="nav-link" href="/AdOps/ErroresPlataformas/">
//                                 <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/tareas.svg" alt="erroes"/>
                                  
//                                     <span>Tareas</span></a>
//                             </li>
                            
                            // <li className="nav-item">
                            //     <a className="nav-link" href="/AdOps/ErroresPlataformas/resultados">
                            //     <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/resultado.svg" alt="erroes"/>
                                  
                            //         <span>Resultados</span></a>
                            // </li>

                        //     <li className="nav-item">
                        //     <a className="nav-link" href="/AdOps/ErroresPlataformas/materiales">
                        //     <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/materiales.svg" alt="erroes"/>
                              
                        //         <span>Materiales</span></a>
                        // </li>
    
                    //     <li className="nav-item medioslocalenav">
                    //     <a className="nav-link" href="/AdOps/ErroresPlataformas/medios">
                    //     <img src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/materiales.svg" alt="erroes"/>
                          
                    //         <span>Medios Locales</span></a>
                    // </li>


                                // <div className="text-center d-none d-md-inline mt-3">
                                //     <button className="rounded-circle border-0" id="sidebarToggle" onClick={this.sideaction2}>
                                //     <i className="fas fa-cogs"></i>
                                //     </button>
                                // </div>

    }



  </ul>

  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled  submenu" id="submenu" hidden>
           
              
   
            
         


                            <li className="nav-item active">
                                <a className="nav-link" href="/AdOps/ErroresPlataformas/administracion">
                                    <img src={require("./img/accountsxmarca.png")} alt="erroes"/>
                                    <span>Marcas Cuentas</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/AdOps/ErroresPlataformas/cuentas">
                                <img src={require("./img/cuenta.png")} alt="erroes"/>
                                  
                                    <span>Admin Cuentas</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/AdOps/ErroresPlataformas/bitacora">
                                <img src={require("./img/History.png")} alt="erroes"/>
                                  
                                    <span>Bitacora</span></a>
                            </li>

                    
  </ul>
  </div>
                        )
                    
                    }
                }
export default Navs;