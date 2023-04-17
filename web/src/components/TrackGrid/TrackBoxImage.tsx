import React from "react";
import { ITrackData } from "@/types/Track.interface";
import TrackImageBak from "@/components/Track/TrackImageBak";

export default function TrackBoxImage({ trackId }: ITrackData) {
    return (
        <div className="w-60 h-32 mt-2 bg-black rounded-md text-white">
            <TrackImageBak trackId={trackId} width={320} height={180} />
        </div>
    );
}
