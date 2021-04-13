import React, { Fragment } from "react";
import Header from "../Header";

const PageHOC = ({ children }) => {
    return (
        <Fragment >
            <Header/>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </Fragment>
    );
};

export default PageHOC;
