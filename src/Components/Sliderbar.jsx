import React from "react";
import initialFiles from "./data";
import FileName from "./FileName";
import "../Style/Sliderbar.scss";

const Sliderbar = () => {
    return (
        <>
            <div className="main">
                <FileName data={initialFiles} />
            </div>
        </>
    );
};

export default Sliderbar;
