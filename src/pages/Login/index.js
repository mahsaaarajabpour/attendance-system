import React from "react";
import PageHOC from "../../components/HOC";
import LogoImage from "../../assets/image/1.jpg";
import './login.css'

function Login() {
    return (
        <PageHOC>
            <div className="login">
                <div className="col-md-4 login-body">
                    <img src={LogoImage} alt="" className="login-image"/>
                    <div className="login-content">
                        <div className="login-header">
                            <p className="login-logo">Timepickers</p>
                            <p>sign in to your account</p>
                        </div>
                        <div className="center">
                            <form className="">
                                <div className="form-group input-group">
                                    <input className="form-control" type="tex"
                                           placeholder="phone"
                                        // onChange={event => handleChange(event, 'tel')}
                                           required
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit"
                                            className="btn btn-secondary col-lg-12 col-md-12 col-sm-12">Login
                                    </button>
                                    <div className="p-link">
                                        <p>You don't have any account? <a href="/">signup here</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PageHOC>
    )
}

export default Login;