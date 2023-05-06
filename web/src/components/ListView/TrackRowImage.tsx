import React from "react";
import { ITrackDataProps } from "@/types/Track.interface";
import TrackImage from "@/components/TrackData/TrackImage";

export default function TrackRowImage({ trackId }: ITrackDataProps) {
    return (
        <div className="w-[128px] h-[72px] cursor-pointer">
            <TrackImage trackId={trackId} width={128} height={72} />
        </div>
    );
}
