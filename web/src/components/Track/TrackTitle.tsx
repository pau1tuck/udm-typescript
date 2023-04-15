import React from "react";
import { ITrackData } from "@/types/Track.interface";

export function TrackTitle(track: ITrackData) {
    return <div className="font-cursive text-blue-400">{track.title}</div>;
}
