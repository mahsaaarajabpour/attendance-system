import React, {useEffect, useRef, useState} from "react";
import PageHOC from "../../components/HOC";
import './addTime.css'
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../../redux/userTasks/tasks.action";
import {NavLink} from "react-router-dom";
import {userLogOut} from "../../redux/userData/userData.actions";

function AddTime() {

    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userData.info)
    const userLoginInfo = useSelector(state => state.userData.userLoginInfo)

    const [currentTime, setCurrentTime] = useState('')
    const [currentDay, setCurrentDay] = useState('')
    const [timeInfo, setTimeInfo] = useState({remote: 'no', description: ''})
    const [tasks, setTasks] = useState([])
    // const [addedTime, setAddedTime] = useState(false)

    const Hours = () => {
        let x = [];
        for (let i = 1; i <= 24; i++) {
            x.push(i)
        }
        return x
    }
    const Minutes = () => {
        let x = [];
        for (let i = 0; i <= 60; i++) {
            x.push(i)
        }
        return x
    }

    useEffect(() => {
        Time()
    })

    const unMounted = useRef(false);
    useEffect(() => {
        return () => {
            unMounted.current = true;
        };
    }, []);

    function Time() {
        let days = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه'];

        const updateTime = () => {
            let today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            if (s < 10) {
                s = '0' + s;
            }
            if (m < 10) {
                m = '0' + m;
            }
            if (h < 10) {
                h = '0' + h;
            }
            let time = h + ":" + m + ':' + s;
            if (!unMounted.current) {
                setCurrentTime(time)
                let dayName = days[today.getDay()];
                setCurrentDay(dayName)
            }
        }
        setInterval(updateTime, 1000)
    }

    function handleItems(event, eventType, timeType) {
        // eslint-disable-next-line default-case
        switch (eventType) {
            case 'remotely':
                let remote
                if (event.target.checked) remote = 'yes'
                else remote = 'no'
                return setTimeInfo({
                    ...timeInfo,
                    remote: remote
                })

            case 'description':
                return setTimeInfo({
                    ...timeInfo,
                    description: event.target.value
                })

            case 'hour':
                if (timeType === 'start') {
                    return setTimeInfo({
                        ...timeInfo,
                        startTime: event
                    })
                } else if (timeType === 'end') {
                    return setTimeInfo({
                        ...timeInfo,
                        endTime: event
                    })
                }
                break

            case 'minute':
                if (timeType === 'start') {
                    return setTimeInfo({
                        ...timeInfo,
                        startTime: timeInfo.startTime + ':' + event
                    })
                } else if (timeType === 'end') {
                    return setTimeInfo({
                        ...timeInfo,
                        endTime: timeInfo.endTime + ':' + event
                    })
                }
                break
        }

    }

    function emptyInput() {
        Array.from(document.querySelectorAll("textarea")).forEach(
            (textarea) => (textarea.value = "")
        );
        Array.from(document.querySelectorAll("select")).forEach(
            (select) => (select.selectedIndex = 0)
        );
        document.getElementById('remote').checked = false;
    }

    function addTime(event) {
        event.preventDefault();
        let z = {
            ...timeInfo,
            userName: userInfo[userInfo.length - 1].name,
            userTel: userInfo[userInfo.length - 1].tel
        }
        setTimeInfo(z)
        let x = tasks.concat(z)
        setTasks(x)
        dispatch(addTask(z))
        emptyInput()
        // setAddedTime(true)
    }

    function logOut() {
        dispatch(userLogOut())
    }

    return (
        <PageHOC>
            <div className="add-time">
                <div className="contents col-md-8">
                    <div className="card output">
                        <p><b>Local Time: </b>{currentTime}</p>
                        <p>{currentDay}</p>
                    </div>
                    {currentDay === 'جمعه' || currentDay === 'پنج شنبه' ?
                        <div className="row m-5 p-2 border time-login-panel border border-danger">
                            <div className="col-md-12 ">
                                <p className="row justify-content-center m-3 ">Sorry, today is a holiday.</p>
                            </div>
                        </div>
                        :
                        userLoginInfo.length === 0 ?
                            <div className="row m-5 p-2 border time-login-panel">
                                <div className="col-md-12 ">
                                    <p className="row justify-content-center">you should login first </p>
                                    <NavLink className="row justify-content-center btn btn-secondary ml-3"
                                             to="/login"
                                    >login</NavLink>
                                </div>
                            </div>
                            :
                            <div className="card-content" id="given">
                                <p><b className="mr-3">Hi, {userLoginInfo.name} !</b>
                                    <NavLink className="p-link" to="/login" onClick={logOut}>Do you want to
                                        logout?</NavLink>
                                </p>
                                <form onSubmit={addTime}>

                                    {/*start*/}
                                    <div className="form-row justify-content-center timePickers start-time">
                                        <select className="custom-select col-md-4 col-sm-12 picker"
                                                id="startHourSelector"
                                                onChange={event => handleItems(event.target.value, 'hour', 'start')}>
                                            <option>Hour</option>
                                            {Hours().map((value) =>
                                                <option key={value} value={value}>{value}</option>
                                            )}
                                        </select>
                                        <select className="custom-select col-md-4 col-sm-12 picker"
                                                id="startMinuteSelector"
                                                onChange={event => handleItems(event.target.value, 'minute', 'start')}>
                                            <option defaultValue="Minute">Minute</option>
                                            {Minutes().map((value) =>
                                                <option key={value} value={value}>{value}</option>
                                            )}
                                        </select>
                                    </div>

                                    {/*end*/}
                                    <div className="form-row justify-content-center timePickers end-time">
                                        <select className="custom-select col-md-4 col-sm-12 picker"
                                                id="endHourSelector"
                                                onChange={event => handleItems(event.target.value, 'hour', 'end')}>
                                            <option defaultValue="Hour">Hour</option>
                                            {Hours().map((value) =>
                                                <option key={value} value={value}>{value}</option>
                                            )}
                                        </select>
                                        <select className="custom-select col-md-4 col-sm-12 picker"
                                                id="endMinuteSelector"
                                                onChange={event => handleItems(event.target.value, 'minute', 'end')}>
                                            <option>Minute</option>
                                            {Minutes().map((value) =>
                                                <option key={value} value={value}>{value}</option>
                                            )}
                                        </select>
                                    </div>

                                    {/*description*/}
                                    <div className="form-row justify-content-center timePickers">
                                <textarea className="form-control col-md-8 picker"
                                          rows="3"
                                          placeholder="description"
                                          required
                                          onChange={event => handleItems(event, 'description')}
                                ></textarea>
                                    </div>

                                    {/*remote*/}
                                    <div className="form-row justify-content-center timePickers">
                                        <label>
                                            <span className="label-text">Do you working remotely?</span>
                                            <input type="checkbox"
                                                   name="remotely"
                                                   id="remote"
                                                   onChange={event => handleItems(event, 'remotely')}
                                            />
                                        </label>
                                    </div>

                                    {/*submit*/}
                                    <button type="submit" className="btn btn-secondary m-1">Submit</button>
                                </form>
                            </div>
                    }
                </div>
            </div>
        </PageHOC>
    )
}

export default AddTime;