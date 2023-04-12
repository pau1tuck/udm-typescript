import React from "react";
import TrackBoxImage from "./TrackBoxImage";

export default function TrackBox() {
    return (
        <div>
            <div className="w-64 h-72 m-1 flex flex-col justify-start items-center rounded-md bg-darkGray ">
                <TrackBoxImage />
            </div>
        </div>
    );
}
