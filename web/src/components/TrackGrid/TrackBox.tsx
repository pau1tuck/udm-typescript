import React from "react";
import { ITrack } from "@/types/Track.interface";

export default function TrackBox(track: ITrack) {
    return (
        <div>
            <div className="w-64 h-72 m-1 flex flex-col justify-start items-center rounded-md bg-darkGray "></div>
        </div>
    );
}
