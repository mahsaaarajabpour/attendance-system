import React, {useEffect, useState} from "react";
import PageHOC from "../../components/HOC";
import LogoImage from "../../assets/image/1.jpg";
import './login.css'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {userLogin} from '../../redux/userData/userData.actions'

function Login() {

    const usersInfo = useSelector((state => state.userData.info));
    // const userLoginInfo = useSelector((state => state.userData.userLoginInfo));

    const [tel, setTel] = useState()
    const dispatch = useDispatch();


    function handleChange(event) {
        event.preventDefault();
        setTel(event.target.value)
    }

    function login(event) {
        event.preventDefault();
        const x = usersInfo.filter(item => {
            if (item.tel === tel) return item
            else return []
        })
        dispatch(userLogin(x))
    }

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
                            <form onSubmit={login}>
                                <div className="form-group input-group">
                                    <input className="form-control" type="tex"
                                           placeholder="phone"
                                           onChange={event => handleChange(event)}
                                           required
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit"
                                            className="btn btn-secondary col-lg-12 col-md-12 col-sm-12">Login
                                    </button>
                                    <div className="p-link">
                                        <p>You don't have any account? <NavLink to="/">signup here</NavLink></p>
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