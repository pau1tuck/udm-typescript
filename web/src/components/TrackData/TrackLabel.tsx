import React from "react";
import { ITrackDataProps } from "@/types/Track.interface";

export default function TrackLabel({ label }: ITrackDataProps) {
    return <div className="text-secondary">{label}</div>;
}
