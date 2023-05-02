import React from "react";
import { ITrackData } from "@/types/Track.interface";

export default function TrackTitle({ title }: ITrackData) {
    return <div className="text-white">{title}</div>;
}
