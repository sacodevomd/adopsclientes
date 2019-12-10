import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import $ from 'jquery'
class Login extends Component {

  state = {
    usuarios: [
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


  handleChange(e) {

  }

  onSubmit = (e) => {
    e.preventDefault();


    var { usuarios } = this.state;

    $.each(usuarios, function (i, v) {
      if (v.user === $("#usuario").val() && v.pass === $("#pass").val()) {
        window.location.href = "/AdOps/ErroresPlataformas/errores";

      } else {
        console.log("No existe")
      }
    });

  }

  render() {

    $("nav, .contenedomenus").remove();
    $(".App > div").removeClass("col-11").addClass("col-12");
    return (
      <div className=" login wrapper col-xl-5 d-flex justify-content-center align-items-center m-auto col-md-10 col-11">
        <form className="form-signin col-12">
          <img className="logoimg" src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/logog.svg" alt="" />

          <input type="text" autoComplete="username" className="form-control mt-2" name="username" placeholder="Correo o Usuario" required="" autoFocus="" id="usuario" />
          <input type="password" autoComplete="current-password" className="form-control mt-2" name="password" placeholder="Contraseña" required="" id="pass" />
          <p id="passreal" hidden></p>
          <button className="btn btn-lg btn-primary btn-block mt-2" type="submit" onClick={this.onSubmit}>Ingresar</button>
        </form>
      </div>
    )
  }
}

export default Login;



