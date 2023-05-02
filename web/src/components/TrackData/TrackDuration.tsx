import React from "react";
import { ITrackData } from "@/types/Track.interface";

export default function TrackVersion({ duration }: ITrackData) {
    return <div className="text-white">{duration}</div>;
}
