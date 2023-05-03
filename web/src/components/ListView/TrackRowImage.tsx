import React from "react";
import { ITrackData } from "@/types/Track.interface";
import TrackImage from "@/components/TrackData/TrackImage";

export default function TrackRowImage({ trackId }: ITrackData) {
    return (
        <div className="w-[128px] h-[72px] cursor-pointer">
            <TrackImage trackId={trackId} width={128} height={72} />
        </div>
    );
}
