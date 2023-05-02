import React from "react";
import { MdNumbers } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import TrackRow from "./TrackRow";

export default function TrackRowHeader() {
    return (
        <div className="w-full">
            <TrackRow
                trackRowProps={{
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
