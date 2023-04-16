import React from "react";
import { ITrackData } from "@/types/Track.interface";

export default function TrackVersion(version: ITrackData) {
    return <div className="font-cursive text-blue-400">{version.version}</div>;
}
