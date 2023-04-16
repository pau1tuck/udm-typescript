import React from "react";
import TrackTitle from "@/components/Track/TrackTitle";
import TrackVersion from "@/components/Track/TrackVersion";
import { ITrackData } from "@/types/Track.interface";

export default function TrackBoxData(track: ITrackData, key: number) {
    return (
        <div>
            <div className="w-60 h-32 mt-2 bg-black rounded-md">
                <TrackTitle title={track.title} />
            </div>
            <div className="w-60 h-32 mt-2 bg-black rounded-md">
                <TrackVersion version={track.version} />
            </div>
        </div>
    );
}
