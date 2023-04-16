import React from "react";
import { ITrackDataProps } from "@/types/Track.interface";

export default function TrackArtist(track: ITrackDataProps) {
    return <div className="font-cursive text-blue-400">{track.artist}</div>;
}
