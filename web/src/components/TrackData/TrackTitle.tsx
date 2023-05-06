import React from "react";
import { ITrackDataProps } from "@/types/Track.interface";

export default function TrackTitle({ title }: ITrackDataProps) {
    return <div className="text-white">{title}</div>;
}
