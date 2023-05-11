import React from "react";
import { ITrackDataProps } from "@/types/Track.interface";
import TrackTitle from "@/components/TrackData/TrackTitle";
import TrackVersion from "@/components/TrackData/TrackVersion";
import TrackArtist from "@/components/TrackData/TrackArtist";
import TrackLabel from "@/components/TrackData/TrackLabel";

export default function TrackBoxData(props: { track: ITrackDataProps }) {
    const { track } = props;
    return (
        <div className="mt-3 font-cursive text-center text-white">
            <div className="mt-2 rounded-md">
                <TrackTitle title={track.title} />
            </div>
            {track.version && (
                <div className="mt-2 rounded-md text-tertiary">
                    <TrackVersion version={track.version} />
                </div>
            )}
            <div className="mt-2 rounded-md text-secondary">
                <TrackArtist artist={track.artist} />
            </div>
            <div className="mt-2 rounded-md text-pink-700">
                <TrackLabel label={track.label} />
            </div>
        </div>
    );
}
