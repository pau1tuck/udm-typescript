import React from "react";
import { ITrackData } from "@/types/Track.interface";

export default function TrackArtist({ artist }: ITrackData) {
    return <div className="text-primary">{artist}</div>;
}
