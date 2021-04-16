import React, {useEffect} from "react";
import PageHOC from "../../components/HOC";
import './report.css';
import {useSelector} from "react-redux";

function Report() {
    const tasks = useSelector(state => state.userTasks.tasks);

    return (
        <PageHOC>
            <div className="report">
                <div className="card col-md-8 p-0 text-center">
                    <div className="card-header">
                        <h4 className="text-xs-center">Report all tasks</h4>
                    </div>
                    <div className="card-body">

                        {tasks.length > 0 ?
                            tasks.map((task, index) => <div key={index} className="tasks-row">
                                <div className="row border-bottom">
                                    <p className="col-md-4"><b>start time :</b> {task.startTime}</p>
                                    <p className="col-md-4"><b>end time :</b> {task.endTime}</p>
                                    <p className="col-md-4"><b>remotely :</b> {task.remote}</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="task-description">description</p>
                                        <p className="m-0 pt-2 text-center">{task.description}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="task-description">user name</p>
                                        <p className="m-0 pt-2 text-center">{task.userName}</p>
                                    </div>
                                </div>
                            </div>)
                            : <p> there is no result</p>}
                    </div>
                </div>
            </div>
        </PageHOC>
    )
}

export default Report;