import React from "react";
import { ITrack } from "@/types/Track.interface";

export default function TrackBox(props: { track: ITrack }) {
    const { track } = props;
    return (
        <div>
            <div className="w-64 h-72 m-1 flex flex-col justify-start items-center rounded-md bg-darkGray ">
                {track.title}
            </div>
        </div>
    );
}
