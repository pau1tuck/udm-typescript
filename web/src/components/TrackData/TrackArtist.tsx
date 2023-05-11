import React from "react";
import { ITrackDataProps } from "@/types/Track.interface";

export default function TrackArtist({ artist }: ITrackDataProps) {
    return <div>{artist}</div>;
}
