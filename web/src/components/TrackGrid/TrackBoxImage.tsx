import React from "react";
import { ITrackData } from "@/types/Track.interface";

export default function TrackBoxImage({ trackId }: ITrackData) {
    return (<div className="w-60 h-32 mt-2 bg-black rounded-md">{trackId}</div>);
}
