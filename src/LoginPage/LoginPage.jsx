import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { authenticationService } from '../_services';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: []
        };

        // redirect to home if already logged in
        if (authenticationService.currentUserValue) { 
            this.props.history.push('/controladops');
        }
    }


    render() {
        return (
         
                   <div className=" login wrapper col-xl-5 d-flex justify-content-center align-items-center m-auto col-md-10 col-11 flex-column">
     
            <img className="logoimg" src="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/menu/logog.svg" alt="" />

                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('Username is required'),
                        password: Yup.string().required('Password is required')
                    })}
                    onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
                        setStatus();
                        authenticationService.login(username, password)
                            .then(
                                user => {
                                    const { from } = this.props.location.state || { from: { pathname: "/controladops" } };
                                    this.props.history.push(from);
                                },
                                error => {
                                    setSubmitting(false);
                                    setStatus(error);
                                }
                            );
                    }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <Form className="col-xl-9 col-12 m-auto text-center">
                            <div className="form-group mt-4">
                                <label htmlFor="username">Usuario</label>
                                <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Ingresar</button>
                               
                            </div>
                            {status &&
                                <div className={'alert alert-danger'}>{status}</div>
                            }
                        </Form>
                    )}
                />
            </div>
        )
    }
}

export { LoginPage }; 