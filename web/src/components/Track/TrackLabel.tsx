import React from "react";
import { ITrackData } from "@/types/Track.interface";

export default function TrackLabel(track: ITrackData) {
    return <div className="font-cursive text-blue-400">{track.artist}</div>;
}
