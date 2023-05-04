import React from "react";
import { MdNumbers } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import TrackRowData from "./TrackRowData";

export default function TrackRowHeader() {
    return (
        <div className="w-full">
            <TrackRowData
                trackRowDataProps={{
                    number: <MdNumbers />,
                    image: null,
                    titleArtist: "Title / Artist",
                    label: "Label",
                    controls: null,
                    duration: <BiTime />,
                }}
            />
        </div>
    );
}
