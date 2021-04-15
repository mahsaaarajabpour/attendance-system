import React, {useEffect, useRef, useState} from "react";
import PageHOC from "../../components/HOC";
import './addTime.css'
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../../redux/userTasks/tasks.action";

function AddTime() {

    const [currentTime, setCurrentTime] = useState('')
    const [timeInfo, setTimeInfo] = useState({remote: 'no', description: ''})
    const [tasks, setTasks] = useState([])
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userData.info)


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
            if (!unMounted.current) setCurrentTime(time)
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
                // let d = new Date();
                if (timeType === 'start') {
                    // d.setHours(timeInfo.startTime, event);
                    return setTimeInfo({
                        ...timeInfo,
                        startTime: timeInfo.startTime + ':' + event
                    })
                } else if (timeType === 'end') {
                    // d.setHours(timeInfo.endTime, event);
                    return setTimeInfo({
                        ...timeInfo,
                        endTime: timeInfo.endTime + ':' + event
                    })
                }
                break
        }

    }

    function addTime(event) {
        event.preventDefault();

        console.log('c', timeInfo)
        let z={
            ...timeInfo,
            name: userInfo[userInfo.length - 1].name,
            tel: userInfo[userInfo.length - 1].tel
        }
        setTimeInfo(z)

        let x = tasks.concat(z)

        console.log('3', z)
        setTasks(x)
        dispatch(addTask(z))
    }

    return (
        <PageHOC>
            <div className="add-time">
                <div className="contents col-md-8">
                    <div className='card output'>
                        <p><b>Local Time: </b>{currentTime}</p>
                    </div>
                    {userInfo.length === 0 ?

                        <div className="row m-5 p-2 border time-login-panel">
                            <div className="col-md-12 ">
                                <p className="row justify-content-center">you should login first </p>
                                <a className="row justify-content-center btn btn-secondary ml-3" href="/">login</a>
                            </div>
                        </div> :

                        <div className='card' id='given'><p>
                            <b>hi {userInfo[userInfo.length - 1].name}</b>
                        </p>
                            <form onSubmit={addTime}>

                                {/*start*/}
                                <div className="form-row justify-content-center timePickers start-time">
                                    <select className="custom-select col-md-4 col-sm-12 picker" id="startHourSelector"
                                            onChange={event => handleItems(event.target.value, 'hour', 'start')}>
                                        <option>Hour</option>
                                        {Hours().map((value) =>
                                            <option key={value} value={value}>{value}</option>
                                        )}
                                    </select>
                                    <select className="custom-select col-md-4 col-sm-12 picker" id="startMinuteSelector"
                                            onChange={event => handleItems(event.target.value, 'minute', 'start')}>
                                        <option defaultValue="Minute">Minute</option>
                                        {Minutes().map((value) =>
                                            <option key={value} value={value}>{value}</option>
                                        )}
                                    </select>
                                </div>

                                {/*end*/}
                                <div className="form-row justify-content-center timePickers end-time">
                                    <select className="custom-select col-md-4 col-sm-12 picker" id="endHourSelector"
                                            onChange={event => handleItems(event.target.value, 'hour', 'end')}>
                                        <option defaultValue="Hour">Hour</option>
                                        {Hours().map((value) =>
                                            <option key={value} value={value}>{value}</option>
                                        )}
                                    </select>
                                    <select className="custom-select col-md-4 col-sm-12 picker" id="endMinuteSelector"
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
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </PageHOC>
    )
}

export default AddTime;