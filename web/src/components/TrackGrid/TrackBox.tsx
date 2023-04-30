import React from "react";
import { ITrack } from "@/types/Track.interface";
import TrackBoxImage from "@/components/TrackGrid/TrackBoxImage";
import TrackBoxData from "@/components/TrackGrid/TrackBoxData";

export default function TrackBox(props: { track: ITrack }) {
    const { track } = props;
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
