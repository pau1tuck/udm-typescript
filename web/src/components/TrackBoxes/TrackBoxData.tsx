import React from "react";
import { ITrackData } from "@/types/Track.interface";

export default function TrackBoxData(props: { track: ITrackData }) {
    const { track } = props;
    return (
        <div>{/*
            <div className="w-60 h-32 mt-2 bg-black rounded-md">
                <TrackTitle title={track.title} />
            </div>
            {track.version ? (<div className="w-60 h-32 mt-2 bg-black rounded-md">
                <TrackVersion version={track.version} />
            </div>) : null}
            <div className="w-60 h-32 mt-2 bg-black rounded-md">
                <TrackArtist title={track.artist} />
            </div>
            <div className="w-60 h-32 mt-2 bg-black rounded-md">
                <TrackLabel title={track.label} />
            </div>*/}
        </div>
    );
}
