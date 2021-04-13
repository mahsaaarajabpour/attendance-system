import React, {Suspense} from "react";
import {Route, Switch,} from "react-router-dom";


const Login = React.lazy(() => import('../pages/Login'))

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/"
                       render={() =>
                           <Suspense fallback={<div>loading</div>}>
                               <Login/>
                           </Suspense>}/>
            </Switch>
        </React.Fragment>
    );
};

export default Routes;