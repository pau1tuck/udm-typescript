import React from "react";
import { ITrack } from "@/types/Track.interface";

type VersionProps = {
    version: string;
};

export function TrackVersion(version: ITrack) {
    return <div className="font-cursive text-blue-400">{version.version}</div>;
}
