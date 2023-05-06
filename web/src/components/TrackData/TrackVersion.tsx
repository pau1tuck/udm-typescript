import React from "react";
import { ITrackDataProps } from "@/types/Track.interface";

export default function TrackVersion({ version }: ITrackDataProps) {
    return <div className="text-tertiary">({version})</div>;
}
