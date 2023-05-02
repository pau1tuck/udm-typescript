import React from "react";
import { ITrack } from "@/types/Track.interface";
import TrackBoxImage from "@/components/GridView/TrackBoxImage";
import TrackBoxData from "@/components/GridView/TrackBoxData";

export default function TrackBox(props: { track: ITrack; index: number }) {
    const { track, index } = props;
    const trackId = track.trackId;
    return (
        <div>
            <div className="w-64 h-72 m-1 flex flex-col justify-start items-center rounded-md mb-10 ml-3 mr-3 bg-darkGray ">
                <TrackBoxImage trackId={trackId} />
                <TrackBoxData track={track} />
            </div>
        </div>
    );
}
