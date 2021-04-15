import React, {Suspense} from "react";
import {Route, Switch,} from "react-router-dom";

const SignUp = React.lazy(() => import('../pages/SignUp'))
const Login = React.lazy(() => import('../pages/Login'))
const AddTime = React.lazy(() => import('../pages/AddTime'))
const Report = React.lazy(() => import('../pages/Report'))


const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/"
                       render={() =>
                           <Suspense fallback={<div>loading</div>}>
                               <SignUp/>
                           </Suspense>}/>
                <Route exact path="/login"
                       render={() =>
                           <Suspense fallback={<div>loading</div>}>
                               <Login/>
                           </Suspense>}/>
                <Route exact path="/record"
                       render={() =>
                           <Suspense fallback={<div>loading</div>}>
                               <AddTime/>
                           </Suspense>}/>
                <Route exact path="/report"
                       render={() =>
                           <Suspense fallback={<div>loading</div>}>
                               <Report/>
                           </Suspense>}/>
            </Switch>
        </React.Fragment>
    );
};

export default Routes;