import React, {useState} from "react";
import PageHOC from "../../components/HOC";
import './signUp.css'
import LogoImage from '../../assets/image/1.jpg'
import {useDispatch, useSelector} from "react-redux";
import {userSignUp} from '../../redux/userData/userData.actions'
import {NavLink} from "react-router-dom";


function SignUp() {

    const [users, setUsers] = useState({tel: null, name: ''});
    // const [loginCheck,setLoginCheck]=useState(false);
    const usersInfo = useSelector((state => state.userData.info));
    const dispatch = useDispatch();

    function handleChange(event, type) {
        event.preventDefault();
        switch (type) {
            case 'tel':
                setUsers({
                    ...users,
                    tel: event.target.value
                })
                break
            case 'name':
                setUsers({
                    ...users,
                    name: event.target.value
                })
                break
            default:
                return users
        }

    }

    function signUp(event) {
        event.preventDefault();
        const check = usersInfo.filter(userInfo => userInfo.name.includes(users.name) && userInfo.tel.includes(users.tel))
        if (check.length > 0) console.log('sign-up')
        else dispatch(userSignUp(users))
    }

    return (
        <PageHOC>
            <div className="sign-up">
                <div className="col-md-8 sign-up-body">
                    <img src={LogoImage} alt="" className="sign-up-image"/>
                    <div className="sign-up-content">
                        <div className="sign-up-header">
                            <p className="sign-up-logo">Timepickers</p>
                            <p>create account</p>
                        </div>
                        <div className="center">
                            <form className="" onSubmit={signUp}>
                                <div className="form-group input-group">
                                    <input className="form-control" type="tex"
                                           placeholder="phone"
                                           onChange={event => handleChange(event, 'tel')}
                                           required
                                    />
                                </div>
                                <div className="form-group input-group">
                                    <input className="form-control" type="text"
                                           placeholder="name"
                                           onChange={event => handleChange(event, 'name')}
                                           required
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit"
                                            className="btn btn-secondary col-lg-12 col-md-12 col-sm-12">Sign Up
                                    </button>
                                    <p className="p-link">Do you have an account? <NavLink to="/login">click here</NavLink></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PageHOC>
    )
}

export default SignUp