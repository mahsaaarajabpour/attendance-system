import React from "react";

function SubmitTask(props){
    return (
        <form onSubmit={props.addTime}>

            {/*start*/}
            <div className="form-row justify-content-center timePickers start-time">
                <select className="custom-select col-md-4 col-sm-12 picker"
                        id="startHourSelector"
                        onChange={event => props.handleItems(event.target.value, 'start', 'hour')}>
                    <option>Hour</option>
                    {props.Hours.map((value) =>
                        <option key={value} value={value}>{value}</option>
                    )}
                </select>
                <select className="custom-select col-md-4 col-sm-12 picker"
                        id="startMinuteSelector"
                        onChange={event => props.handleItems(event.target.value, 'start', 'minute')}>
                    <option defaultValue="Minute">Minute</option>
                    {props.Minutes.map((value) =>
                        <option key={value} value={value}>{value}</option>
                    )}
                </select>
            </div>

            {/*end*/}
            <div className="form-row justify-content-center timePickers end-time">
                <select className="custom-select col-md-4 col-sm-12 picker"
                        id="endHourSelector"
                        onChange={event => props.handleItems(event.target.value, 'end', 'hour')}>
                    <option defaultValue="Hour">Hour</option>
                    {props.Hours.map((value) =>
                        <option key={value} value={value}>{value}</option>
                    )}
                </select>
                <select className="custom-select col-md-4 col-sm-12 picker"
                        id="endMinuteSelector"
                        onChange={event => props.handleItems(event.target.value, 'end', 'minute')}>
                    <option>Minute</option>
                    {props.Minutes.map((value) =>
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
                                          onChange={event => props.handleItems(event, 'description')}
                                ></textarea>
            </div>

            {/*remote*/}
            <div className="form-row justify-content-center timePickers">
                <label>
                    <span className="label-text">Do you working remotely?</span>
                    <input type="checkbox"
                           name="remotely"
                           id="remote"
                           onChange={event => props.handleItems(event, 'remotely')}
                    />
                </label>
            </div>

            {/*submit*/}
            <button type="submit" className="btn btn-secondary m-1">Submit</button>
        </form>

    )
}
export default SubmitTask