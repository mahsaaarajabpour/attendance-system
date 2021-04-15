import React, { useState} from "react";
import PageHOC from "../../components/HOC";
import './Login.css'
import LogoImage from '../../assets/image/1.jpg'
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from '../../redux/userData/userData.actions'


function Login() {

    const [users, setUsers] = useState({tel: null, name: ''});
    // const [loginCheck,setLoginCheck]=useState(false);

    const usersInfo = useSelector((state => state.userData.info));
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('4', userInfo)
    // }, [userInfo])

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

    function login(event) {
        event.preventDefault();
        const check = usersInfo.filter(userInfo=>userInfo.name.includes(users.name) && userInfo.tel.includes(users.tel))
        if (check.length>0) console.log('user is login')
        else dispatch(userLogin(users))
    }

    return (
        <PageHOC>
            <div className="login">
                <div className="col-md-8 login-body">
                    <img src={LogoImage} alt="" className="login-image"/>
                    <div className="login-content">
                        <div className="login-header">
                            <p className="login-logo">Timepickers</p>
                            <p>sign in to your account</p>
                        </div>
                        <div className="center">
                            <form className="" onSubmit={login}>
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
                                            className="btn btn-secondary col-lg-12 col-md-12 col-sm-12">Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PageHOC>
    )
}

export default Login