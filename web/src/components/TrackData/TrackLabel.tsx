import React from "react";
import { ITrackData } from "@/types/Track.interface";

export default function TrackLabel({ label }: ITrackData) {
    return <div className="text-secondary">{label}</div>;
}
