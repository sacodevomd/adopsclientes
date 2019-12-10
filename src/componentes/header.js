import React, { Component } from 'react';
import $ from 'jquery';
import { history } from '../_helpers';
import { authenticationService } from '../_services';
import '../assets/css/error.css';
export class Header extends Component {
    sideaction() {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
    }
    state = {
        usuario: []
    }
    async componentDidMount() {

        const resto = await fetch("https://solutionsomg.com/task/Token/api-flask-adops-*()")
        const token = await resto.json();
        this.setState({ token: token.token })


        const user = await fetch('http://127.0.0.1/user/?id=1090')
        const data = await user.json();
        this.setState({ usuario: data })


    }
    user(){
        var { usuario } = this.state;
        return(usuario.map(user => (
                <div className="datosdelusuario" key={user.idusuario}>
                <p>Bantrab</p>

                </div>
            )))
        
    }

    logout() {
        authenticationService.logout();
        history.push('/controladops/login');
    }
    render() {
        
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-1 static-top shadow">
                <link ></link>
                <button id="sidebarToggleTop" className="btn btn-link  rounded-circle mr-3" onClick={this.sideaction}>
                    <i className="fa fa-bars"></i>
                </button>
                <p onClick={this.logout}>Cerrar sesion</p>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <span className="nav-link dropdown-toggle" href="/" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </span>
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <div className="topbar-divider d-none d-sm-block"></div>
{this.user()}
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small" id="nmbreuser">{this.props.user} </span>
                            <img className="img-profile rounded-circle" src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/user.jpg" alt="userimg" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">


                            <a className="dropdown-item" href="https://annalectbox.com.gt/ArchivosIndex/ajax/cerrar.php" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Cerrar Sesión
              </a>
                        </div>
                    </li>

                </ul>

            </nav>

        )
    }
}
export default Header ;