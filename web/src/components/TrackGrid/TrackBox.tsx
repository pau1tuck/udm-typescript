// TODAY: Track Image from YouTube

import React from "react";
import { ITrack } from "@/types/Track.interface";
import TrackBoxData from "@/components/TrackGrid/TrackBoxData";
import TrackBoxImage from "@/components/TrackGrid/TrackBoxImage";

export default function TrackBox(props: { track: ITrack }) {
    const { track } = props;
    const trackId = track.trackId;
    return (
        <div>
            <div className="w-64 h-72 m-1 flex flex-col justify-start items-center rounded-md bg-darkGray ">
                <TrackBoxImage trackId={trackId} />
                <TrackBoxData track={track} />
            </div>
        </div>
    );
}
