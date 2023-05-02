import React from "react";
import { ITrackData } from "@/types/Track.interface";

export default function TrackVersion({ duration }: ITrackData) {
    return <>{duration}</>;
}
